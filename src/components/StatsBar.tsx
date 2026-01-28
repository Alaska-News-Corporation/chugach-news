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
    <div className="bg-secondary/80 backdrop-blur-sm border-b border-border/50 py-2 px-4">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Alaska Time:</span>
            <span className="font-semibold text-foreground">{formatTime(time)}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Stories Today:</span>
            <span className="font-semibold text-foreground">18</span>
            <span className="text-primary text-xs">+5</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Readers Online:</span>
            <span className="font-semibold text-foreground">892</span>
            <span className="text-primary text-xs">+67</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Live Updates:</span>
            <span className="font-semibold text-primary">Active</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
          <span className="text-destructive font-semibold">LIVE</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
