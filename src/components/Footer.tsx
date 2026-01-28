import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/80 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-primary" />
              <span className="font-serif text-2xl font-bold">Chugach News</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Your trusted source for news, weather, and community updates from the heart of the Chugach Region. Serving Valdez, Cordova, Whittier, and surrounding communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Local News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Weather</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wildlife</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Valdez, Alaska 99686</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(907) 555-CHUG</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>news@chugachnews.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2026 Chugach News. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Proudly serving the Chugach Region since 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
