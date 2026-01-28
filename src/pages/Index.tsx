import StatsBar from '@/components/StatsBar';
import AlertTicker from '@/components/AlertTicker';
import WeatherStrip from '@/components/WeatherStrip';
import HeroSection from '@/components/HeroSection';
import QuoteCarousel from '@/components/QuoteCarousel';
import InfoTicker from '@/components/InfoTicker';
import LatestNews from '@/components/LatestNews';
import AlaskaListingsAd from '@/components/AlaskaListingsAd';
import SponsorAds from '@/components/SponsorAds';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import heroImage from '@/assets/hero-chugach-winter.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Stats Bar */}
      <StatsBar />
      
      {/* Alert Ticker */}
      <AlertTicker />
      
      {/* Weather Strip */}
      <WeatherStrip />
      
      {/* Hero Section with Snow Animation */}
      <HeroSection heroImage={heroImage} />
      
      {/* Quote Carousel */}
      <QuoteCarousel />
      
      {/* Info Ticker */}
      <InfoTicker />
      
      {/* Latest News Grid */}
      <LatestNews />
      
      {/* Alaska Listings Ad */}
      <AlaskaListingsAd />
      
      {/* Sponsor Ads */}
      <SponsorAds />
      
      {/* Footer */}
      <Footer />
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
