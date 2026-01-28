import { ExternalLink } from 'lucide-react';
import boatsLogo from '@/assets/logos/alaskan-boats.jpg';
import boatsBg from '@/assets/ads/boats-background.jpg';

const AlaskanBoatsAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://alaskanboats.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={boatsBg} 
              alt="" 
              className="w-full h-full object-cover opacity-45 group-hover:opacity-55 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a24]/90 via-[#1a2a3a]/75 to-[#0f1a24]/90" />
          </div>
          
          {/* Nautical accent border */}
          <div className="absolute inset-0 rounded-lg border border-[#6ab8c7]/20 group-hover:border-[#6ab8c7]/40 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={boatsLogo} 
                  alt="Alaskan Boats" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#d0e0e8] font-semibold text-sm">Alaskan Boats</p>
                <p className="text-[#8aa0a8] text-xs">Your Vessel Awaits in Alaska's Waters</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#6ab8c7] hover:bg-[#7ac8d7] text-[#0f1a24] text-xs font-bold rounded transition-colors">
              Visit Site
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AlaskanBoatsAd;
