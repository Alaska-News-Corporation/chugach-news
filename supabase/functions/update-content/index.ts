import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Content type templates
const contentTypes = {
  ticker: {
    labels: ['WEATHER', 'TRAFFIC', 'COMMUNITY', 'FISHING', 'SAFETY', 'EVENTS', 'SPORTS', 'WILDLIFE'],
    prompt: `Generate a brief, informative ticker message for a regional Alaska news site (Chugach region: Valdez, Cordova, Whittier).
Return JSON: { "label": "CATEGORY", "message": "Brief update under 100 characters" }
Make it timely for late January 2026 winter conditions. Be practical and helpful.`
  },
  alert: {
    severities: ['info', 'warning', 'critical'],
    prompt: `Generate a realistic weather or safety alert for the Chugach region of Alaska in late January 2026.
Return JSON: { "severity": "info|warning|critical", "message": "Alert message under 150 characters", "expires_hours": 12 }
Consider: winter storms, avalanche conditions, road closures, marine weather, aurora viewing. Most should be info/warning level.`
  },
  weather_advisory: {
    prompt: `Generate a realistic weather update or advisory for Prince William Sound/Chugach region in late January.
Return JSON: { "type": "forecast|advisory|watch", "message": "Weather update under 200 characters", "locations": ["Valdez", "Cordova"] }
Include temperatures, snow conditions, wind, visibility as appropriate.`
  }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Supabase credentials not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Parse request body for content type, default to all
    let contentType = 'all';
    try {
      const body = await req.json();
      contentType = body.type || 'all';
    } catch {
      // Use default
    }

    console.log(`Updating content: ${contentType}`);
    const results: Record<string, unknown> = {};

    // Helper function to call AI
    async function generateContent(prompt: string): Promise<string> {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { 
              role: "system", 
              content: "You are a local news content generator for Chugach News, serving the Chugach Region of Alaska (Valdez, Cordova, Whittier, Girdwood, Seward). Write in a helpful, safety-conscious, community-focused style. Current date: Late January 2026, deep winter." 
            },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" }
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("AI error:", response.status, errorText);
        if (response.status === 429) throw new Error("Rate limit exceeded");
        if (response.status === 402) throw new Error("Payment required");
        throw new Error(`AI error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "";
    }

    // Update ticker messages
    if (contentType === 'all' || contentType === 'ticker') {
      try {
        // Deactivate some old tickers (keep recent ones, remove oldest)
        const { data: oldTickers } = await supabase
          .from('ticker_messages')
          .select('id')
          .eq('active', true)
          .order('created_at', { ascending: true })
          .limit(3);
        
        if (oldTickers && oldTickers.length > 0) {
          await supabase
            .from('ticker_messages')
            .update({ active: false })
            .in('id', oldTickers.map(t => t.id));
        }

        // Generate 2 new ticker messages
        for (let i = 0; i < 2; i++) {
          const content = await generateContent(contentTypes.ticker.prompt);
          const parsed = JSON.parse(content);
          
          const { error } = await supabase
            .from('ticker_messages')
            .insert({
              label: parsed.label || 'INFO',
              message: parsed.message,
              active: true
            });
          
          if (error) console.error("Ticker insert error:", error);
        }
        
        results.ticker = { success: true, count: 2 };
        console.log("Ticker messages updated");
      } catch (e) {
        console.error("Ticker update failed:", e);
        results.ticker = { success: false, error: String(e) };
      }
    }

    // Update alerts
    if (contentType === 'all' || contentType === 'alert') {
      try {
        // Expire old alerts
        await supabase
          .from('alerts')
          .update({ active: false })
          .lt('expires_at', new Date().toISOString());

        // 50% chance to generate a new alert each cycle
        if (Math.random() > 0.5) {
          const content = await generateContent(contentTypes.alert.prompt);
          const parsed = JSON.parse(content);
          
          const expiresAt = new Date();
          expiresAt.setHours(expiresAt.getHours() + (parsed.expires_hours || 12));
          
          const { error } = await supabase
            .from('alerts')
            .insert({
              severity: parsed.severity || 'info',
              message: parsed.message,
              active: true,
              expires_at: expiresAt.toISOString()
            });
          
          if (error) console.error("Alert insert error:", error);
          results.alert = { success: true, created: true };
        } else {
          results.alert = { success: true, created: false };
        }
        console.log("Alerts updated");
      } catch (e) {
        console.error("Alert update failed:", e);
        results.alert = { success: false, error: String(e) };
      }
    }

    // Generate a news article (delegating to existing function logic)
    if (contentType === 'all' || contentType === 'news') {
      try {
        const categories = ['local', 'weather', 'wildlife', 'sports', 'business', 'community', 'outdoors', 'safety'];
        const chugachTopics = [
          'Thompson Pass skiing and snowfall conditions',
          'Prince William Sound glacier viewing updates',
          'Valdez harbor fishing fleet news',
          'Copper River salmon preparation',
          'Chugach backcountry avalanche report',
          'Cordova community events',
          'Whittier ferry and tunnel updates',
          'Wildlife sightings in the region',
          'Winter storm safety tips',
          'Local business spotlight',
          'Richardson Highway conditions',
          'Aurora borealis forecast',
          'Ice hockey league updates',
          'Outdoor recreation trail reports',
        ];

        const category = categories[Math.floor(Math.random() * categories.length)];
        const topic = chugachTopics[Math.floor(Math.random() * chugachTopics.length)];
        const isFeatured = Math.random() > 0.8;

        const newsPrompt = `Write a complete news article for the ${category} section about: ${topic}
Return JSON: {
  "title": "Compelling headline under 80 characters",
  "excerpt": "1-2 sentence summary under 200 characters",
  "content": "Full article, 300-500 words, multiple paragraphs"
}
Make it timely for late January 2026 in the Chugach region.`;

        const content = await generateContent(newsPrompt);
        const article = JSON.parse(content);

        const { data, error } = await supabase
          .from('news_articles')
          .insert({
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            category: category,
            featured: isFeatured,
            published_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (error) {
          console.error("News insert error:", error);
          results.news = { success: false, error: String(error) };
        } else {
          results.news = { success: true, id: data.id, title: article.title };
          console.log("News article created:", data.id);
        }
      } catch (e) {
        console.error("News generation failed:", e);
        results.news = { success: false, error: String(e) };
      }
    }

    // Clean up old content (keep last 50 articles, 20 tickers)
    if (contentType === 'all' || contentType === 'cleanup') {
      try {
        // Get IDs of articles to keep
        const { data: recentArticles } = await supabase
          .from('news_articles')
          .select('id')
          .order('published_at', { ascending: false })
          .limit(50);

        if (recentArticles && recentArticles.length === 50) {
          const keepIds = recentArticles.map(a => a.id);
          const { error } = await supabase
            .from('news_articles')
            .delete()
            .not('id', 'in', `(${keepIds.join(',')})`);
          
          if (error) console.error("Cleanup error:", error);
        }

        results.cleanup = { success: true };
        console.log("Content cleanup completed");
      } catch (e) {
        console.error("Cleanup failed:", e);
        results.cleanup = { success: false, error: String(e) };
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      timestamp: new Date().toISOString(),
      results 
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Content update error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    
    let status = 500;
    if (message.includes("Rate limit")) status = 429;
    if (message.includes("Payment required")) status = 402;

    return new Response(JSON.stringify({ error: message }), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
