import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Sparkles, Building, Home as HomeIcon, Briefcase, Calculator, HelpCircle } from 'lucide-react';
import { SERVICES_DATA, HOME_SIZES, calculatePriceEstimate } from '../data';
import { CleanIcon } from './HomeView';
import { Service } from '../types';

interface ServicesViewProps {
  onViewChange: (view: string) => void;
  selectedServiceId: string;
  onSelectService: (serviceId: string) => void;
  onPreFillBooking: (serviceId: string, sizeId: string) => void;
}

export default function ServicesView({
  onViewChange,
  selectedServiceId,
  onSelectService,
  onPreFillBooking
}: ServicesViewProps) {
  const [activeSize, setActiveSize] = useState('2br');

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleBookNow = (serviceId: string) => {
    onPreFillBooking(serviceId, activeSize);
    onViewChange('booking');
  };

  return (
    <div id="services-page-container" className="py-12 md:py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent bg-royal-blue/10 px-3 py-1 rounded-full">
            Premium Packages & Estimator
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-royal-dark">
            Our Royal Cleaning Services
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Honest, premium, and thorough cleaning designed around family values. Click any service to view specific details, check included tasks, and simulate live pricing.
          </p>
        </div>

        {/* Dynamic Calculator Spotlight Grid */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Selector & Details */}
          <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-royal-dark flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-gold-accent" />
              <span>1. Choose a Service Package</span>
            </h2>

            {/* Micro Tabs Selector */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 pt-1">
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => onSelectService(service.id)}
                    className={`px-4 py-3 rounded-xl text-left border font-sans text-sm font-semibold transition-all duration-200 flex items-center space-x-2 w-full sm:w-[48%] lg:w-full xl:w-[48%] ${
                      isSelected
                        ? 'border-gold-accent bg-royal-blue text-white shadow-md'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <CleanIcon 
                      name={service.id === 'apartment-condo' ? 'Building' : service.id === 'move-in-out' ? 'Home' : service.id === 'office-clean' ? 'Briefcase' : 'Sparkles'} 
                      className={`w-4 h-4 shrink-0 ${isSelected ? 'text-gold-accent' : 'text-gray-400'}`} 
                    />
                    <span className="truncate">{service.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Service Detailed Description Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4 space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent max-w-max block bg-royal-blue/10 px-2 py-0.5 rounded mb-2">
                  Spotlight Features
                </span>
                <h3 className="font-serif text-xl font-bold text-royal-dark">
                  {selectedService.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Starting Price baseline: <span className="text-royal-blue font-bold">{selectedService.pricingDetail}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                {selectedService.fullDescription}
              </p>

              <div>
                <p className="text-xs font-bold text-royal-dark uppercase tracking-wide mb-2">
                  What is included in this service:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                      <Check className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Estimate simulation */}
          <div className="lg:col-span-5 bg-gradient-to-br from-royal-blue to-royal-dark text-white p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-accent/25 relative">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:12px_12px]"></div>
            
            <div className="space-y-6 relative z-10">
              <h2 className="font-serif text-2xl font-bold text-white flex items-center space-x-2 border-b border-white/10 pb-3">
                <Calculator className="w-5 h-5 text-gold-accent" />
                <span>2. Select Your House Size</span>
              </h2>

              <p className="text-xs text-gray-300">
                Prices adjust based on footprint. Standard supplies and family dedication are always fully included.
              </p>

              {/* House Size Cards Select */}
              <div className="space-y-2.5">
                {HOME_SIZES.map((size) => {
                  const isSelected = activeSize === size.id;
                  const price = calculatePriceEstimate(selectedService.basePrice, size.id);
                  return (
                    <button
                      key={size.id}
                      onClick={() => setActiveSize(size.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-gold-accent text-royal-dark border-transparent font-bold shadow-lg shadow-gold-accent/10 translate-x-1'
                          : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{size.label}</span>
                      <span className={`text-xs ml-2 rounded px-2 py-0.5 ${isSelected ? 'bg-royal-dark text-white font-mono' : 'bg-white/10 text-gold-accent font-mono font-bold'}`}>
                        Estimated ${price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculate Total Callout */}
            <div className="pt-6 border-t border-white/10 mt-6 relative z-10 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-gray-300 uppercase tracking-widest uppercase block mb-1">
                    Estimated Total Price
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-white">
                    ${calculatePriceEstimate(selectedService.basePrice, activeSize)}
                  </span>
                </div>
                <span className="text-[10px] bg-white/15 text-gold-accent px-2.5 py-1 rounded-md text-right uppercase tracking-wide">
                  Free Quote Included
                </span>
              </div>

              <button
                onClick={() => handleBookNow(selectedService.id)}
                className="w-full bg-gradient-to-r from-gold-accent to-amber-500 hover:from-amber-500 hover:to-gold-accent text-royal-dark font-sans font-bold py-3.5 rounded-xl shadow-lg hover:shadow-gold-accent/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none text-center"
              >
                Book This Estimate Now
              </button>
              
              <div className="flex items-center justify-center space-x-1 text-center text-[10px] text-gray-400">
                <Info className="w-3.5 h-3.5 text-gold-accent" />
                <span>Base estimates may vary based on actual state of rooms.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Core Detail Listing for deep viewing (5 clean item cards in list layout) */}
        <div className="space-y-8">
          <h2 className="font-serif text-2xl font-bold text-royal-dark text-center pb-2">
            Detailed Service Checklist Comparison
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <div
                key={service.id}
                id={`detailed-card-${service.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start justify-between hover:border-gold-accent/30 transition-all"
              >
                <div className="md:w-3/4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-royal-blue/5 flex items-center justify-center text-royal-blue border border-royal-blue/10">
                      <CleanIcon name={service.id === 'apartment-condo' ? 'Building' : service.id === 'move-in-out' ? 'Home' : service.id === 'office-clean' ? 'Briefcase' : 'Sparkles'} className="w-5 h-5 text-royal-blue" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-royal-dark leading-tight">
                        {service.name}
                      </h3>
                      <span className="text-xs text-gold-accent font-semibold tracking-wide uppercase">
                        {service.pricingDetail}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold text-royal-dark uppercase tracking-wider mb-2">
                      Specific Inclusions Highlights:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-gray-600">
                          <Check className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/4 w-full md:border-l md:border-gray-100 md:pl-6 pt-4 md:pt-0 flex flex-col justify-center h-full space-y-3">
                  <div className="text-center md:text-left">
                    <span className="text-[10px] text-gray-400 block tracking-widest uppercase">Base Fee</span>
                    <span className="text-2xl font-serif font-bold text-royal-dark">${service.basePrice}</span>
                  </div>
                  
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className="w-full bg-royal-blue text-white hover:bg-royal-dark text-xs font-semibold py-2.5 rounded-lg transition-colors focus:outline-none"
                  >
                    Select in Estimator
                  </button>
                  
                  <button
                    onClick={() => handleBookNow(service.id)}
                    className="w-full border border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-royal-dark text-xs font-semibold py-2.5 rounded-lg transition-colors focus:outline-none"
                  >
                    Direct Book Form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
