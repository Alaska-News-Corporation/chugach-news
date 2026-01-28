import ExpandableNewsCard from './ExpandableNewsCard';

const generateContent = (title: string, category: string): string => {
  const contents: Record<string, string> = {
    wildlife: `The Chugach region continues to amaze wildlife enthusiasts with incredible sightings this week. Local rangers report increased activity as animals prepare for the changing seasons.

**Safety First:** Remember to always maintain a safe distance from wildlife. Bears may be emerging early due to warmer temperatures, so carry bear spray and make noise on trails.

**What You Can Do:** Report any unusual wildlife behavior to the Alaska Department of Fish and Game. Your observations help researchers track animal populations and behaviors.

Stay safe out there, Chugach neighbors! The wilderness is our shared treasure, so let's enjoy it responsibly.`,
    weather: `Mother Nature has quite the show planned for us this week! Our meteorologists are tracking an impressive weather system moving through the Chugach region.

**Practical Tips:**
• Keep your vehicles winterized with emergency supplies
• Check road conditions before traveling through Thompson Pass
• Stock up on essentials - storms can limit access to stores

**Looking Ahead:** After this system passes, we're expecting a beautiful stretch of clear, cold weather perfect for winter activities. Those aurora forecasts are looking promising too!

Stay warm and stay connected with your neighbors, friends!`,
    sports: `What an exciting time for Chugach sports! Our local athletes are making us proud across multiple disciplines.

**Upcoming Events:**
• Valdez Ice Hockey League playoffs begin this Saturday
• Youth basketball registration now open at community centers
• Cross-country ski races at Thompson Pass next weekend

**Get Involved:** It's never too late to pick up a new winter sport! Local clubs offer lessons for all ages and skill levels. Check with your community center for schedules.

Let's cheer on our Chugach athletes! 🏆`,
    business: `The Chugach region economy is showing strong signs of vitality as we enter the new year. Local entrepreneurs are launching exciting ventures, and established businesses are expanding.

**Opportunities:**
• Fishing charter companies hiring for spring season
• New outdoor gear shop opening in Valdez
• Remote work opportunities growing in the region

**Support Local:** Remember, shopping at local businesses keeps dollars circulating in our community. Every purchase makes a difference!

Here's to a prosperous year ahead, Chugach!`,
    local: `Our Chugach communities continue to demonstrate the spirit of cooperation and resilience that makes Alaska special.

**Community Updates:**
• Borough council meeting this Thursday - public comments welcome
• Road maintenance crews working extended hours
• Library programs expanding for winter months

**Get Involved:** Volunteering opportunities abound! From food banks to trail maintenance crews, there's a place for everyone to contribute.

Together, we make Chugach strong! 💪`,
    safety: `Safety is everyone's responsibility in the Chugach backcountry. Please take a moment to review these important reminders.

**Avalanche Safety:**
• Check forecasts daily at avalanche.org
• Carry proper rescue equipment (beacon, probe, shovel)
• Take an avalanche safety course if you haven't already

**Winter Driving:**
• Studded tires or chains required on many routes
• Keep emergency supplies in your vehicle
• Let someone know your travel plans

Stay safe out there! The mountains will always be there tomorrow.`,
    community: `The heart of Chugach beats strong in our communities! From Valdez to Cordova, neighbors are coming together for winter activities and celebrations.

**Upcoming Community Events:**
• Winter carnival planning meeting - volunteers needed!
• Community potluck at the rec center Saturday
• Youth mentorship program seeking participants

**Neighbor Spotlight:** Special thanks to our emergency responders who work around the clock keeping us safe!

Community is what we make it. See you at the next event! 🎉`,
    outdoors: `The Chugach wilderness is calling, and the conditions are fantastic! Here's what you need to know for your next adventure.

**Trail Conditions:**
• Thompson Pass trails groomed and ready for skiing
• Snowshoeing excellent in lower elevations
• Ice climbing routes in prime condition

**Pro Tips:**
• Start early to maximize daylight hours
• Layer properly for changing conditions
• Always carry the ten essentials

Get outside and enjoy the winter wonderland that is the Chugach! 🏔️`,
  };
  
  return contents[category.toLowerCase()] || contents.local;
};

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
    title: "Glacier Calving Spectacle Draws Visitors to Prince William Sound",
    excerpt: "Columbia Glacier's dramatic calving events creating viewing opportunities for winter tourists.",
    category: "Local",
    time: "Just now",
    image: "/images/glacier-calving.jpg",
  },
  {
    title: "Chugach Region Sports: Ice Hockey League Finals This Weekend",
    excerpt: "Valdez Stars face off against Cordova Orcas in an epic showdown on the ice.",
    category: "Sports",
    time: "1h ago",
    image: "/images/hockey-chugach.jpg",
  },
  {
    title: "Valdez Harbor Expansion: New Docks to Boost Fishing Fleet",
    excerpt: "Major infrastructure investment supports growing commercial and sport fishing industries.",
    category: "Business",
    time: "1h ago",
    image: "/images/valdez-harbor.jpg",
  },
  {
    title: "Thompson Pass Snow Report: Record Snowfall Creates Powder Paradise",
    excerpt: "Heli-ski operators reporting exceptional conditions with another 2 feet overnight.",
    category: "Sports",
    time: "2h ago",
    image: "/images/thompson-pass.jpg",
    featured: true,
  },
  {
    title: "Copper River Salmon: Fishery Officials Project Strong 2026 Season",
    excerpt: "Pre-season surveys indicate healthy returns expected for world-famous salmon runs.",
    category: "Business",
    time: "2h ago",
    image: "/images/salmon-copper-river.jpg",
  },
  {
    title: "Winter Storm Warning: Chugach Communities Prepare for Major System",
    excerpt: "Residents advised to stock up as forecasters predict significant snowfall and high winds.",
    category: "Weather",
    time: "3h ago",
    image: "/images/winter-storm.jpg",
  },
  {
    title: "Avalanche Safety Workshop Sees Record Attendance in Valdez",
    excerpt: "Growing interest in backcountry recreation drives demand for safety education.",
    category: "Safety",
    time: "3h ago",
    image: "/images/avalanche-safety.jpg",
  },
];

const LatestNews = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-lg font-bold">Latest News</h2>
          <p className="text-muted-foreground text-xs">Click to expand full story</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <ExpandableNewsCard
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              content={generateContent(item.title, item.category)}
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
