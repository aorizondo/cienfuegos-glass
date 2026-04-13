'use client';

import { motion } from 'framer-motion';
import { Square, Maximize2, Grid3X3, Building2, Layers, Frame } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const icons = [
  <Square key="sq" className="w-8 h-8" />,
  <Frame key="fr" className="w-8 h-8" />,
  <Layers key="ly" className="w-8 h-8" />,
  <Maximize2 key="mx" className="w-8 h-8" />,
  <Grid3X3 key="gr" className="w-8 h-8" />,
  <Building2 key="bd" className="w-8 h-8" />,
];

const Services = () => {
  const { t } = useLang();
  const { services } = t;

  return (
    <section id="services" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            {services.sectionLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            {services.title}
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">{services.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-xl bg-primary/20 border border-accent/20 hover:border-accent/50 hover:bg-primary/30 transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-lg bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                <div className="text-gold">{icons[index]}</div>
              </div>
              <h3 className="text-xl font-semibold text-light mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-text text-sm leading-relaxed mb-6">{service.description}</p>
              <a href="#contact" className="inline-block text-accent hover:text-gold transition-colors font-semibold text-sm">
                {services.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-text mb-6">{services.bottomText}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-accent text-dark font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300"
          >
            {services.bottomCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
