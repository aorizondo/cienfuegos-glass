'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, CheckCircle, Award, Wrench } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const WhyUs = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

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

  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Certified',
      description: 'All glass is tempered for safety compliance and durability',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Lifetime Warranty',
      description: 'Lifetime warranty on hardware and installation workmanship',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Installation',
      description: 'Professional installation completed in as little as one day',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'Free estimates with transparent, competitive pricing',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Expert Craftsmanship',
      description: '10+ years of experience with meticulous attention to detail',
    },
  ];

  const serviceAreas = [
    'Miami', 'Kendall', 'Doral', 'Coral Gables', 'Brickell',
    'Hialeah', 'Westchester', 'Homestead', 'Cutler Bay', 'South Miami',
    'Pinecrest', 'Coconut Grove', 'Aventura', 'Sunny Isles', 'Miami Beach',
    'All Miami-Dade County',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="why-us" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">
            Our Commitment to Excellence
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <div className="text-gold">{reason.icon}</div>
              </div>
              <h3 className="text-light font-semibold mb-2 text-lg">{reason.title}</h3>
              <p className="text-text text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary/20 border border-accent/20 rounded-xl p-12"
        >
          <h3 className="text-2xl font-display font-bold text-light mb-6 text-center">
            Service Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-light hover:border-accent/60 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
