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
    <div className="bg-coral/10 border-y border-coral/30 py-1.5 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center gap-1.5 px-3 bg-coral text-foreground py-0.5 text-xs font-semibold shrink-0 z-10">
          LIVE UPDATES
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll flex whitespace-nowrap">
            {[...alerts, ...alerts].map((alert, index) => (
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
