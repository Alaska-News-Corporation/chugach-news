import { ExternalLink } from 'lucide-react';
import boatsLogo from '@/assets/logos/alaskan-boats.jpg';
import boatsBg from '@/assets/ads/boats-background.jpg';

const AlaskanBoatsAd = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskanboats.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={boatsBg} 
              alt="" 
              className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a24]/95 via-[#1a2a3a]/90 to-[#0f1a24]/95" />
          </div>
          
          {/* Nautical accent - matches logo's navy/teal marine palette */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6ab8c7] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6ab8c7] to-transparent" />
          </div>
          
          <div className="relative flex items-center gap-3 p-3">
            {/* Logo */}
            <div className="w-16 h-12 flex-shrink-0 overflow-hidden rounded">
              <img 
                src={boatsLogo} 
                alt="Alaskan Boats" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-[#d0e0e8] font-semibold text-xs truncate">Alaskan Boats</p>
              <p className="text-[#8aa0a8] text-[10px] truncate">Your Vessel Awaits in Alaska's Waters</p>
            </div>
            
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#6ab8c7] hover:bg-[#7ac8d7] text-[#0f1a24] text-[10px] font-bold rounded transition-colors">
              Visit
              <ExternalLink className="w-2.5 h-2.5" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskanBoatsAd;
