import { ExternalLink } from 'lucide-react';
import acgLogo from '@/assets/logos/alaska-consulting-group.jpg';
import acgBg from '@/assets/ads/acg-background.jpg';

const ConsultingGroupAd = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-3">
        <a
          href="https://www.alaskacg.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group h-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={acgBg} 
              alt="" 
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a]/95 via-[#3a3a3a]/85 to-[#2a2a2a]/95" />
          </div>
          
          {/* Silver accent lines */}
          <div className="absolute inset-0 rounded-lg border border-[#c0c0c0]/20 group-hover:border-[#c0c0c0]/40 transition-colors" />
          
          <div className="relative flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={acgLogo} 
                  alt="Alaska Consulting Group" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#d0d0d0] font-semibold text-sm">Alaska Consulting Group</p>
                <p className="text-[#909090] text-xs">Strategic Business Solutions for the Last Frontier</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#c0c0c0] hover:bg-[#d0d0d0] text-[#2a2a2a] text-xs font-bold rounded transition-colors">
              Visit Site
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ConsultingGroupAd;
