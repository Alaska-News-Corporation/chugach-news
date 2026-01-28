import { AlertTriangle } from 'lucide-react';

const alerts = [
  "AVALANCHE WARNING: Chugach backcountry above 3,000ft. Avoid steep slopes.",
  "WHITEOUT CONDITIONS: Thompson Pass closed. Check conditions before travel.",
  "POWER OUTAGE: Crews responding to Valdez downtown. Restoration by 4PM.",
  "MOOSE ALERT: High activity on Richardson Hwy near Mile 25. Drive slow.",
  "COLD SNAP: Temps dropping to -25F tonight in Cordova. Protect your pipes.",
  "REMINDER: Chugach School District weather delays announced by 6AM Thursday.",
];

const AlertTicker = () => {
  return (
    <div className="bg-destructive/10 border-y border-destructive/30 py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center gap-2 px-4 bg-destructive text-destructive-foreground py-1 rounded-r-full shrink-0 z-10">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-semibold text-sm">LIVE UPDATES</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll flex whitespace-nowrap">
            {[...alerts, ...alerts].map((alert, index) => (
              <span key={index} className="mx-8 text-sm">
                <span className="text-destructive">●</span>
                <span className="ml-2 text-foreground">{alert}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertTicker;
