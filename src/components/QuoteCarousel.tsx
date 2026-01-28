import { useState, useEffect } from 'react';
import { Quote, Mountain } from 'lucide-react';

const quotes = [
  { text: "The Chugach Mountains hold secrets only the patient can discover.", author: "Alaska Native Proverb" },
  { text: "In the silence of glaciers, you hear what truly matters.", author: "Unknown Valdez Resident" },
  { text: "Alaska is not just a state, it's a state of mind.", author: "Unknown Alaskan" },
  { text: "The mountains are calling and I must go.", author: "John Muir" },
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-secondary/40 py-3 border-y border-border/30">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-center gap-4">
          <Mountain className="w-4 h-4 text-muted-foreground hidden sm:block" />
          <Quote className="w-3 h-3 text-primary" />
          <div className="text-center max-w-xl">
            <p className="text-foreground italic font-serif text-sm">
              "{quotes[currentIndex].text}"
            </p>
            <p className="text-primary mt-1 text-xs">— {quotes[currentIndex].author}</p>
          </div>
          <Quote className="w-3 h-3 text-primary rotate-180" />
          <Mountain className="w-4 h-4 text-muted-foreground hidden sm:block" />
        </div>
        <div className="flex justify-center gap-1.5 mt-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-3' : 'bg-muted-foreground/30 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
