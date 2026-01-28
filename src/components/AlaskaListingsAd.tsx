import { ExternalLink } from 'lucide-react';
import alaskaListingsLogo from '@/assets/logos/alaska-listings.jpg';

const AlaskaListingsAd = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-3">
        <a
          href="https://aklistings.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded border border-gold/30 bg-gradient-to-r from-mountain via-steel to-mountain hover:border-gold/50 transition-colors group"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20" />
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-3 p-3">
            {/* Logo */}
            <div className="w-32 h-12 flex-shrink-0 overflow-hidden rounded">
              <img 
                src={alaskaListingsLogo} 
                alt="Alaska Listings" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-gold font-serif font-bold text-sm">Alaska's Premier Private Listings Marketplace</span>
                <span className="px-1.5 py-0.5 bg-coral/20 text-coral text-[10px] font-bold rounded uppercase">Beta</span>
              </div>
              <p className="text-muted-foreground text-xs">
                🎉 <span className="text-gold">FREE 60-day listings</span> in every region during beta! List your property, vehicle, or services today.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold hover:bg-gold/90 text-primary-foreground text-xs font-semibold rounded transition-colors group-hover:scale-105">
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
