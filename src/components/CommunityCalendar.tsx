import { Calendar, MapPin, Clock, Users, Star, Ticket } from 'lucide-react';

interface CalendarEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'festival' | 'sports' | 'community' | 'workshop' | 'entertainment';
  featured?: boolean;
}

const events: CalendarEvent[] = [
  {
    title: "Valdez Ice Climbing Festival",
    date: "Feb 14-16",
    time: "All Day",
    location: "Valdez",
    type: "festival",
    featured: true,
  },
  {
    title: "Winter Carnival Planning Meeting",
    date: "Jan 30",
    time: "6:00 PM",
    location: "Valdez Civic Center",
    type: "community",
  },
  {
    title: "Cordova Orcas vs Valdez Stars",
    date: "Feb 1",
    time: "7:00 PM",
    location: "Valdez Ice Arena",
    type: "sports",
  },
  {
    title: "Avalanche Safety Workshop",
    date: "Feb 3",
    time: "10:00 AM",
    location: "Thompson Pass Lodge",
    type: "workshop",
  },
  {
    title: "Community Potluck Dinner",
    date: "Feb 8",
    time: "5:30 PM",
    location: "Whittier Community Hall",
    type: "community",
  },
  {
    title: "Live Music: Northern Lights Band",
    date: "Feb 15",
    time: "8:00 PM",
    location: "Fat Mermaid, Cordova",
    type: "entertainment",
  },
];

const typeStyles: Record<string, { bg: string; text: string; icon: typeof Calendar }> = {
  festival: { bg: 'bg-gold/20', text: 'text-gold', icon: Star },
  sports: { bg: 'bg-glacier/20', text: 'text-glacier', icon: Users },
  community: { bg: 'bg-primary/20', text: 'text-primary', icon: Users },
  workshop: { bg: 'bg-coral/20', text: 'text-coral', icon: Calendar },
  entertainment: { bg: 'bg-aurora-purple/20', text: 'text-aurora-purple', icon: Ticket },
};

const CommunityCalendar = () => {
  return (
    <section className="py-6 bg-mountain/20">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-lg font-bold">Community Calendar</h2>
          </div>
          <span className="text-xs text-muted-foreground">Upcoming Events</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {events.map((event, index) => {
            const style = typeStyles[event.type];
            const IconComponent = style.icon;
            
            return (
              <div
                key={index}
                className={`glass-card p-3 transition-all duration-300 hover:border-primary/50 cursor-pointer ${
                  event.featured ? 'ring-1 ring-gold/30 bg-gold/5' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium uppercase ${style.bg} ${style.text}`}>
                        {event.type}
                      </span>
                      {event.featured && (
                        <Star className="w-3 h-3 text-gold fill-gold" />
                      )}
                    </div>
                    <h3 className="font-medium text-sm truncate">{event.title}</h3>
                  </div>
                  <IconComponent className={`w-4 h-4 ${style.text} shrink-0`} />
                </div>
                
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityCalendar;
