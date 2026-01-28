import { Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  time: string;
  image: string;
  featured?: boolean;
}

const NewsCard = ({ title, excerpt, category, time, image, featured = false }: NewsCardProps) => {
  const categoryColors: Record<string, string> = {
    wildlife: 'bg-aurora-green/20 text-aurora-green',
    weather: 'bg-glacier/20 text-glacier',
    sports: 'bg-accent/20 text-accent',
    business: 'bg-aurora-purple/20 text-aurora-purple',
    local: 'bg-primary/20 text-primary',
    safety: 'bg-alert-red/20 text-alert-red',
  };

  return (
    <article
      className={`glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
    >
      <div className={`relative ${featured ? 'h-64' : 'h-40'} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span
          className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium uppercase ${
            categoryColors[category.toLowerCase()] || 'bg-primary/20 text-primary'
          }`}
        >
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3
          className={`font-serif font-bold group-hover:text-primary transition-colors line-clamp-2 ${
            featured ? 'text-xl' : 'text-base'
          }`}
        >
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{time}</span>
          </div>
          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            {featured ? 'Read More' : 'More'}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
