import { Clock, Tag } from 'lucide-react';
import SnowEffect from './SnowEffect';
import TopStories from './TopStories';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chugach Mountains Winter"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      {/* Snow Effect */}
      <SnowEffect />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Main Story */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight glacier-glow">
                Thompson Pass Transforms into Winter Wonderland After Historic Snowfall
              </h1>
              <p className="text-lg text-foreground/80 mt-4 max-w-xl">
                Record-breaking snowfall blankets the Chugach region as locals and visitors alike celebrate exceptional powder conditions. Backcountry enthusiasts urged to check avalanche conditions.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Just now</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center gap-1">
                  <Tag className="w-3 h-3" />
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
