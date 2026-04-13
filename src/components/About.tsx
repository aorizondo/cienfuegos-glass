'use client';

import { motion } from 'framer-motion';

const About = () => {
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
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-96 md:h-[32rem] rounded-xl overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fotos/full/508685465_1295135645948681_528981582150107870_n.webp"
              alt="Cienfuegos Glass professional shower door installation in Miami"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
                About Our Company
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-4">
                Excellence in Glass Solutions
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-accent rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-text text-lg mb-6 leading-relaxed"
            >
              Founded in 2006, Cienfuegos Glass has been the trusted choice for premium shower glass doors and custom glass solutions throughout Miami-Dade County. Our team of experienced craftsmen is dedicated to delivering excellence in every project.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {[
                { title: 'Premium Materials', desc: 'Tempered safety glass with lifetime hardware warranty' },
                { title: 'Expert Installation', desc: 'Professional installation with meticulous attention to detail' },
                { title: 'Customer-Focused', desc: 'Free estimates, competitive pricing, and outstanding service' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-gold text-2xl font-light mt-1">✓</span>
                  <div>
                    <h4 className="text-light font-semibold mb-1">{item.title}</h4>
                    <p className="text-text text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              href="#contact"
              className="inline-block px-8 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Learn More
            </motion.a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-20 md:mt-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6 rounded-xl bg-primary/20 border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-text font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
