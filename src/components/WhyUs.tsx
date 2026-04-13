'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, CheckCircle, BadgeCheck, Wrench } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const icons = [
  <Shield key="sh" className="w-8 h-8" />,
  <BadgeCheck key="bc" className="w-8 h-8" />,
  <Clock key="cl" className="w-8 h-8" />,
  <DollarSign key="ds" className="w-8 h-8" />,
  <CheckCircle key="cc" className="w-8 h-8" />,
  <Wrench key="wr" className="w-8 h-8" />,
];

const serviceAreas = [
  'Miami', 'Kendall', 'Doral', 'Coral Gables', 'Brickell',
  'Hialeah', 'Westchester', 'Homestead', 'Cutler Bay', 'South Miami',
  'Pinecrest', 'Coconut Grove', 'Aventura', 'Sunny Isles', 'Miami Beach',
  'All Miami-Dade County',
];

const WhyUs = () => {
  const { t } = useLang();
  const { whyUs } = t;

  return (
    <section id="why-us" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            {whyUs.sectionLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">
            {whyUs.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {whyUs.reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <div className="text-gold">{icons[index]}</div>
              </div>
              <h3 className="text-light font-semibold mb-2 text-lg">{reason.title}</h3>
              <p className="text-text text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-primary/20 border border-accent/20 rounded-xl p-12"
        >
          <h3 className="text-2xl font-display font-bold text-light mb-6 text-center">
            {whyUs.serviceAreasTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-light hover:border-accent/60 hover:scale-105 transition-all duration-300"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
