import { ExternalLink } from 'lucide-react';
import acgLogo from '@/assets/logos/alaska-consulting-group.jpg';
import acgBg from '@/assets/ads/acg-background.jpg';

const ConsultingGroupAd = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-3">
        {/* Compact Square Ad */}
        <div className="flex justify-center">
          <a
            href="https://www.alaskacg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-lg group w-full max-w-xs aspect-square"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={acgBg} 
                alt="" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a]/80 via-[#3a3a3a]/70 to-[#2a2a2a]/90" />
            </div>
            
            {/* Silver accent border */}
            <div className="absolute inset-0 rounded-lg border border-[#c0c0c0]/20 group-hover:border-[#c0c0c0]/40 transition-colors" />
            
            <div className="relative flex flex-col items-center justify-center h-full p-4 text-center">
              {/* Logo */}
              <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded mb-3">
                <img 
                  src={acgLogo} 
                  alt="Alaska Consulting Group" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-[#d0d0d0] font-semibold text-sm mb-1">Alaska Consulting Group</p>
              <p className="text-[#909090] text-xs mb-4">Strategic Business Solutions for the Last Frontier</p>
              
              <div className="flex items-center gap-1.5 px-4 py-2 bg-[#c0c0c0] hover:bg-[#d0d0d0] text-[#2a2a2a] text-xs font-bold rounded transition-colors">
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

export default ConsultingGroupAd;
