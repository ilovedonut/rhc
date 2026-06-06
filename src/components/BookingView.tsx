import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Mail, Phone, Instagram, CheckCircle2, ChevronRight, Calendar, Sparkles, MapPin, Loader2, RefreshCw } from 'lucide-react';
import { SERVICES_DATA, HOME_SIZES, calculatePriceEstimate } from '../data';
import { BookingSubmission } from '../types';

interface BookingViewProps {
  preFilledServiceId?: string;
  preFilledSizeId?: string;
}

export default function BookingView({ preFilledServiceId = 'regular-clean', preFilledSizeId = '2br' }: BookingViewProps) {
  // Booking Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState(preFilledServiceId);
  const [homeSize, setHomeSize] = useState(preFilledSizeId);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<BookingSubmission | null>(null);
  const [myBookings, setMyBookings] = useState<BookingSubmission[]>([]);

  // Calculate live estimate price
  const selectedService = SERVICES_DATA.find(s => s.id === serviceType) || SERVICES_DATA[0];
  const livePrice = calculatePriceEstimate(selectedService.basePrice, homeSize);

  // Initialize submitted bookings list from Client-side Local Storage
  useEffect(() => {
    const stored = localStorage.getItem('royal_cleaning_bookings');
    if (stored) {
      try {
        setMyBookings(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse bookings", err);
      }
    }
  }, []);

  // Set default preferred date to tomorrow's date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Update form inputs if parent states prefilled
  useEffect(() => {
    if (preFilledServiceId) setServiceType(preFilledServiceId);
    if (preFilledSizeId) setHomeSize(preFilledSizeId);
  }, [preFilledServiceId, preFilledSizeId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert("Please fill out your name, contact phone, and email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const selectedSizeLabel = HOME_SIZES.find(size => size.id === homeSize)?.label || "Standard";
      const newBooking: BookingSubmission = {
        id: `RHC-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName,
        phone,
        email,
        serviceType: selectedService.name,
        homeSize: selectedSizeLabel,
        preferredDate,
        preferredTime,
        specialInstructions,
        estimatedPrice: livePrice,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Pending Review'
      };

      const updatedHistory = [newBooking, ...myBookings];
      setMyBookings(updatedHistory);
      localStorage.setItem('royal_cleaning_bookings', JSON.stringify(updatedHistory));
      setSuccessBooking(newBooking);
      setIsSubmitting(false);

      // Reset main inputs that change, but keep email/phone of user for convenience
      setFullName('');
      setSpecialInstructions('');
    }, 1200);
  };

  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear your local booking history simulation?")) {
      localStorage.removeItem('royal_cleaning_bookings');
      setMyBookings([]);
    }
  };

  return (
    <div id="booking-container-view" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] bg-royal-blue px-3 py-10 rounded-full border border-gold-accent/20 select-none">
            Free Quotes & Booking System
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-royal-dark pt-4">
            Reserve Your Royal Experience
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Fill out the form below. Our family coordinators will review your parameters and text/email you back with a locked-in date and exact confirmation details!
          </p>
        </div>

        {/* Success Modal Confirmation */}
        <AnimatePresence>
          {successBooking && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-10 bg-emerald-50 border-2 border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-lg text-emerald-900 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8 space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="bg-emerald-500 p-1 rounded-full text-white">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Booking Request Submitted Successfully!</h3>
                </div>
                <p className="text-sm text-emerald-800">
                  Thank you, <strong>{successBooking.fullName}</strong>. Your royal cleaning ticket has been registered as pending. Our family team will call or text your number <strong>{successBooking.phone}</strong> shortly.
                </p>
                <div className="text-xs text-emerald-700 bg-white/40 p-3 rounded-lg grid grid-cols-2 gap-y-2 gap-x-4 max-w-xl font-medium sm:grid-cols-4">
                  <div>
                    <span className="block text-[10px] text-emerald-800 uppercase font-bold">Ticket ID:</span>
                    <span className="font-mono text-royal-dark">{successBooking.id}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-800 uppercase font-bold">Estimate Price:</span>
                    <span className="text-royal-dark">${successBooking.estimatedPrice}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-800 uppercase font-bold">Service Mode:</span>
                    <span className="text-royal-dark truncate block max-w-[120px]">{successBooking.serviceType}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-800 uppercase font-bold">Date:</span>
                    <span className="text-royal-dark">{successBooking.preferredDate}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <button
                  onClick={() => setSuccessBooking(null)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-semibold py-2.5 px-5 rounded-lg transition-colors border border-emerald-500"
                >
                  Dismiss Message
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form and Contact Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Action Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-royal-dark mb-6 flex items-center space-x-2 border-b border-gray-100 pb-3">
              <Sparkles className="w-5 h-5 text-gold-accent" />
              <span>Submit Appointment Details</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="(602) 555-0190 placeholder"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent font-semibold text-royal-dark"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    {SERVICES_DATA.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="homeSize" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Home Surface Size
                  </label>
                  <select
                    id="homeSize"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent font-semibold text-royal-dark"
                    value={homeSize}
                    onChange={(e) => setHomeSize(e.target.value)}
                  >
                    {HOME_SIZES.map(h => (
                      <option key={h.id} value={h.id}>{h.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent font-mono"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                    Preferred Start Time
                  </label>
                  <select
                    id="preferredTime"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent font-mono"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                  >
                    <option value="07:00">07:00 AM </option>
                    <option value="08:30">08:30 AM (Most Common)</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialInstructions" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Special Instructions or Pet notes (Optional)
                </label>
                <textarea
                  id="specialInstructions"
                  rows={3}
                  placeholder="Provide codes, entry plans, specific luxury counter warnings, animal details, etc."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm my-1 focus:ring-1 focus:ring-gold-accent focus:border-gold-accent"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                ></textarea>
              </div>

              {/* Dynamic Quote Alert in form */}
              <div className="bg-royal-blue/5 border border-royal-blue/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-accent tracking-widest block font-sans">
                    Computed Standard Estimate
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-black text-royal-dark">
                    ${livePrice}
                  </span>
                </div>
                <div className="text-right text-xs text-gray-400 font-sans">
                  <span>Based in {selectedService.name.split(' ')[0]} for {HOME_SIZES.find(size => size.id === homeSize)?.label.split(' ')[0]}</span>
                </div>
              </div>

              <button
                type="submit"
                id="booking-submit-btn"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-royal-blue text-white hover:bg-royal-dark py-3.5 px-6 rounded-xl font-sans font-bold text-sm shadow transition-all disabled:opacity-50 focus:outline-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    <span>Transmitting Booking Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Royal Booking Quote</span>
                    <ChevronRight className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Contact Details, Social, Google Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contacts Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 space-y-5">
              <h3 className="font-serif text-xl font-bold text-royal-dark flex items-center space-x-2 pb-1.5 border-b border-gray-100">
                <Crown className="w-5 h-5 text-gold-accent" />
                <span>Valley Support Line</span>
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Need immediate aid or have unique commercial office space specifications? Call or message the Arizona family directors directly.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:6025550190"
                  className="flex items-center space-x-3 text-royal-dark hover:text-gold-accent group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/10 flex items-center justify-center group-hover:bg-gold-accent/20 transition-all text-gold-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest leading-none">Phone Call & Text</span>
                    <span className="text-sm font-semibold mt-1 block">(602) 555-0190</span>
                  </div>
                </a>

                <a
                  href="mailto:contact@royalhousecleaningaz.com"
                  className="flex items-center space-x-3 text-royal-dark hover:text-gold-accent group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/10 flex items-center justify-center group-hover:bg-gold-accent/20 transition-all text-gold-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest leading-none">E-mail Inquiries</span>
                    <span className="text-sm font-semibold mt-1 block">info@royalhousecleanaz.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/royal_house_cleaning_az"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-royal-dark hover:text-gold-accent group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/10 flex items-center justify-center group-hover:bg-gold-accent/20 transition-all text-gold-accent">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest leading-none">Instagram Portfolio</span>
                    <span className="text-sm font-semibold mt-1 block">@royal_house_cleaning_az</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps Embed area */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-royal-dark flex items-center space-x-2 pb-1.5 border-b border-gray-100">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span>Our active service zone</span>
              </h3>

              <p className="text-xs text-gray-500 font-light">
                Based in major Phoenix, AZ. Our family handles cleanings within 35 miles encompassing Scottsdale, Tempe, Chandler, Gilbert, Peoria, and Glendale.
              </p>

              {/* Real Map Embed showing Phoenix Valley */}
              <div className="rounded-xl overflow-hidden shadow-inner border border-gray-100 h-48 bg-gray-100 relative">
                <iframe
                  title="Royal House Cleaning Phoenix AZ District Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d425893.4357736636!2d-112.34181971714479!3d33.60533519890616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179d3%3A0x2247fb193fa75253!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1717646400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Local Booking History Tracker panel */}
        <div id="booking-history-dashboard" className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-gray-100 mb-6 gap-2">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-royal-dark flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gold-accent" />
                <span>Your Booking Requests History</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1 font-light">
                Locally tracked database of simulated cleanings you entered during this session.
              </p>
            </div>
            {myBookings.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="inline-flex items-center space-x-1.5 text-red-500 hover:text-red-600 text-xs font-semibold py-1.5 px-3 border border-red-200 hover:bg-red-50 rounded-lg transition-all focus:outline-none"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Clear Simulation</span>
              </button>
            )}
          </div>

          {myBookings.length === 0 ? (
            <div className="text-center py-12 text-gray-400 space-y-3 font-sans">
              <Calendar className="w-12 h-12 text-gray-200 mx-auto" />
              <p className="text-sm font-semibold">No booking requests submitted yet.</p>
              <p className="text-xs text-gray-300 max-w-sm mx-auto font-light">
                Enter your details above and press submit to see how your live quote registers in our responsive family database!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myBookings.map((booking) => (
                <div
                  key={booking.id}
                  id={`history-${booking.id}`}
                  className="border border-gray-100 bg-gray-50/50 rounded-xl p-5 shadow-sm space-y-4 hover:border-gold-accent/25 transition-all"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                    <div>
                      <span className="font-mono text-xs font-bold text-royal-blue">{booking.id}</span>
                      <span className="block text-[10px] text-gray-400 mt-0.5">{booking.submittedAt}</span>
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {booking.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Client Name</span>
                      <span className="font-semibold text-royal-dark">{booking.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Contact</span>
                      <span className="text-gray-600 font-mono">{booking.phone} &bull; {booking.email}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div>
                        <span className="text-[10px] text-gray-400 block font-bold uppercase">Service Selected</span>
                        <span className="font-semibold text-royal-dark block truncate">{booking.serviceType}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 block font-bold uppercase">Footprint</span>
                        <span className="font-semibold text-royal-dark block truncate">{booking.homeSize}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold uppercase">Requested Schedule</span>
                      <span className="font-semibold text-royal-dark block">{booking.preferredDate} at {booking.preferredTime}</span>
                    </div>
                    {booking.specialInstructions && (
                      <div>
                        <span className="text-[10px] text-gray-400 block font-bold uppercase">Special Instructions</span>
                        <p className="text-gray-500 italic line-clamp-2 leading-relaxed bg-white p-2 rounded border border-gray-100">{booking.specialInstructions}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Guaranteed Quote:</span>
                    <span className="font-serif font-black text-lg text-royal-blue">${booking.estimatedPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
