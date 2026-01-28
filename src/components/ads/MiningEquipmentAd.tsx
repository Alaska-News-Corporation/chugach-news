import { ExternalLink } from 'lucide-react';
import miningLogo from '@/assets/logos/alaska-mining-equipment.jpg';
import miningBg from '@/assets/ads/mining-background.jpg';

const MiningEquipmentAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskaminingequipment.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={miningBg} 
              alt="" 
              className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2d2d]/95 via-[#3d3d3d]/85 to-[#2d2d2d]/95" />
          </div>
          
          {/* Gold accent border */}
          <div className="absolute inset-0 rounded-lg border border-[#c9a962]/20 group-hover:border-[#c9a962]/40 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={miningLogo} 
                  alt="Alaska Mining Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#e0e0e0] font-semibold text-sm">Alaska Mining Equipment</p>
                <p className="text-[#a0a0a0] text-xs">Heavy Equipment for Alaska's Rugged Frontier</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#c9a962] hover:bg-[#d9b972] text-[#2d2d2d] text-xs font-bold rounded transition-colors">
              Visit Site
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default MiningEquipmentAd;
