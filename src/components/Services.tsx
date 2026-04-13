'use client';

import { motion } from 'framer-motion';
import { Zap, Square, Maximize2, Lightbulb, Grid3X3, Building2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Services = () => {
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

  const services = [
    {
      icon: <Square className="w-8 h-8" />,
      title: 'Frameless Shower Doors',
      description: 'Sleek, modern frameless enclosures that showcase your tile work and create an open, spacious feel.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Semi-Frameless Enclosures',
      description: 'The perfect balance between style and stability with minimal framing on sides.',
    },
    {
      icon: <Square className="w-8 h-8" />,
      title: 'Framed Shower Doors',
      description: 'Traditional framed styles in aluminum with your choice of finishes and colors.',
    },
    {
      icon: <Maximize2 className="w-8 h-8" />,
      title: 'Walk-In Showers',
      description: 'Custom walk-in enclosures perfect for modern bathrooms and accessibility needs.',
    },
    {
      icon: <Grid3X3 className="w-8 h-8" />,
      title: 'Glass Partitions',
      description: 'Elegant glass partitions for bathrooms, offices, and commercial spaces.',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Commercial Solutions',
      description: 'Large-scale installations for hotels, spas, and commercial properties.',
    },
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
    <section id="services" className="py-20 md:py-32 bg-dark">
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
            Our Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            Premium Glass Solutions for Every Need
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            From custom frameless doors to commercial installations, we offer comprehensive glass solutions tailored to your home or business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl bg-primary/20 border border-accent/20 hover:border-accent/50 hover:bg-primary/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                <div className="text-gold">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-light mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-block text-accent hover:text-gold transition-colors font-semibold text-sm"
              >
                Get Quote →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-text mb-6">
            Don't see what you're looking for? We provide custom glass solutions for any project.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-accent text-dark font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact for Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
