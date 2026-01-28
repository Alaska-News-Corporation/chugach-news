import { Clock, TrendingUp } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: "Glacier Calving Creates Spectacular Show in Prince William Sound",
    time: "Just now",
    category: "Nature",
  },
  {
    id: 2,
    title: "Chugach Region Sports: Ice Hockey Season Heats Up!",
    time: "1h ago",
    category: "Sports",
  },
  {
    id: 3,
    title: "Valdez Fishing Fleet: Record Halibut Season Anticipated",
    time: "1h ago",
    category: "Business",
  },
  {
    id: 4,
    title: "Winter Backcountry Safety: New Avalanche Beacons Required",
    time: "2h ago",
    category: "Safety",
  },
];

const TopStories = () => {
  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-serif font-bold text-lg">Top Stories</h3>
      </div>
      <div className="space-y-4">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold shrink-0">
                {story.id}
              </span>
              <div>
                <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
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
