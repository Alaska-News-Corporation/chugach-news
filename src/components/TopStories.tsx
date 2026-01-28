import { Clock, TrendingUp } from 'lucide-react';

const stories = [
  { id: 1, title: "Glacier Calving Creates Spectacular Show in Prince William Sound", time: "Just now", category: "Nature" },
  { id: 2, title: "Chugach Region Sports: Ice Hockey Season Heats Up!", time: "1h ago", category: "Sports" },
  { id: 3, title: "Valdez Fishing Fleet: Record Halibut Season Anticipated", time: "1h ago", category: "Business" },
  { id: 4, title: "Winter Backcountry Safety: New Avalanche Beacons Required", time: "2h ago", category: "Safety" },
  { id: 5, title: "Cordova Community Rallies for Winter Festival Planning", time: "2h ago", category: "Community" },
];

const TopStories = () => {
  return (
    <div className="glass-card p-3">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="font-serif font-bold text-sm">Top Stories</h3>
      </div>
      <div className="space-y-2.5">
        {stories.map((story, index) => (
          <div key={story.id} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                {story.id}
              </span>
              <div>
                <h4 className="text-xs font-medium group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {story.title}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-muted-foreground">
                  <Clock className="w-2.5 h-2.5" />
                  <span>{story.time}</span>
                  <span>•</span>
                  <span className="text-primary">{story.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStories;
