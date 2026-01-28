import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const categories = ['local', 'weather', 'wildlife', 'sports', 'business', 'community', 'outdoors', 'safety'];

const chugachTopics = [
  'Thompson Pass record snowfall and skiing conditions',
  'Prince William Sound glacier viewing and calving events',
  'Valdez harbor fishing fleet and halibut season',
  'Copper River salmon run predictions',
  'Chugach backcountry avalanche safety',
  'Cordova community events and festivals',
  'Whittier tunnel and ferry schedules',
  'Chitina dipnet fishing preparations',
  'McCarthy and Wrangell-St. Elias tourism',
  'Girdwood resort and skiing updates',
  'Wildlife sightings: bears, moose, eagles',
  'Winter storm preparedness in the Chugach',
  'Ice hockey league updates in Valdez',
  'Local business openings and opportunities',
  'Richardson Highway road conditions',
  'Aurora borealis viewing forecasts',
  'Seward coastal community news',
  'Chugach National Forest recreation updates',
];

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

    // Select random category and topic
    const category = categories[Math.floor(Math.random() * categories.length)];
    const topic = chugachTopics[Math.floor(Math.random() * chugachTopics.length)];
    const isFeatured = Math.random() > 0.7;

    console.log(`Generating ${category} article about: ${topic}`);

    const systemPrompt = `You are a skilled local news writer for Chugach News, serving the Chugach Region of Alaska including Valdez, Cordova, Whittier, Girdwood, Seward, Chitina, and McCarthy. 

Write in a fun, encouraging, adventurous, safety-first style that provides practical and useful advice to Alaskans. Be warm and community-focused while maintaining journalistic integrity.

Current date context: Late January 2026, deep winter in Alaska with short daylight hours and cold temperatures.

Always include:
- Practical advice or safety tips when relevant
- Local context and community connections
- Encouragement for outdoor activities while emphasizing safety
- References to specific Chugach region locations`;

    const userPrompt = `Write a complete news article for the ${category} section about: ${topic}

Return a JSON object with exactly these fields:
{
  "title": "A compelling headline under 80 characters",
  "excerpt": "A 1-2 sentence summary under 200 characters",
  "content": "The full article content, 300-500 words, with multiple paragraphs"
}

Make it timely, relevant, and engaging for Chugach region residents.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const articleContent = aiData.choices?.[0]?.message?.content;
    
    if (!articleContent) {
      throw new Error("No content received from AI");
    }

    console.log("AI response received, parsing article...");
    
    let article;
    try {
      article = JSON.parse(articleContent);
    } catch (e) {
      console.error("Failed to parse AI response:", articleContent);
      throw new Error("Failed to parse AI response");
    }

    // Insert the article into the database
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
      console.error("Database insert error:", error);
      throw new Error("Failed to save article");
    }

    console.log("Article saved successfully:", data.id);

    return new Response(JSON.stringify({ success: true, article: data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error generating news:", error);
    return new Response(JSON.stringify({ error: "Failed to generate news" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
