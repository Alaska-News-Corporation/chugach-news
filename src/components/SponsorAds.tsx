import { ExternalLink } from 'lucide-react';
import acgLogo from '@/assets/logos/alaska-consulting-group.jpg';
import miningLogo from '@/assets/logos/alaska-mining-equipment.jpg';
import boatsLogo from '@/assets/logos/alaskan-boats.jpg';

const sponsors = [
  {
    name: 'Alaska Consulting Group',
    logo: acgLogo,
    url: 'https://www.alaskacg.com',
    tagline: 'Strategic Business Solutions',
  },
  {
    name: 'Alaska Mining Equipment',
    logo: miningLogo,
    url: 'https://alaskaminingequipment.com',
    tagline: 'Equipment for the Last Frontier',
  },
  {
    name: 'Alaskan Boats',
    logo: boatsLogo,
    url: 'https://alaskanboats.com',
    tagline: 'Your Vessel Awaits',
  },
];

const SponsorAds = () => {
  return (
    <section className="py-4 border-t border-border/30">
      <div className="container mx-auto px-3">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3 text-center">Our Sponsors</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded border border-border/30 bg-secondary/50 hover:border-gold/40 hover:bg-secondary/80 transition-all group"
            >
              <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded bg-mountain/50">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground truncate group-hover:text-gold transition-colors">
                  {sponsor.name}
                </p>
                <p className="text-[10px] text-muted-foreground truncate">{sponsor.tagline}</p>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorAds;
