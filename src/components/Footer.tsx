import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/80 border-t border-border/50 py-6">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-serif text-lg font-bold text-foreground">Chugach News</span>
            <p className="text-muted-foreground text-xs mt-2 max-w-sm">
              Your trusted source for news, weather, and community updates from the heart of the Chugach Region. Serving Valdez, Cordova, Whittier, and surrounding communities.
            </p>
          </div>

          {/* Regional Links */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-foreground">Regional News</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="https://anchoragechronicle.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Anchorage Chronicle</a></li>
              <li><a href="https://alcannews.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Alcan News</a></li>
              <li><a href="https://tongassnews.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tongass News</a></li>
              <li><a href="https://chugachnews.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chugach News</a></li>
              <li><a href="https://kenainews.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kenai News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-foreground">Contact</h4>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Mail className="w-3 h-3 text-primary" />
              <a href="mailto:support@alaskanewscorporation.com" className="hover:text-primary transition-colors">
                support@alaskanewscorporation.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-muted-foreground">
          <p>© 2026 Chugach News. All rights reserved.</p>
          <p className="mt-1 md:mt-0">A property of Alaska Listings LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
