import { motion } from 'motion/react';
import { Sparkles, Building, Home, Briefcase, ShieldCheck, Heart, Award, Crown, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, TESTIMONIALS_DATA, VALUES_DATA } from '../data';
import { Service } from '../types';

interface HomeViewProps {
  onViewChange: (view: string) => void;
  onSelectService: (serviceId: string) => void;
}

// Icon dictionary matching helper
export function CleanIcon({ name, className }: { name: string; className?: string }) {
  const cn = className || "w-6 h-6";
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={cn} />;
    case 'Building':
      return <Building className={cn} />;
    case 'Home':
      return <Home className={cn} />;
    case 'Briefcase':
      return <Briefcase className={cn} />;
    case 'ShieldCheck':
      return <ShieldCheck className={cn} />;
    case 'Heart':
      return <Heart className={cn} />;
    case 'Award':
      return <Award className={cn} />;
    case 'Crown':
      return <Crown className={cn} />;
    default:
      return <Sparkles className={cn} />;
  }
}

export default function HomeView({ onViewChange, onSelectService }: HomeViewProps) {
  
  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    onViewChange('services');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div id="home-view-container" className="overflow-hidden">
      
      {/* 1. Hero Section */}
      <section 
        id="hero-banner" 
        className="relative bg-gradient-to-br from-royal-dark via-royal-blue to-royal-light text-white py-16 md:py-28 overflow-hidden border-b-2 border-gold-accent/35"
      >
        {/* Subtle geometric gold and white background mesh particles */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 bg-gold-accent/15 border border-gold-accent/40 rounded-full py-1.5 px-4 text-gold-accent text-xs font-semibold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5 fill-gold-accent/20" />
                <span>Phoenix Valley Premium Home Cleaning</span>
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Your Home Deserves <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-amber-300 to-gold-accent">
                  Royal Treatment
                </span>
              </h1>
              
              <p className="text-gray-200/90 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Est. 2009, restarted 2016. We are a family-managed cleaning business committed to bringing absolute honesty, pride, and pristine hygiene to homes, apartments, and commercial offices across AZ.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => onViewChange('booking')}
                  id="hero-booking-cta"
                  className="bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-500 hover:to-gold-accent text-royal-dark font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-gold-accent/15 transform hover:-translate-y-0.5 active:translate-y-0 transition-all font-sans text-base focus:outline-none"
                >
                  Book Instant Visit
                </button>
                <button
                  onClick={() => onViewChange('services')}
                  id="hero-services-cta"
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium py-3.5 px-8 rounded-xl hover:border-white/45 transition-all text-base focus:outline-none"
                >
                  Explore Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <h3 className="text-xl font-bold text-gold-accent font-serif leading-none">15+ Yrs</h3>
                  <p className="text-xs text-gray-300 mt-1">Valley Experience</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-accent font-serif leading-none">100%</h3>
                  <p className="text-xs text-gray-300 mt-1">Family Managed</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-accent font-serif leading-none">5-Star</h3>
                  <p className="text-xs text-gray-300 mt-1">AZ Loyalty Rating</p>
                </div>
              </div>
            </div>

            {/* Right Column Interactive Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 text-gray-800 p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-royal-blue pb-2 border-b border-gray-100">
                  <Crown className="w-5 h-5 text-gold-accent fill-gold-accent/20" />
                  <span className="font-serif font-bold text-lg">Instant Estimate Tool</span>
                </div>
                
                <p className="text-xs text-gray-500 font-sans">
                  Choose your size and premium service to see standard starting valley pricing.
                </p>

                {/* Estimate Input Quick Simulation */}
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Choose Service Mode
                    </label>
                    <select
                      id="hero-estimate-service-select"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                      defaultValue="regular"
                    >
                      <option value="regular">Regular Maintenance Clean</option>
                      <option value="deep">Extreme Deep Scrub</option>
                      <option value="apartment">Apartment & Condo</option>
                      <option value="move">Move-In / Move-Out Complete</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Home Footprint Size
                    </label>
                    <select
                      id="hero-estimate-size-select"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                      defaultValue="2br"
                    >
                      <option value="studio">Studio Apartment</option>
                      <option value="1br">1 Bedroom Home / Apt</option>
                      <option value="2br">2 Bedroom Home</option>
                      <option value="3br">3 Bedroom Home</option>
                      <option value="4br">4 Bedroom+ Nest</option>
                    </select>
                  </div>

                  <button
                    onClick={() => onViewChange('booking')}
                    className="w-full bg-royal-blue text-white text-sm font-semibold py-3 rounded-lg hover:bg-royal-dark transition-colors"
                  >
                    Calculate & Save Date
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Short Dedicated Intro Box */}
      <section id="brand-intro" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <p className="text-gold-accent uppercase font-semibold text-xs tracking-widest font-sans">
            Serving Phoenix Since 2009
          </p>
          <blockquote className="font-serif text-2xl sm:text-3xl text-royal-dark italic font-semibold leading-relaxed">
            "Your Home Deserves Royal Treatment."
          </blockquote>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Royal House Cleaning Arizona LLC began in 2009. Formally restarted in 2016, our family-managed organization cleans every client home with deep dedication, pride, and transparent honesty. We treat your residence with the attention to detail that only family operations can deliver.
          </p>
          <div className="flex gap-2 justify-center pt-2">
            <span className="h-1.5 w-6 bg-gold-accent rounded-full"></span>
            <span className="h-1.5 w-1.5 bg-royal-blue rounded-full"></span>
            <span className="h-1.5 w-1.5 bg-royal-blue rounded-full"></span>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Grid */}
      <section id="services-grid" className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-royal-blue">Our Services</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-dark">
              Tailored Cleaning Packages
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              Choose from our curated suites designed to clean, restore, and sanitize any living arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={`overview-${service.id}`}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:shadow-xl hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-royal-blue/5 border border-royal-blue/10 flex items-center justify-center text-royal-blue mb-5">
                    <CleanIcon name={service.id === 'apartment-condo' ? 'Building' : service.id === 'move-in-out' ? 'Home' : service.id === 'office-clean' ? 'Briefcase' : 'Sparkles'} className="w-6 h-6 text-royal-blue" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-royal-dark leading-tight mb-2">
                    {service.name}
                  </h3>
                  
                  <p className="text-xs text-gold-accent font-semibold uppercase mb-4 tracking-wider">
                    {service.pricingDetail}
                  </p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-50">
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full inline-flex items-center justify-center text-royal-blue hover:text-white bg-royal-blue/5 hover:bg-royal-blue text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 group"
                  >
                    <span>View Package & Quote</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onViewChange('services')}
              className="inline-flex items-center space-x-2 text-royal-blue hover:text-gold-accent font-semibold text-sm group"
            >
              <span>See specific features for all packages</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-royal-dark text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#c9a84c_25%,transparent_25%,transparent_50%,#c9a84c_50%,#c9a84c_75%,transparent_75%,transparent)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left explanation block */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-accent">
                Our Guarantee
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Why Phoenix Chooses Royal House Cleaning
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We are not a franchise utilizing temporary contractors. We are a locally cherished, family-owned and ran enterprise. That ensures the quality stays meticulously high and the trust stays immaculate.
              </p>
              
              <ul className="space-y-3 pt-2">
                <li className="flex items-start space-x-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <span>Licensed and liability insured family LLC</span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <span>We supply all premium cleaners, sprays, and HEPA vacuums</span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                  <span>Always the same trusted crew at your threshold</span>
                </li>
              </ul>
            </div>

            {/* Right core values grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES_DATA.map((value, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 space-y-3 bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-accent/25 flex items-center justify-center text-gold-accent border border-gold-accent/20">
                    <CleanIcon name={value.iconName} className="w-5 h-5 text-gold-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a2f5e]">Reviews</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-dark">
              Verdicts of the Valley
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              A sample of what local Arizona residents say about our royal service standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-0.5 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-sans italic text-xs leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4">
                  <div className="text-sm font-bold text-royal-dark leading-none">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex justify-between items-center">
                    <span>{testimonial.location}</span>
                    <span className="bg-gold-accent/10 text-gold-accent px-1.5 py-0.5 rounded text-[10px] uppercase font-semibold">
                      {testimonial.serviceType.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Call to Action Footer Box */}
      <section id="banner-booking-cta" className="bg-gradient-to-r from-royal-blue to-royal-dark py-12 text-white border-t border-gold-accent/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <Crown className="w-8 h-8 text-gold-accent mx-auto fill-gold-accent/15" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Ready to Schedule Your Treatment?
          </h2>
          <p className="text-gray-300 font-light text-sm max-w-lg mx-auto">
            Book now in less than two minutes. See custom estimates immediately based on your house footprint!
          </p>
          <div>
            <button
              onClick={() => onViewChange('booking')}
              className="bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-500 hover:to-gold-accent text-royal-dark font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-gold-accent/10 transition-all font-sans inline-flex items-center space-x-2"
            >
              <span>Book Appointment Online</span>
              <Sparkles className="w-4 h-4 text-royal-blue fill-royal-blue/10" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
