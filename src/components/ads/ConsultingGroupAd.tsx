import { ExternalLink } from 'lucide-react';
import acgLogo from '@/assets/logos/alaska-consulting-group.jpg';
import acgBg from '@/assets/ads/acg-background.jpg';

const ConsultingGroupAd = () => {
  return (
    <section className="py-3">
      <div className="container mx-auto px-3">
        <a
          href="https://www.alaskacg.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={acgBg} 
              alt="" 
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a]/95 via-[#3a3a3a]/90 to-[#2a2a2a]/95" />
          </div>
          
          {/* Silver accent lines - matches logo's metallic silver */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent" />
          </div>
          
          <div className="relative flex items-center gap-3 p-3">
            {/* Logo */}
            <div className="w-16 h-12 flex-shrink-0 overflow-hidden rounded">
              <img 
                src={acgLogo} 
                alt="Alaska Consulting Group" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-[#d0d0d0] font-semibold text-xs truncate">Alaska Consulting Group</p>
              <p className="text-[#909090] text-[10px] truncate">Strategic Business Solutions for the Last Frontier</p>
            </div>
            
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#c0c0c0] hover:bg-[#d0d0d0] text-[#2a2a2a] text-[10px] font-bold rounded transition-colors">
              Visit
              <ExternalLink className="w-2.5 h-2.5" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ConsultingGroupAd;
