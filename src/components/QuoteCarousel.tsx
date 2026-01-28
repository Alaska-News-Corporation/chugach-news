import { useState, useEffect } from 'react';
import { Quote, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  {
    text: "The Chugach Mountains hold secrets only the patient can discover.",
    author: "Alaska Native Proverb",
  },
  {
    text: "In the silence of glaciers, you hear what truly matters.",
    author: "Unknown Valdez Resident",
  },
  {
    text: "Alaska is not just a state, it's a state of mind.",
    author: "Unknown Alaskan",
  },
  {
    text: "The mountains are calling and I must go.",
    author: "John Muir",
  },
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-secondary/50 py-6 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          <Mountain className="w-6 h-6 text-muted-foreground" />
          <Quote className="w-5 h-5 text-primary" />
          <div className="text-center max-w-2xl">
            <p className="text-foreground italic font-serif text-lg">
              "{quotes[currentIndex].text}"
            </p>
            <p className="text-primary mt-2 text-sm">
              — {quotes[currentIndex].author}
            </p>
          </div>
          <Quote className="w-5 h-5 text-primary rotate-180" />
          <Mountain className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-4'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
