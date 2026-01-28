import StatsBar from '@/components/StatsBar';
import AlertTicker from '@/components/AlertTicker';
import WeatherStrip from '@/components/WeatherStrip';
import HeroSection from '@/components/HeroSection';
import QuoteCarousel from '@/components/QuoteCarousel';
import InfoTicker from '@/components/InfoTicker';
import LatestNews from '@/components/LatestNews';
import AlaskaListingsAd from '@/components/AlaskaListingsAd';
import ConsultingGroupAd from '@/components/ads/ConsultingGroupAd';
import MiningEquipmentAd from '@/components/ads/MiningEquipmentAd';
import AlaskanBoatsAd from '@/components/ads/AlaskanBoatsAd';
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
      
      {/* Alaska Consulting Group Ad */}
      <ConsultingGroupAd />
      
      {/* Quote Carousel */}
      <QuoteCarousel />
      
      {/* Info Ticker */}
      <InfoTicker />
      
      {/* Mining Equipment Ad */}
      <MiningEquipmentAd />
      
      {/* Latest News Grid */}
      <LatestNews />
      
      {/* Alaskan Boats Ad */}
      <AlaskanBoatsAd />
      
      {/* Alaska Listings Ad */}
      <AlaskaListingsAd />
      
      {/* Footer */}
      <Footer />
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
