import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableNewsCardProps {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  time: string;
  image: string;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  wildlife: 'bg-primary/20 text-primary',
  weather: 'bg-glacier/20 text-glacier',
  sports: 'bg-gold/20 text-gold',
  business: 'bg-steel-light/30 text-snow',
  local: 'bg-primary/20 text-primary',
  safety: 'bg-coral/20 text-coral',
  community: 'bg-primary/20 text-primary',
  outdoors: 'bg-primary/20 text-primary',
};

const ExpandableNewsCard = ({ title, excerpt, content, category, time, image, featured = false }: ExpandableNewsCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 ${
        featured ? 'col-span-2' : ''
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`relative ${featured ? 'h-48' : 'h-32'} overflow-hidden`}>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className={`absolute top-2 left-2 px-1.5 py-0.5 rounded text-[10px] font-medium uppercase ${categoryColors[category.toLowerCase()] || 'bg-primary/20 text-primary'}`}>
          {category}
        </span>
      </div>
      <div className="p-3">
        <h3 className={`font-serif font-bold group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
          {title}
        </h3>
        <p className="text-muted-foreground text-xs mt-1.5 line-clamp-2">{excerpt}</p>
        
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in-up">
            <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <Clock className="w-2.5 h-2.5" />
            <span>{time}</span>
          </div>
          <span className="text-primary text-xs font-medium flex items-center gap-0.5">
            {isExpanded ? (
              <>Collapse <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>Expand <ChevronDown className="w-3 h-3" /></>
            )}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ExpandableNewsCard;
