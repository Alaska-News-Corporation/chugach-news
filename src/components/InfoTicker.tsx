import { Fish, Mountain, Calendar, Anchor, TreePine, Sun, Snowflake, Waves } from 'lucide-react';

const infoItems = [
  { icon: Fish, label: 'Wildlife', text: 'Salmon Run Update: Early counts promising in Copper River' },
  { icon: Mountain, label: 'Geology', text: 'Mt. Wrangell volcanic activity remains stable' },
  { icon: Calendar, label: 'Events', text: 'Valdez Ice Climbing Festival: Registration open' },
  { icon: Anchor, label: 'Fishing', text: 'Prince William Sound: Halibut charter bookings available' },
  { icon: TreePine, label: 'Recreation', text: 'Chugach National Forest: Winter trails groomed' },
  { icon: Sun, label: 'Seasonal', text: 'Daylight increasing: 5 minutes more sunlight today' },
  { icon: Snowflake, label: 'Skiing', text: 'Thompson Pass: 24" fresh powder overnight' },
  { icon: Waves, label: 'Conditions', text: 'Columbia Glacier: Viewing tours operating' },
];

const InfoTicker = () => {
  return (
    <div className="bg-mountain/30 border-y border-border/20 py-3 overflow-hidden">
      <div className="info-scroll flex whitespace-nowrap">
        {[...infoItems, ...infoItems].map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-8">
            <item.icon className="w-4 h-4 text-primary shrink-0" />
            <span className="text-primary font-medium text-sm">{item.label}:</span>
            <span className="text-foreground text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoTicker;
