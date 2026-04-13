'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const Testimonials = () => {
  const { t } = useLang();
  const { testimonials } = t;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.items.length]);

  const handlePrev = () => { setAutoPlay(false); setCurrentIndex(prev => (prev - 1 + testimonials.items.length) % testimonials.items.length); };
  const handleNext = () => { setAutoPlay(false); setCurrentIndex(prev => (prev + 1) % testimonials.items.length); };

  const item = testimonials.items[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            {testimonials.sectionLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            {testimonials.title}
          </h2>
          <p className="text-text text-lg">{testimonials.sub}</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${item.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/20 border border-accent/20 rounded-xl p-8 md:p-12"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-text text-center text-lg md:text-xl mb-8 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="text-center border-t border-accent/20 pt-6">
                <h4 className="text-light font-semibold text-lg">{item.name}</h4>
                <p className="text-accent text-sm">{item.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 md:-translate-x-20 text-accent hover:text-light transition-colors p-2">
            <ChevronLeft size={32} />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 md:translate-x-20 text-accent hover:text-light transition-colors p-2">
            <ChevronRight size={32} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => { setAutoPlay(false); setCurrentIndex(index); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-gold' : 'w-3 bg-accent/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
