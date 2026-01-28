import { ExternalLink } from 'lucide-react';
import miningLogo from '@/assets/logos/alaska-mining-equipment.jpg';
import miningBg from '@/assets/ads/mining-background.jpg';

const MiningEquipmentAd = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskaminingequipment.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={miningBg} 
              alt="" 
              className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2d2d]/95 via-[#3d3d3d]/90 to-[#2d2d2d]/95" />
          </div>
          
          {/* Rugged accent - matches logo's mountain/pickaxe aesthetic */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          </div>
          
          <div className="relative flex items-center gap-3 p-3">
            {/* Logo */}
            <div className="w-16 h-12 flex-shrink-0 overflow-hidden rounded">
              <img 
                src={miningLogo} 
                alt="Alaska Mining Equipment" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-[#e0e0e0] font-semibold text-xs truncate">Alaska Mining Equipment</p>
              <p className="text-[#a0a0a0] text-[10px] truncate">Heavy Equipment for Alaska's Rugged Frontier</p>
            </div>
            
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#c9a962] hover:bg-[#d9b972] text-[#2d2d2d] text-[10px] font-bold rounded transition-colors">
              Visit
              <ExternalLink className="w-2.5 h-2.5" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default MiningEquipmentAd;
