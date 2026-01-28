import { Mountain, Fish, Snowflake, Ship, TreePine, AlertTriangle } from 'lucide-react';

interface TrailCondition {
  name: string;
  status: 'excellent' | 'good' | 'fair' | 'closed';
  details: string;
  icon: typeof Mountain;
}

const trails: TrailCondition[] = [
  {
    name: "Thompson Pass Backcountry",
    status: "excellent",
    details: "24\" fresh powder, low avalanche danger",
    icon: Snowflake,
  },
  {
    name: "Valdez Glacier Trail",
    status: "good",
    details: "Groomed, moderate ice patches",
    icon: Mountain,
  },
  {
    name: "Mineral Creek Trail",
    status: "fair",
    details: "Snowshoes recommended, some drifting",
    icon: TreePine,
  },
  {
    name: "Solomon Gulch",
    status: "good",
    details: "Clear conditions, slippery spots",
    icon: Fish,
  },
];

const statusColors = {
  excellent: 'bg-aurora-green/20 text-aurora-green border-aurora-green/30',
  good: 'bg-primary/20 text-primary border-primary/30',
  fair: 'bg-gold/20 text-gold border-gold/30',
  closed: 'bg-coral/20 text-coral border-coral/30',
};

const OutdoorRecreation = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-lg font-bold">Outdoor Recreation</h2>
          </div>
          <span className="text-xs text-muted-foreground">Trail & Activity Conditions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Trail Conditions */}
          <div className="lg:col-span-2 glass-card p-4">
            <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
              <TreePine className="w-4 h-4 text-primary" />
              Trail Conditions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {trails.map((trail, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <trail.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{trail.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{trail.details}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase border ${statusColors[trail.status]}`}>
                    {trail.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-3">
            {/* Fishing Report */}
            <div className="glass-card p-3">
              <div className="flex items-center gap-2 mb-2">
                <Fish className="w-4 h-4 text-glacier" />
                <h3 className="font-medium text-sm">Fishing Report</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground font-medium">Prince William Sound:</span> Winter kings active near Valdez Narrows. Ice fishing excellent at Summit Lake.
              </p>
            </div>

            {/* Harbor Status */}
            <div className="glass-card p-3">
              <div className="flex items-center gap-2 mb-2">
                <Ship className="w-4 h-4 text-primary" />
                <h3 className="font-medium text-sm">Harbor Status</h3>
              </div>
              <div className="text-xs space-y-1">
                <p><span className="text-aurora-green">●</span> Valdez: Open, calm conditions</p>
                <p><span className="text-gold">●</span> Cordova: Open, small craft advisory</p>
                <p><span className="text-aurora-green">●</span> Whittier: Open, light chop</p>
              </div>
            </div>

            {/* Avalanche Alert */}
            <div className="glass-card p-3 bg-coral/5 border-coral/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-coral" />
                <h3 className="font-medium text-sm text-coral">Avalanche Advisory</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-coral font-medium">MODERATE</span> risk in alpine terrain. Check cnfaic.org before heading out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorRecreation;
