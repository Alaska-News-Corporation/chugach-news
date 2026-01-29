import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const fallbackAlerts = [
  "AVALANCHE WARNING: Chugach backcountry above 3,000ft. Avoid steep slopes.",
  "REMINDER: Check conditions before travel on Thompson Pass.",
];

const AlertTicker = () => {
  const { data: alerts } = useQuery({
    queryKey: ['alerts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) {
        console.error('Error fetching alerts:', error);
        return fallbackAlerts;
      }
      
      return data?.length > 0 
        ? data.map(a => a.message) 
        : fallbackAlerts;
    },
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000,
  });

  const displayAlerts = alerts || fallbackAlerts;

  return (
    <div className="bg-coral/10 border-y border-coral/30 py-1.5 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center gap-1.5 px-3 bg-coral text-foreground py-0.5 text-xs font-semibold shrink-0 z-10">
          LIVE UPDATES
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll flex whitespace-nowrap">
            {[...displayAlerts, ...displayAlerts].map((alert, index) => (
              <span key={index} className="mx-6 text-xs">
                <span className="text-coral">●</span>
                <span className="ml-1.5 text-foreground">{alert}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertTicker;
