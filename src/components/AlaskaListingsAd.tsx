import { ExternalLink } from 'lucide-react';
import alaskaListingsLogo from '@/assets/logos/alaska-listings.jpg';
import listingsBg from '@/assets/ads/listings-background.jpg';

const AlaskaListingsAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://aklistings.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={listingsBg} 
              alt="" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a3a]/95 via-[#243444]/85 to-[#1a2a3a]/95" />
          </div>
          
          {/* Tech accent border */}
          <div className="absolute inset-0 rounded-lg border border-[#4a9ead]/20 group-hover:border-[#4a9ead]/40 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={alaskaListingsLogo} 
                  alt="Alaska Listings" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-[#c5d0d8] font-semibold text-sm">Alaska Listings</p>
                  <p className="text-[#8a9aa8] text-xs">Alaska's Premier Private Marketplace</p>
                </div>
                <span className="px-1.5 py-0.5 bg-[#4a9ead]/20 text-[#4a9ead] text-[10px] font-bold rounded uppercase">Beta</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="hidden md:block text-[#c5d0d8] text-xs">🎉 FREE 60-day listings during beta!</span>
              <div className="flex items-center gap-1.5 px-4 py-2 bg-[#4a9ead] hover:bg-[#5ab0bf] text-[#1a2a3a] text-xs font-bold rounded transition-colors">
                Visit Site
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskaListingsAd;
