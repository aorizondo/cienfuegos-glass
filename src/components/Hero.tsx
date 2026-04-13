'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/LanguageContext';

const heroImages = [
  '/fotos/full/508415836_1295910482537864_7672495380146623795_n.webp',
  '/fotos/full/508685465_1295135645948681_528981582150107870_n.webp',
  '/fotos/full/499986422_1275747354554177_5898756840309578452_n.webp',
  '/fotos/full/500200850_1275748704554042_3472413797938586010_n.webp',
  '/fotos/full/302427694_514855500643370_9219416836488174960_n.webp',
];

const Hero = () => {
  const { t } = useLang();
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Rotating Background Images with Ken Burns effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImages[currentBg]}
            alt="Cienfuegos Glass shower door installation"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/70 via-dark/50 to-dark/90" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold text-sm md:text-base font-light tracking-[0.3em] uppercase mb-6"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-light mb-8 leading-[1.1]"
        >
          {t.hero.headline1}{' '}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block text-accent italic"
          >
            {t.hero.headline2}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-text/80 text-lg md:text-xl mb-10 font-light tracking-wide"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 rounded-full bg-gold text-dark font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="https://wa.me/17868777405?text=Hi%2C%20I%27m%20interested%20in%20your%20shower%20door%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border-2 border-accent/60 text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 font-semibold text-lg hover:scale-105 active:scale-95"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentBg(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentBg ? 'w-8 bg-gold' : 'w-4 bg-text/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-text/50 hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-light tracking-[0.2em] uppercase mb-2">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
