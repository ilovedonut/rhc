import { motion } from 'motion/react';
import { Crown, Heart, ShieldCheck, Award, ThumbsUp, Calendar, Compass, Shield } from 'lucide-react';
import { VALUES_DATA } from '../data';
import { CleanIcon } from './HomeView';

interface AboutViewProps {
  onViewChange: (view: string) => void;
}

export default function AboutView({ onViewChange }: AboutViewProps) {
  return (
    <div id="about-page-container" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent bg-royal-blue/10 px-3 py-1 rounded-full">
            Our Story & Trust
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-royal-dark">
            About Royal House Cleaning Arizona LLC
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            A family-owned legacy of meticulous care, absolute honesty, and royal standards built for your comfort.
          </p>
        </div>

        {/* Narrative layout splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
          
          {/* Left Column Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-gold-accent uppercase tracking-widest block">
                Established 2009 &bull; Phoenix Valley
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-royal-dark">
                The Heritage of a True Family Enterprise
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              Royal House Cleaning Arizona LLC was born in <strong>2009</strong> out of a simple realization: families in the Phoenix Valley deserve cleaning services that are profoundly thorough, honest, and truly professional. After pausing temporarily, the business officially restarted in <strong>2016</strong> under direct family coordination. 
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              Since our rebirth in 2016, we have expanded consciously to specialize in premium apartment spaces, urban condos, and compact offices, alongside our traditional full-size residential deep-house cleanings. Because we operate as a tight-knit family-managed group, we do not outsource jobs or employ transient contractor networks. The same loyal family faces you meet are the ones dedicated to perfect vacuuming, kitchen resets, and pristine baseboards.
            </p>

            <div className="bg-royal-blue/5 border-l-4 border-gold-accent p-5 rounded-r-xl space-y-2">
              <p className="font-serif italic font-bold text-royal-dark text-sm sm:text-base">
                "We do not just clean to make surfaces look neat; we clean to protect your living wellness and earn your family’s absolute peace of mind."
              </p>
              <p className="text-xs text-gold-accent font-semibold tracking-wide uppercase">
                &mdash; The Royal Family Management Team
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => onViewChange('booking')}
                className="bg-royal-blue hover:bg-royal-dark text-white font-semibold text-sm px-6 py-3 rounded-lg shadow transition-colors text-center"
              >
                Experience Our Care
              </button>
              <button
                onClick={() => onViewChange('services')}
                className="border border-gray-300 hover:border-royal-blue hover:text-royal-blue text-gray-700 text-sm px-6 py-3 rounded-lg transition-all text-center"
              >
                View Specific Checklists
              </button>
            </div>
          </div>

          {/* Right Column visual illustration bento */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-royal-blue to-royal-dark text-white rounded-2xl p-6 md:p-8 space-y-6 shadow-xl border border-gold-accent/25 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 space-y-6">
                <Crown className="w-10 h-10 text-gold-accent fill-gold-accent/15" />
                
                <h3 className="font-serif text-2xl font-bold text-white header-gradient-accent">
                  Milestones & Valley Footprint
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-gold-accent">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-accent font-bold uppercase tracking-widest leading-none">2009</p>
                      <p className="text-xs text-gray-300 mt-1 leading-normal font-light">First residential cleanings initiated in central Phoenix, AZ.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-gold-accent">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-accent font-bold uppercase tracking-widest leading-none">2016 Campaign</p>
                      <p className="text-xs text-gray-300 mt-1 leading-normal font-light">Official restart under a formal family-managed LLC framework.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-gold-accent">
                      <ThumbsUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-accent font-bold uppercase tracking-widest leading-none">Today</p>
                      <p className="text-xs text-gray-300 mt-1 leading-normal font-light">Proudly serving over 300+ recurring residential/condo customers throughout the entire Phoenix Valley.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-300 font-sans">
                  <span>Fully Insured LLC</span>
                  <span className="text-gold-accent font-bold">Phoenix Registry</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Values Breakdown Row */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs text-royal-blue uppercase tracking-widest font-semibold block">Primacy of Quality</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-royal-dark">
              The Five Values We Clean By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map((value, i) => (
              <div 
                key={i} 
                className="bg-gray-50 border border-gray-100/50 hover:border-gold-accent/30 rounded-xl p-6 space-y-4 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-royal-blue/5 flex items-center justify-center text-royal-blue border border-royal-blue/10">
                  <CleanIcon name={value.iconName} className="w-5 h-5 text-royal-blue" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-royal-dark mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
