import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import ExpandableNewsCard from './ExpandableNewsCard';

const categoryImages: Record<string, string> = {
  wildlife: '/images/bear-chugach.jpg',
  weather: '/images/winter-storm.jpg',
  sports: '/images/hockey-chugach.jpg',
  business: '/images/valdez-harbor.jpg',
  local: '/images/glacier-calving.jpg',
  safety: '/images/avalanche-safety.jpg',
  community: '/images/valdez-harbor.jpg',
  outdoors: '/images/thompson-pass.jpg',
};

const fallbackNews = [
  {
    id: '1',
    title: "Bears Emerging Early: Chugach Wildlife Officials Issue Awareness Advisory",
    excerpt: "Warmer than usual January temps have some bears stirring early. Here's what residents need to know.",
    content: "Local rangers report increased wildlife activity as animals prepare for the changing seasons.\n\n**Safety First:** Remember to always maintain a safe distance from wildlife. Bears may be emerging early, so carry bear spray and make noise on trails.\n\nStay safe out there, Chugach neighbors!",
    category: "wildlife",
    published_at: new Date().toISOString(),
    featured: true,
    image_url: null as string | null,
  },
  {
    id: '2',
    title: "Thompson Pass Snow Report: Record Snowfall Creates Powder Paradise",
    excerpt: "Heli-ski operators reporting exceptional conditions with another 2 feet overnight.",
    content: "The Chugach wilderness is calling, and the conditions are fantastic!\n\n**Trail Conditions:**\n• Thompson Pass trails groomed and ready for skiing\n• Snowshoeing excellent in lower elevations\n\nGet outside and enjoy the winter wonderland!",
    category: "outdoors",
    published_at: new Date().toISOString(),
    featured: true,
    image_url: null as string | null,
  },
  {
    id: '3',
    title: "Winter Storm Warning: Chugach Communities Prepare for Major System",
    excerpt: "Residents advised to stock up as forecasters predict significant snowfall.",
    content: "Our meteorologists are tracking an impressive weather system moving through the Chugach region.\n\n**Practical Tips:**\n• Keep your vehicles winterized\n• Check road conditions before traveling\n• Stock up on essentials",
    category: "weather",
    published_at: new Date().toISOString(),
    featured: false,
    image_url: null as string | null,
  },
  {
    id: '4',
    title: "Chugach Region Sports: Ice Hockey League Finals This Weekend",
    excerpt: "Valdez Stars face off against Cordova Orcas in an epic showdown.",
    content: "What an exciting time for Chugach sports!\n\n**Upcoming Events:**\n• Valdez Ice Hockey League playoffs begin Saturday\n• Cross-country ski races at Thompson Pass\n\nLet's cheer on our Chugach athletes! 🏆",
    category: "sports",
    published_at: new Date().toISOString(),
    featured: false,
    image_url: null as string | null,
  },
];

function formatTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

const LatestNews = () => {
  const { data: newsItems, isLoading } = useQuery({
    queryKey: ['news_articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(8);
      
      if (error) {
        console.error('Error fetching news:', error);
        return fallbackNews;
      }
      
      return data?.length > 0 ? data : fallbackNews;
    },
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000,
  });

  const displayNews = newsItems || fallbackNews;

  return (
    <section className="py-6">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-lg font-bold">Latest News</h2>
          <p className="text-muted-foreground text-xs">
            {isLoading ? 'Loading...' : 'Click to expand full story'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayNews.map((item) => (
            <ExpandableNewsCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              content={item.content}
              category={item.category}
              time={formatTime(item.published_at)}
              image={item.image_url || categoryImages[item.category.toLowerCase()] || '/images/valdez-harbor.jpg'}
              featured={item.featured || false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
