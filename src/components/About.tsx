'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const useInViewSimple = (options: any) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options?.triggerOnce) {
          observer.unobserve(entry.target);
        }
      }
    }, {
      threshold: options?.threshold || 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, inView };
};

const About = () => {
  const { ref, inView } = useInViewSimple({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Customer Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/fotos/508685465_1295135645948681_528981582150107870_n.jpg"
              alt="Cienfuegos Glass team installation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
                About Our Company
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-4">
                Excellence in Glass Solutions
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-accent rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-text text-lg mb-6 leading-relaxed">
              Founded in 2006, Cienfuegos Glass has been the trusted choice for premium shower glass doors and custom glass solutions throughout Miami-Dade County. Our team of experienced craftsmen is dedicated to delivering excellence in every project.
            </motion.p>

            {/* Features */}
            <motion.ul variants={itemVariants} className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl font-light mt-1">✓</span>
                <div>
                  <h4 className="text-light font-semibold mb-1">Premium Materials</h4>
                  <p className="text-text text-sm">Tempered safety glass with lifetime hardware warranty</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl font-light mt-1">✓</span>
                <div>
                  <h4 className="text-light font-semibold mb-1">Expert Installation</h4>
                  <p className="text-text text-sm">Professional installation with meticulous attention to detail</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl font-light mt-1">✓</span>
                <div>
                  <h4 className="text-light font-semibold mb-1">Customer-Focused</h4>
                  <p className="text-text text-sm">Free estimates, competitive pricing, and outstanding service</p>
                </div>
              </li>
            </motion.ul>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-colors duration-300 font-semibold"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mt-20 md:mt-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-primary/20 border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-accent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-text font-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
