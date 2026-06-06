import { Crown, Mail, Phone, Instagram, MessageSquare, ArrowUp, Calendar } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: string) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-dark text-white border-t-2 border-gold-accent/40 font-sans relative">
      
      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo & Summary - Colspan 4 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gold-accent p-1.5 rounded text-royal-dark">
                <Crown className="w-5 h-5 fill-royal-dark/10" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Royal House Cleaning <span className="text-gold-accent block text-xs tracking-widest uppercase mt-0.5 font-sans font-bold">Arizona LLC</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              We started our family-managed cleaning business in 2009. Formally restarted in 2016, we stand representing honesty, pride, and total dedication for families, urban apartments, and offices throughout the Phoenix Valley.
            </p>

            <div className="flex items-center space-x-3 text-xs text-gold-accent font-semibold flex-wrap gap-y-2">
              <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">Phoenix Registry</span>
              <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">Licensed & Insured</span>
              <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">Est. 2009</span>
            </div>
          </div>

          {/* Sitemaps - Colspan 3 */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-base text-gold-accent border-b border-white/10 pb-1.5">
              Sitemap Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onViewChange('home'); handleScrollTop(); }}
                  className="text-gray-400 hover:text-gold-accent transition-colors block text-left"
                >
                  Home Landing Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onViewChange('services'); handleScrollTop(); }}
                  className="text-gray-400 hover:text-gold-accent transition-colors block text-left"
                >
                  Our Services & Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onViewChange('booking'); handleScrollTop(); }}
                  className="text-gray-400 hover:text-gold-accent transition-colors block text-left"
                >
                  Book Appointment Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onViewChange('about'); handleScrollTop(); }}
                  className="text-gray-400 hover:text-gold-accent transition-colors block text-left"
                >
                  Our Family History (About)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onViewChange('faqs'); handleScrollTop(); }}
                  className="text-gray-400 hover:text-gold-accent transition-colors block text-left"
                >
                  FAQs & Quality Guarantee
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details - Colspan 4 */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif font-bold text-base text-gold-accent border-b border-white/10 pb-1.5">
              Contact Channels
            </h3>
            
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0" />
                <a href="tel:6025550190" className="hover:text-gold-accent transition-colors">
                  Call & Text: (602) 555-0190
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <a href="mailto:info@royalhousecleaningaz.com" className="hover:text-gold-accent transition-colors">
                  info@royalhousecleanaz.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-gold-accent shrink-0" />
                <a
                  href="https://instagram.com/royal_house_cleaning_az"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-accent transition-colors"
                >
                  @royal_house_cleaning_az
                </a>
              </li>
              <li className="text-gray-400 block pt-1.5 leading-tight font-light bg-white/5 p-2 rounded border border-white/5">
                <strong>Schedule:</strong> Mon - Sat: 8:00 AM - 6:00 PM <br />
                <strong>Region:</strong> Phoenix Valley & Surrounding Areas, AZ
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 2. Bottom Copyright and scroll to top row */}
      <div className="bg-black/40 py-5 text-gray-500 text-[10px] sm:text-xs tracking-wider border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span>&copy; {currentYear} Royal House Cleaning Arizona LLC. All Rights Reserved.</span>
            <span className="mx-2 text-white/10">|</span>
            <span className="text-gold-accent font-semibold uppercase">Family Hand-Crafted Pride</span>
          </div>
          <div>
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center space-x-1 hover:text-white transition-colors uppercase font-bold tracking-widest text-[90%] font-sans"
              aria-label="Scroll back to top"
            >
              <span>Scroll Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Floating WhatsApp Support Icon Component */}
      <a
        href="https://wa.me/16025550190?text=Hi%20Royal%20House%20Cleaning!%20I'd%20like%20to%20get%20a%20free%20house%20cleaning%20quote%20please."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group focus:outline-none"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp with Royal House Cleaning support team"
      >
        <span className="absolute right-14 bg-royal-dark text-white text-xs font-semibold px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md py-1 border border-gold-accent/20">
          WhatsApp Us Now-👑
        </span>
        <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
      </a>

    </footer>
  );
}
