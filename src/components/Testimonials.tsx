'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Coconut Grove, Miami',
      text: 'Cienfuegos Glass transformed my master bathroom. The frameless shower doors are stunning and the installation was incredibly professional. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      location: 'Coral Gables, Miami',
      text: 'We\'ve used Cienfuegos Glass for three bathroom renovations now. Their attention to detail and customer service keeps us coming back. Best in Miami!',
      rating: 5,
    },
    {
      name: 'Lisa Chen',
      location: 'Brickell, Miami',
      text: 'As a property manager, I need reliable contractors. Cienfuegos Glass delivers consistently high-quality work on our residential properties. Excellent team.',
      rating: 5,
    },
    {
      name: 'James Martinez',
      location: 'Kendall, Miami',
      text: 'From consultation to installation, everything was perfect. The quality of their frameless doors is exceptional. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      location: 'Pinecrest, Miami',
      text: 'Professional, punctual, and perfect results. Our new walk-in shower looks incredible. The team was respectful and left everything spotless.',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            Client Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            What Our Clients Say
          </h2>
          <p className="text-text text-lg">
            Real experiences from real customers who trust Cienfuegos Glass
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/20 border border-accent/20 rounded-xl p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text text-center text-lg md:text-xl mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="text-center border-t border-accent/20 pt-6">
                <h4 className="text-light font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-accent text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 md:-translate-x-20 text-accent hover:text-light transition-colors p-2"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 md:translate-x-20 text-accent hover:text-light transition-colors p-2"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gold' : 'bg-accent/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
