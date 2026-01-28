import { useEffect, useState } from 'react';
import { Clock, FileText, Users, Radio } from 'lucide-react';

const StatsBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'America/Anchorage',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="bg-secondary/90 backdrop-blur-sm border-b border-border/50 py-1.5 px-3">
      <div className="container mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Alaska Time:</span>
            <span className="font-semibold text-foreground">{formatTime(time)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Stories Today:</span>
            <span className="font-semibold text-foreground">18</span>
            <span className="text-primary text-[10px]">+5</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Readers Online:</span>
            <span className="font-semibold text-foreground">892</span>
            <span className="text-primary text-[10px]">+67</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Live Updates:</span>
            <span className="font-semibold text-primary">Active</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-coral"></span>
          </span>
          <span className="text-coral font-semibold text-[10px]">LIVE</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
