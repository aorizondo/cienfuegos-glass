'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PAGE_SIZE = 12;

const allImages = [
  { src: '499997335_1276042277858018_1226764751213718351_n', alt: 'Frameless shower door installation Miami', category: 'frameless' },
  { src: '489498323_1234081312054115_6281009152648013009_n', alt: 'Modern shower enclosure Coral Gables', category: 'frameless' },
  { src: '73515704_2415493132037765_5372763294249517056_n', alt: 'Custom glass shower Miami', category: 'frameless' },
  { src: '47683685_2189462681307479_8440508578078392320_n', alt: 'Semi-frameless shower door', category: 'semi-frameless' },
  { src: '489815169_3970469043206825_1752626027608878392_n', alt: 'Walk-in shower enclosure', category: 'walk-in' },
  { src: '490386664_3970469869873409_9119641649013128501_n', alt: 'Frameless bathroom glass doors', category: 'frameless' },
  { src: '55793540_2261890467398033_1494699480010719232_n', alt: 'Premium shower door installation', category: 'frameless' },
  { src: '68725415_2357523987834680_4801777688945623040_n', alt: 'Custom glass installation Miami', category: 'commercial' },
  { src: '490267554_3970469936540069_6478893154460585196_n', alt: 'Frameless enclosure Doral', category: 'frameless' },
  { src: '49946891_2214197662167314_6398980879917514752_n', alt: 'Shower door design Miami', category: 'frameless' },
  { src: '50223945_2214197725500641_1002798658011267072_n', alt: 'Bathroom glass solution', category: 'semi-frameless' },
  { src: '50539848_2214197685500645_3559042946391080960_n', alt: 'Elegant shower enclosure', category: 'frameless' },
  { src: '68455081_2357523677834711_528273001653731328_n', alt: 'Custom frameless shower Miami', category: 'frameless' },
  { src: '59872695_2285842405002839_3678193740138151936_n', alt: 'Glass partition installation', category: 'commercial' },
  { src: '499228673_4010932042493858_6912110525183246754_n', alt: 'Premium shower doors Miami', category: 'frameless' },
  { src: '73304035_2415493158704429_2475792069092704256_n', alt: 'Frameless glass shower Kendall', category: 'frameless' },
  { src: '56816025_2265529817034098_4201502077425287168_n', alt: 'Walk-in shower design', category: 'walk-in' },
  { src: '500286933_1275750454553867_1567319370097498933_n', alt: 'Custom shower enclosure Miami', category: 'frameless' },
  { src: '490300363_3970469726540090_8664455822662189378_n', alt: 'Professional glass installation', category: 'frameless' },
  { src: '498682584_4010932035827192_5540031081643747321_n', alt: 'Frameless bathroom door', category: 'frameless' },
  { src: '500200850_1275748704554042_3472413797938586010_n', alt: 'Luxury shower enclosure Miami', category: 'frameless' },
  { src: '500257811_1275749841220595_20195216482106241_n', alt: 'Custom glass shower Brickell', category: 'frameless' },
  { src: '492408018_1250779803717599_735806355006297274_n', alt: 'Semi-frameless enclosure Miami', category: 'semi-frameless' },
  { src: '491984406_1243027317826181_7381695067973635338_n', alt: 'Walk-in shower installation', category: 'walk-in' },
  { src: '42139070_2138471243073290_7205424546667560960_n', alt: 'Frameless shower door installation', category: 'frameless' },
  { src: '508685465_1295135645948681_528981582150107870_n', alt: 'Commercial glass solution Miami', category: 'commercial' },
  { src: '495566098_4002449873342075_245622247702396314_n', alt: 'Custom frameless shower', category: 'frameless' },
  { src: '69286150_2367169440203468_7682818433724973056_n', alt: 'Bathroom glass partition', category: 'commercial' },
  { src: '489033719_1234081372054109_8679939838675222042_n', alt: 'Premium shower doors installation', category: 'frameless' },
  { src: '132008120_2778500805736994_6824193911000866591_n', alt: 'Frameless glass enclosure', category: 'frameless' },
  { src: '36668734_2070934203160328_4810007417515409408_n', alt: 'Custom shower glass Miami', category: 'frameless' },
  { src: '490380081_3970470173206712_2786898035193504931_n', alt: 'Walk-in enclosure design', category: 'walk-in' },
  { src: '52807458_2242359639351116_7873624327239761920_n', alt: 'Semi-frameless shower door', category: 'semi-frameless' },
  { src: '508415836_1295910482537864_7672495380146623795_n', alt: 'Premium frameless shower installation', category: 'frameless' },
  { src: '490589197_3970468879873508_6640168906121104071_n', alt: 'Custom glass shower Miami', category: 'frameless' },
  { src: '490267429_1234081395387440_9080005900110235703_n', alt: 'Frameless shower enclosure', category: 'frameless' },
  { src: '489843895_3970470156540047_627281491271937143_n', alt: 'Walk-in shower glass Miami', category: 'walk-in' },
  { src: '500764468_4020414638212265_3549904183990682494_n', alt: 'Commercial shower installation', category: 'commercial' },
  { src: '69853867_2367169283536817_7026322391789731840_n', alt: 'Glass partition design', category: 'commercial' },
  { src: '53207599_2242359616017785_1712430287280930816_n', alt: 'Frameless shower doors Doral', category: 'frameless' },
  { src: '302427694_514855500643370_9219416836488174960_n', alt: 'Premium glass enclosure', category: 'frameless' },
  { src: '75237440_2415493188704426_6262099782567723008_n', alt: 'Custom shower installation Miami', category: 'frameless' },
  { src: '490934567_1243027241159522_9181844223015985341_n', alt: 'Walk-in shower design Miami', category: 'walk-in' },
  { src: '72469791_2398147343772344_3815396801121353728_n', alt: 'Semi-frameless enclosure installation', category: 'semi-frameless' },
  { src: '56811302_2267081340212279_9158789369539067904_n', alt: 'Frameless bathroom glass door', category: 'frameless' },
  { src: '492695649_1250779897050923_2375304519241288864_n', alt: 'Commercial glass installation Miami', category: 'commercial' },
  { src: '57023996_2265529650367448_2510904066687631360_n', alt: 'Custom frameless shower Miami', category: 'frameless' },
  { src: '499986422_1275747354554177_5898756840309578452_n', alt: 'Premium shower doors Miami', category: 'frameless' },
  { src: '56711114_2265529800367433_2643881721665159168_n', alt: 'Walk-in shower glass installation', category: 'walk-in' },
  { src: '41968663_2138471613073253_5737276769229078528_n', alt: 'Glass shower door design', category: 'frameless' },
  { src: '489968766_3970469946540068_608912871683195848_n', alt: 'Frameless enclosure Miami', category: 'frameless' },
  { src: '59521617_2281836085403471_3287528613020172288_n', alt: 'Semi-frameless glass partition', category: 'semi-frameless' },
  { src: '492556558_9464004067028638_6034759634657359797_n', alt: 'Commercial glass solution', category: 'commercial' },
];

