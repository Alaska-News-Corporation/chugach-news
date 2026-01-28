import { Waves, ArrowUp, ArrowDown } from 'lucide-react';

interface TideData {
  time: string;
  height: string;
  type: 'high' | 'low';
}

const tides: TideData[] = [
  { time: "2:14 AM", height: "12.3 ft", type: "high" },
  { time: "8:47 AM", height: "1.2 ft", type: "low" },
  { time: "2:52 PM", height: "11.8 ft", type: "high" },
  { time: "9:21 PM", height: "2.1 ft", type: "low" },
];

const TideChart = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-glacier" />
            <h2 className="font-serif text-lg font-bold">Tide Schedule</h2>
          </div>
          <span className="text-xs text-muted-foreground">Valdez Narrows</span>
        </div>

        <div className="glass-card p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tides.map((tide, index) => (
              <div 
                key={index}
                className={`text-center p-3 rounded-lg ${
                  tide.type === 'high' 
                    ? 'bg-glacier/10 border border-glacier/20' 
                    : 'bg-steel-light/10 border border-steel-light/20'
                }`}
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  {tide.type === 'high' ? (
                    <ArrowUp className="w-3 h-3 text-glacier" />
                  ) : (
                    <ArrowDown className="w-3 h-3 text-steel-light" />
                  )}
                  <span className={`text-xs font-medium uppercase ${
                    tide.type === 'high' ? 'text-glacier' : 'text-steel-light'
                  }`}>
                    {tide.type}
                  </span>
                </div>
                <p className="text-lg font-bold">{tide.height}</p>
                <p className="text-xs text-muted-foreground">{tide.time}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            🌊 Current: Incoming tide • Next high in 4h 23m
          </p>
        </div>
      </div>
    </section>
  );
};

export default TideChart;
