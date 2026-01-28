import { ExternalLink } from 'lucide-react';
import miningLogo from '@/assets/logos/alaska-mining-equipment.jpg';
import miningBg from '@/assets/ads/mining-background.jpg';

const MiningEquipmentAd = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-3">
        {/* Compact Square Ad */}
        <div className="flex justify-center">
          <a
            href="https://alaskaminingequipment.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-lg group w-full max-w-xs aspect-square"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={miningBg} 
                alt="" 
                className="w-full h-full object-cover opacity-45 group-hover:opacity-55 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2d2d2d]/80 via-[#3d3d3d]/60 to-[#2d2d2d]/90" />
            </div>
            
            {/* Gold accent border */}
            <div className="absolute inset-0 rounded-lg border border-[#c9a962]/20 group-hover:border-[#c9a962]/40 transition-colors" />
            
            <div className="relative flex flex-col items-center justify-center h-full p-4 text-center">
              {/* Logo */}
              <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded mb-3">
                <img 
                  src={miningLogo} 
                  alt="Alaska Mining Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-[#e0e0e0] font-semibold text-sm mb-1">Alaska Mining Equipment</p>
              <p className="text-[#a0a0a0] text-xs mb-4">Heavy Equipment for Alaska's Rugged Frontier</p>
              
              <div className="flex items-center gap-1.5 px-4 py-2 bg-[#c9a962] hover:bg-[#d9b972] text-[#2d2d2d] text-xs font-bold rounded transition-colors">
                Visit Site
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiningEquipmentAd;
