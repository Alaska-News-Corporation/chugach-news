import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Fish, Mountain, Calendar, Anchor, TreePine, Sun, Snowflake, Waves, AlertCircle, Radio } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'WEATHER': Snowflake,
  'TRAFFIC': Mountain,
  'COMMUNITY': Calendar,
  'FISHING': Fish,
  'SAFETY': AlertCircle,
  'EVENTS': Calendar,
  'SPORTS': TreePine,
  'WILDLIFE': Anchor,
  'INFO': Radio,
};

const fallbackItems = [
  { label: 'WILDLIFE', message: 'Salmon Run Update: Early counts promising in Copper River' },
  { label: 'WEATHER', message: 'Thompson Pass: Fresh powder expected tonight' },
  { label: 'EVENTS', message: 'Valdez Ice Climbing Festival: Registration open' },
  { label: 'FISHING', message: 'Prince William Sound: Halibut charter bookings available' },
];

const InfoTicker = () => {
  const { data: tickerItems } = useQuery({
    queryKey: ['ticker_messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ticker_messages')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) {
        console.error('Error fetching ticker messages:', error);
        return fallbackItems;
      }
      
      return data?.length > 0 
        ? data.map(t => ({ label: t.label, message: t.message }))
        : fallbackItems;
    },
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000,
  });

  const displayItems = tickerItems || fallbackItems;

  return (
    <div className="bg-mountain/30 border-y border-border/20 py-1.5 overflow-hidden">
      <div className="info-scroll flex whitespace-nowrap">
        {[...displayItems, ...displayItems].map((item, index) => {
          const IconComponent = iconMap[item.label.toUpperCase()] || Radio;
          return (
            <div key={index} className="flex items-center gap-1.5 mx-6 text-xs">
              <IconComponent className="w-3 h-3 text-primary shrink-0" />
              <span className="text-primary font-medium">{item.label}:</span>
              <span className="text-foreground">{item.message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoTicker;
