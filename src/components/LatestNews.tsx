import NewsCard from './NewsCard';

const newsItems = [
  {
    title: "Bears Emerging Early: Chugach Wildlife Officials Issue Awareness Advisory",
    excerpt: "Warmer than usual January temps have some bears stirring early. Here's what residents need to know about encounters.",
    category: "Wildlife",
    time: "Just now",
    image: "/images/bear-chugach.jpg",
    featured: true,
  },
  {
    title: "Glacier Calving Spectacle Draws Record Visitors to Prince William Sound",
    excerpt: "Columbia Glacier's dramatic calving events creating once-in-a-lifetime viewing opportunities for winter tourists.",
    category: "Local",
    time: "Just now",
    image: "/images/glacier-calving.jpg",
  },
  {
    title: "Chugach Region Sports: Ice Hockey League Finals This Weekend",
    excerpt: "Valdez Stars face off against Cordova Orcas in what promises to be an epic showdown on the ice.",
    category: "Sports",
    time: "1h ago",
    image: "/images/hockey-chugach.jpg",
  },
  {
    title: "Valdez Harbor Expansion: New Docks to Boost Fishing Fleet",
    excerpt: "Major infrastructure investment promises to support growing commercial and sport fishing industries.",
    category: "Business",
    time: "1h ago",
    image: "/images/valdez-harbor.jpg",
  },
  {
    title: "Thompson Pass Snow Report: Record Snowfall Creates Powder Paradise",
    excerpt: "Heli-ski operators reporting exceptional conditions as Thompson Pass receives another 2 feet overnight.",
    category: "Sports",
    time: "2h ago",
    image: "/images/thompson-pass.jpg",
  },
  {
    title: "Copper River Salmon: Fishery Officials Project Strong 2026 Season",
    excerpt: "Pre-season surveys indicate healthy returns expected for the world-famous Copper River salmon runs.",
    category: "Business",
    time: "2h ago",
    image: "/images/salmon-copper-river.jpg",
  },
  {
    title: "Winter Storm Warning: Chugach Communities Prepare for Major System",
    excerpt: "Residents advised to stock up on supplies as forecasters predict significant snowfall and high winds.",
    category: "Weather",
    time: "3h ago",
    image: "/images/winter-storm.jpg",
  },
  {
    title: "Avalanche Safety Workshop Sees Record Attendance in Valdez",
    excerpt: "Growing interest in backcountry recreation drives demand for safety education programs.",
    category: "Safety",
    time: "3h ago",
    image: "/images/avalanche-safety.jpg",
    featured: true,
  },
];

const LatestNews = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold">Latest News</h2>
          <p className="text-muted-foreground text-sm">Click to expand full story</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              category={item.category}
              time={item.time}
              image={item.image}
              featured={item.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
