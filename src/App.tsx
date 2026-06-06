import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import BookingView from './components/BookingView';
import FaqView from './components/FaqView';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  
  // States to pass prefilled options from service overview cards to booking estimator
  const [preFilledServiceId, setPreFilledServiceId] = useState('regular-clean');
  const [preFilledSizeId, setPreFilledSizeId] = useState('2br');

  const handleSelectService = (serviceId: string) => {
    setPreFilledServiceId(serviceId);
  };

  const handlePreFillBooking = (serviceId: string, sizeId: string) => {
    setPreFilledServiceId(serviceId);
    setPreFilledSizeId(sizeId);
  };

  const handleViewChange = (view: string) => {
    // If user navigates to direct contact, we set activeView to booking
    if (view === 'contact') {
      setActiveView('booking');
    } else {
      setActiveView(view);
    }
  };

  // Animated page wrapper variants
  const pageTransitionVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      
      {/* Sticky header navigation */}
      <Navbar activeView={activeView} onViewChange={handleViewChange} />

      {/* Main page view content with animated transition routing */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {activeView === 'home' && (
              <HomeView
                onViewChange={handleViewChange}
                onSelectService={handleSelectService}
              />
            )}

            {activeView === 'services' && (
              <ServicesView
                onViewChange={handleViewChange}
                selectedServiceId={preFilledServiceId}
                onSelectService={handleSelectService}
                onPreFillBooking={handlePreFillBooking}
              />
            )}

            {activeView === 'about' && (
              <AboutView onViewChange={handleViewChange} />
            )}

            {activeView === 'booking' && (
              <BookingView
                preFilledServiceId={preFilledServiceId}
                preFilledSizeId={preFilledSizeId}
              />
            )}

            {activeView === 'faqs' && (
              <FaqView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent informative footer */}
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}
