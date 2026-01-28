const weatherData = [
  { city: 'Valdez', temp: 18, icon: '❄️' },
  { city: 'Cordova', temp: 22, icon: '🌨️' },
  { city: 'Whittier', temp: 28, icon: '🌧️' },
  { city: 'Girdwood', temp: 24, icon: '❄️' },
  { city: 'Seward', temp: 30, icon: '🌫️' },
  { city: 'Anchorage', temp: 20, icon: '⛅' },
  { city: 'Chitina', temp: 5, icon: '❄️' },
  { city: 'McCarthy', temp: -8, icon: '☀️' },
];

const WeatherStrip = () => {
  return (
    <div className="bg-mountain/50 border-b border-border/30 py-1 overflow-hidden">
      <div className="weather-scroll flex whitespace-nowrap">
        {[...weatherData, ...weatherData].map((item, index) => (
          <div key={index} className="flex items-center gap-1.5 mx-4 text-xs">
            <span>{item.icon}</span>
            <span className="text-foreground font-medium">{item.city}</span>
            <span className="text-muted-foreground">{item.temp}°F</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherStrip;
