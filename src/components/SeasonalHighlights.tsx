import { Sun, Moon, Sparkles, Thermometer, Sunrise, Sunset } from 'lucide-react';

const SeasonalHighlights = () => {
  // Late January data for Chugach region
  const daylight = {
    sunrise: "9:42 AM",
    sunset: "4:58 PM",
    totalLight: "7h 16m",
    gaining: "+4m 32s today",
  };

  const aurora = {
    forecast: "Active",
    kpIndex: 4,
    viewingChance: "Good",
    bestTime: "11 PM - 2 AM",
  };

  return (
    <section className="py-6">
      <div className="container mx-auto px-3">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-gold" />
          <h2 className="font-serif text-lg font-bold">Seasonal Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Daylight Card */}
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-4 h-4 text-gold" />
              <h3 className="font-medium text-sm">Daylight Hours</h3>
              <span className="ml-auto text-xs text-primary font-medium">{daylight.gaining}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-background/50 rounded-lg p-2">
                <Sunrise className="w-4 h-4 text-gold mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Sunrise</p>
                <p className="text-sm font-medium">{daylight.sunrise}</p>
              </div>
              <div className="bg-background/50 rounded-lg p-2">
                <Sun className="w-4 h-4 text-gold mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Total Light</p>
                <p className="text-sm font-medium">{daylight.totalLight}</p>
              </div>
              <div className="bg-background/50 rounded-lg p-2">
                <Sunset className="w-4 h-4 text-coral mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Sunset</p>
                <p className="text-sm font-medium">{daylight.sunset}</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3 text-center">
              ☀️ Days are getting longer! Spring equinox in 52 days.
            </p>
          </div>

          {/* Aurora Card */}
          <div className="glass-card p-4 bg-gradient-to-br from-aurora-purple/10 to-aurora-green/10">
            <div className="flex items-center gap-2 mb-3">
              <Moon className="w-4 h-4 text-aurora-purple" />
              <h3 className="font-medium text-sm">Aurora Forecast</h3>
              <span className={`ml-auto px-2 py-0.5 rounded text-xs font-medium ${
                aurora.forecast === 'Active' 
                  ? 'bg-aurora-green/20 text-aurora-green' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {aurora.forecast}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-background/50 rounded-lg p-2">
                <Thermometer className="w-4 h-4 text-aurora-purple mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Kp Index</p>
                <p className="text-sm font-medium">{aurora.kpIndex}</p>
              </div>
              <div className="bg-background/50 rounded-lg p-2">
                <Sparkles className="w-4 h-4 text-aurora-green mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Visibility</p>
                <p className="text-sm font-medium">{aurora.viewingChance}</p>
              </div>
              <div className="bg-background/50 rounded-lg p-2">
                <Moon className="w-4 h-4 text-glacier mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Best Time</p>
                <p className="text-sm font-medium text-[10px]">{aurora.bestTime}</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3 text-center">
              🌌 Clear skies expected tonight. Head north of town for best views!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlights;
