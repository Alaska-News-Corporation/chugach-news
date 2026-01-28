import { ExternalLink } from 'lucide-react';

const AlaskaListingsAd = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-3">
        <div className="relative overflow-hidden rounded border border-gold/30 bg-gradient-to-r from-mountain via-steel to-mountain">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20" />
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-gold font-serif font-bold text-lg">Alaska Listings</span>
                <span className="px-1.5 py-0.5 bg-coral/20 text-coral text-[10px] font-bold rounded uppercase">Beta</span>
              </div>
              <p className="text-foreground text-sm font-medium mb-1">
                Alaska's Premier Private Listings Marketplace
              </p>
              <p className="text-muted-foreground text-xs max-w-md">
                🎉 <span className="text-gold">FREE 60-day listings</span> in every region while in beta development! 
                List your property, vehicle, or services today.
              </p>
            </div>
            
            <a
              href="https://aklistings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-gold hover:bg-gold/90 text-primary-foreground text-sm font-semibold rounded transition-colors"
            >
              Visit aklistings.com
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlaskaListingsAd;
