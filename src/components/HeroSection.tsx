import { Clock, Tag, Apple, Play } from 'lucide-react';
import SnowEffect from './SnowEffect';
import TopStories from './TopStories';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Chugach Mountains Winter" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      {/* Snow Effect */}
      <SnowEffect />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-3 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          {/* Main Story */}
          <div className="lg:col-span-2 animate-fade-in-up">
            {/* App Download Buttons */}
            <div className="flex items-center gap-2 mb-4">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded text-xs text-foreground hover:bg-foreground/20 transition-colors">
                <Apple className="w-3.5 h-3.5" />
                <span>App Store</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded text-xs text-foreground hover:bg-foreground/20 transition-colors">
                <Play className="w-3.5 h-3.5" />
                <span>Google Play</span>
              </button>
            </div>

            <div className="max-w-xl">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight glacier-glow">
                Thompson Pass Transforms into Winter Wonderland After Historic Snowfall
              </h1>
              <p className="text-sm text-foreground/80 mt-2 max-w-lg">
                Record-breaking snowfall blankets the Chugach region as locals and visitors celebrate exceptional powder conditions. Backcountry enthusiasts urged to check avalanche conditions.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Clock className="w-3 h-3" />
                  <span>Just now</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5" />
                  Weather
                </span>
              </div>
            </div>
          </div>

          {/* Top Stories Sidebar */}
          <div className="animate-fade-in-up stagger-2">
            <TopStories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
