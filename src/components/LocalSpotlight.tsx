import { Heart, Store, Award, Quote } from 'lucide-react';

interface SpotlightItem {
  type: 'business' | 'hero' | 'milestone';
  title: string;
  description: string;
  location: string;
}

const spotlights: SpotlightItem[] = [
  {
    type: 'business',
    title: "Fat Mermaid Celebrates 10 Years",
    description: "Cordova's beloved waterfront eatery marks a decade of serving fresh seafood and live music to the community.",
    location: "Cordova",
  },
  {
    type: 'hero',
    title: "Volunteer Firefighters Complete Training",
    description: "12 new volunteers graduate from Valdez Fire Department's winter certification program.",
    location: "Valdez",
  },
  {
    type: 'milestone',
    title: "Youth Hockey Program Expands",
    description: "Record enrollment as Chugach Youth Hockey adds new age divisions for the 2026 season.",
    location: "Region-wide",
  },
];

const typeConfig = {
  business: { icon: Store, color: 'text-gold', bg: 'bg-gold/10' },
  hero: { icon: Heart, color: 'text-coral', bg: 'bg-coral/10' },
  milestone: { icon: Award, color: 'text-primary', bg: 'bg-primary/10' },
};

const LocalSpotlight = () => {
  return (
    <section className="py-6 bg-mountain/20">
      <div className="container mx-auto px-3">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-coral" />
          <h2 className="font-serif text-lg font-bold">Community Spotlight</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {spotlights.map((item, index) => {
            const config = typeConfig[item.type];
            const IconComponent = config.icon;
            
            return (
              <div 
                key={index}
                className={`glass-card p-4 ${config.bg} hover:border-primary/50 transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-background/50`}>
                    <IconComponent className={`w-5 h-5 ${config.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-medium text-muted-foreground">
                      {item.location}
                    </span>
                    <h3 className="font-medium text-sm mt-0.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Quote */}
        <div className="mt-4 glass-card p-4 flex items-center gap-4">
          <Quote className="w-8 h-8 text-primary/30 shrink-0" />
          <div>
            <p className="text-sm italic text-muted-foreground">
              "The strength of our communities lies in how we show up for each other, especially during the long winter months."
            </p>
            <p className="text-xs text-primary mt-1">— Mayor Ruth Knight, Valdez</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSpotlight;
