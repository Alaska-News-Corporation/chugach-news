import { Cloud, Wind, Droplets, Thermometer, Eye, Gauge, Sunrise, Sunset, Mountain, Snowflake } from 'lucide-react';

const WeatherSection = () => {
  // Mock weather data for Valdez area
  const currentWeather = {
    temp: 24,
    feelsLike: 18,
    condition: 'Light Snow',
    humidity: 78,
    windSpeed: 12,
    windDirection: 'NNE',
    visibility: 5.2,
    pressure: 29.82,
    dewPoint: 19,
    uvIndex: 1,
    snowfall24h: 4.2,
    snowBase: 156,
  };

  const forecast = [
    { day: 'Today', high: 26, low: 18, condition: 'Snow', icon: Snowflake, precip: 80 },
    { day: 'Wed', high: 28, low: 20, condition: 'Cloudy', icon: Cloud, precip: 40 },
    { day: 'Thu', high: 30, low: 22, condition: 'Partly Cloudy', icon: Cloud, precip: 20 },
    { day: 'Fri', high: 27, low: 19, condition: 'Snow', icon: Snowflake, precip: 70 },
    { day: 'Sat', high: 25, low: 16, condition: 'Snow', icon: Snowflake, precip: 85 },
  ];

  const locations = [
    { name: 'Valdez', temp: 24, condition: 'Snow' },
    { name: 'Cordova', temp: 28, condition: 'Cloudy' },
    { name: 'Whittier', temp: 26, condition: 'Rain' },
    { name: 'Thompson Pass', temp: 18, condition: 'Heavy Snow' },
  ];

  return (
    <section className="py-6 bg-card/50">
      <div className="container mx-auto px-3">
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="w-5 h-5 text-glacier" />
          <h2 className="font-serif text-xl font-bold text-foreground">Chugach Weather Center</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Windy.com Radar Embed */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-border/50 bg-[#1a1a2e]">
            <div className="p-3 bg-[#1a1a2e] border-b border-border/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">LIVE RADAR • Prince William Sound Region</span>
                <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold rounded animate-pulse">LIVE</span>
              </div>
            </div>
            <iframe
              title="Windy Weather Radar"
              width="100%"
              height="480"
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=in&metricTemp=°F&metricWind=mph&zoom=7&overlay=radar&product=radar&level=surface&lat=60.7&lon=-147.0&detailLat=60.7&detailLon=-147.0&marker=true&message=true&calendar=now&pressure=true&type=map&menu=&forecast=12&detail=true&theme=dark"
              frameBorder="0"
              className="w-full"
              style={{ minHeight: '480px' }}
            />
          </div>

          {/* Current Conditions Panel */}
          <div className="space-y-4">
            {/* Main Temp Card */}
            <div className="rounded-lg bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] p-4 border border-glacier/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Valdez, AK</span>
                <span className="text-[10px] text-muted-foreground">Updated 5 min ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-foreground">{currentWeather.temp}°</div>
                <div>
                  <Snowflake className="w-10 h-10 text-glacier animate-pulse" />
                </div>
              </div>
              <p className="text-sm text-foreground/80 mt-1">{currentWeather.condition}</p>
              <p className="text-xs text-muted-foreground">Feels like {currentWeather.feelsLike}°F</p>
            </div>

            {/* Weather Metrics Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-card/80 p-3 border border-border/30">
                <div className="flex items-center gap-2 mb-1">
                  <Wind className="w-3.5 h-3.5 text-glacier" />
                  <span className="text-[10px] text-muted-foreground uppercase">Wind</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{currentWeather.windSpeed} mph</p>
                <p className="text-[10px] text-muted-foreground">{currentWeather.windDirection}</p>
              </div>
              
              <div className="rounded-lg bg-card/80 p-3 border border-border/30">
                <div className="flex items-center gap-2 mb-1">
                  <Droplets className="w-3.5 h-3.5 text-glacier" />
                  <span className="text-[10px] text-muted-foreground uppercase">Humidity</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{currentWeather.humidity}%</p>
                <p className="text-[10px] text-muted-foreground">Dew: {currentWeather.dewPoint}°</p>
              </div>
              
              <div className="rounded-lg bg-card/80 p-3 border border-border/30">
                <div className="flex items-center gap-2 mb-1">
                  <Eye className="w-3.5 h-3.5 text-glacier" />
                  <span className="text-[10px] text-muted-foreground uppercase">Visibility</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{currentWeather.visibility} mi</p>
              </div>
              
              <div className="rounded-lg bg-card/80 p-3 border border-border/30">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-3.5 h-3.5 text-glacier" />
                  <span className="text-[10px] text-muted-foreground uppercase">Pressure</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{currentWeather.pressure}"</p>
              </div>
            </div>

            {/* Snow Conditions */}
            <div className="rounded-lg bg-gradient-to-r from-[#2a3a4a] to-[#1a2a3a] p-3 border border-border/30">
              <div className="flex items-center gap-2 mb-2">
                <Mountain className="w-4 h-4 text-glacier" />
                <span className="text-xs font-medium text-foreground">Snow Conditions</span>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-[10px] text-muted-foreground">24hr Snowfall</p>
                  <p className="font-semibold text-foreground">{currentWeather.snowfall24h}"</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Base Depth</p>
                  <p className="font-semibold text-foreground">{currentWeather.snowBase}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="mt-4 rounded-lg bg-card/60 border border-border/30 p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">5-Day Forecast</h3>
          <div className="grid grid-cols-5 gap-2">
            {forecast.map((day) => (
              <div key={day.day} className="text-center p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                <p className="text-xs font-medium text-foreground mb-1">{day.day}</p>
                <day.icon className="w-6 h-6 mx-auto text-glacier mb-1" />
                <p className="text-xs text-muted-foreground">{day.condition}</p>
                <div className="flex justify-center gap-1 text-xs mt-1">
                  <span className="text-foreground font-medium">{day.high}°</span>
                  <span className="text-muted-foreground">{day.low}°</span>
                </div>
                <p className="text-[10px] text-glacier mt-1">{day.precip}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Conditions */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-lg bg-card/40 border border-border/20 p-3 hover:bg-card/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{loc.name}</span>
                <span className="text-sm font-bold text-foreground">{loc.temp}°</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{loc.condition}</p>
            </div>
          ))}
        </div>

        {/* Sun Times & Alerts */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Sunrise className="w-3.5 h-3.5 text-amber-400" />
            <span>Sunrise: 9:42 AM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sunset className="w-3.5 h-3.5 text-orange-400" />
            <span>Sunset: 4:18 PM</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/20 text-amber-400 rounded">
            <span className="font-medium">⚠️ Winter Storm Watch in effect until Thursday</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