export { allImages };

const filterOptions = [
  { label: 'All Projects', value: 'all' },
  { label: 'Frameless', value: 'frameless' },
  { label: 'Semi-Frameless', value: 'semi-frameless' },
  { label: 'Walk-In', value: 'walk-in' },
  { label: 'Commercial', value: 'commercial' },
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredImages = selectedFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === selectedFilter);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') setSelectedImage(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
      if (e.key === 'ArrowRight') setSelectedImage(prev => prev !== null ? (prev + 1) % filteredImages.length : null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedImage, filteredImages.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-light mb-6">
            Gallery of Excellence
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Explore our portfolio of premium shower doors and glass installations across Miami.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedFilter === filter.value
                  ? 'bg-gold text-dark scale-105 shadow-lg shadow-gold/30'
                  : 'bg-primary/20 text-text border border-accent/20 hover:border-accent/50 hover:scale-105'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid — variable row heights for visual interest */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => {
              // Every 5th image is large (spans 2 cols on md+)
              const isLarge = index % 5 === 0;
              return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, delay: (index % PAGE_SIZE) * 0.04 }}
                  onClick={() => setSelectedImage(filteredImages.indexOf(image))}
                  className={`relative rounded-lg overflow-hidden cursor-pointer group ${
                    isLarge ? 'md:col-span-2 md:row-span-2 h-64 md:h-[28rem]' : 'h-48 md:h-56'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/fotos/thumb/${image.src}.webp`}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
                    <motion.p
                      initial={{ y: 10 }}
                      className="text-light text-sm font-medium"
                    >
                      {image.alt}
                    </motion.p>
                    <p className="text-accent/80 text-xs mt-1 capitalize">{image.category}</p>
                  </div>
                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-accent/40 transition-colors duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center mt-12 gap-3"
          >
            <p className="text-text/60 text-sm">
              {visibleImages.length} of {filteredImages.length} projects
            </p>
            <button
              onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
              className="group px-10 py-3.5 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-dark transition-all duration-300 font-semibold text-sm"
            >
              View More Projects
              <span className="inline-block ml-2 group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-dark/98 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-text/60 hover:text-light transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={filteredImages[selectedImage].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/fotos/full/${filteredImages[selectedImage].src}.webp`}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text/60 hover:text-light bg-dark/60 hover:bg-dark/80 p-3 rounded-full transition-all"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(prev => prev !== null ? (prev + 1) % filteredImages.length : null);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text/60 hover:text-light bg-dark/60 hover:bg-dark/80 p-3 rounded-full transition-all"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter + Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-light text-sm font-medium mb-1">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="text-text/50 text-xs">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
