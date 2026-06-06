import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FAQ_DATA } from '../data';

interface FAQItemProps {
  key?: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 font-semibold text-royal-dark font-serif flex items-center justify-between hover:bg-gray-50/50 transition-colors focus:outline-none"
      >
        <span className="pr-4 text-sm sm:text-base">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gold-accent shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.25 } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <div className="p-5 sm:p-6 pt-0 border-t border-gray-50 text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqView() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']); // First one open by default

  const handleToggle = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(x => x !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div id="faq-page-container" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] bg-royal-blue/10 px-3 py-1 rounded-full">
            Answers & Clarity
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-royal-dark">
            Frequently Answered Questions
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Everything you need to know about our royal cleaning processes, family business safety, and booking policies.
          </p>
        </div>

        {/* FAQ Accordions Grid */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIds.includes(faq.id)}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Quality Commitment Trust Box */}
        <div className="mt-12 bg-royal-blue text-white rounded-2xl border-2 border-gold-accent/20 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3 text-left">
            <h3 className="font-serif text-xl font-bold text-gold-accent flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-gold-accent" />
              <span>Full Insurance & Quality Guarantee</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              We stand fully behind our family name and core service quality. If any spot or dust particle is missed within our active checklists, contact our coordinators within 24 hours of completion—we will send someone back immediately to rectify it entirely free of charge. Your absolute loyalty is our ultimate reward.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center w-full">
              <span className="text-[10px] uppercase font-bold text-gold-accent block tracking-wider mb-1">State License Valid</span>
              <span className="font-mono text-sm block font-bold text-white">#RHC-AZ-2016-LLC</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
