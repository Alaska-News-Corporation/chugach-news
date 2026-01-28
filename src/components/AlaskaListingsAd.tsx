import { ExternalLink } from 'lucide-react';
import alaskaListingsLogo from '@/assets/logos/alaska-listings.jpg';
import listingsBg from '@/assets/ads/listings-background.jpg';

const AlaskaListingsAd = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-3">
        <a
          href="https://aklistings.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={listingsBg} 
              alt="" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a3a]/95 via-[#243444]/90 to-[#1a2a3a]/95" />
          </div>
          
          {/* Subtle tech circuit overlay - matches logo's tech aesthetic */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4a9ead] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4a9ead] to-transparent" />
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-4 p-4">
            {/* Logo */}
            <div className="w-36 h-14 flex-shrink-0 overflow-hidden rounded">
              <img 
                src={alaskaListingsLogo} 
                alt="Alaska Listings" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-[#c5d0d8] font-serif font-bold text-sm">Alaska's Premier Private Listings Marketplace</span>
                <span className="px-1.5 py-0.5 bg-[#4a9ead]/20 text-[#4a9ead] text-[10px] font-bold rounded uppercase">Beta</span>
              </div>
              <p className="text-[#8a9aa8] text-xs">
                🎉 <span className="text-[#c5d0d8]">FREE 60-day listings</span> in every region during beta! List your property, vehicle, or services today.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#4a9ead] hover:bg-[#5ab0bf] text-[#1a2a3a] text-xs font-bold rounded transition-colors group-hover:scale-105">
              Visit aklistings.com
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskaListingsAd;
