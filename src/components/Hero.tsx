'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fotos/508415836_1295910482537864_7672495380146623795_n.jpg"
          alt="Premium frameless shower door installation"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-accent text-sm md:text-base font-light tracking-widest uppercase">
            Premium Glass Solutions
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-light mb-6 leading-tight"
        >
          Shower Glass Doors<br />
          <span className="text-accent">Built for Miami Homes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-text text-lg md:text-xl mb-8 font-light leading-relaxed"
        >
          Custom frameless enclosures • Professional installation • 10+ years of excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-gold text-dark font-semibold hover:bg-gold/90 transition-colors duration-300 text-center"
          >
            Get Free Estimate
          </a>
          <a
            href="https://wa.me/17868777405?text=Hi%2C%20I%27m%20interested%20in%20your%20shower%20door%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-colors duration-300 font-semibold text-center"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center text-accent hover:text-light transition-colors">
          <span className="text-sm font-light tracking-wider mb-2 uppercase">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
