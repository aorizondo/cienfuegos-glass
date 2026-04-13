'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Plus } from 'lucide-react';

const PAGE_SIZE = 12;

const Gallery = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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

  // Array of all 54 images
  const allImages = [
    { src: '499997335_1276042277858018_1226764751213718351_n.jpg', alt: 'Frameless shower door installation Miami', category: 'frameless' },
    { src: '489498323_1234081312054115_6281009152648013009_n.jpg', alt: 'Modern shower enclosure Coral Gables', category: 'frameless' },
    { src: '73515704_2415493132037765_5372763294249517056_n.jpg', alt: 'Custom glass shower Miami', category: 'frameless' },
    { src: '47683685_2189462681307479_8440508578078392320_n.jpg', alt: 'Semi-frameless shower door', category: 'semi-frameless' },
    { src: '489815169_3970469043206825_1752626027608878392_n.jpg', alt: 'Walk-in shower enclosure', category: 'walk-in' },
    { src: '490386664_3970469869873409_9119641649013128501_n.jpg', alt: 'Frameless bathroom glass doors', category: 'frameless' },
    { src: '55793540_2261890467398033_1494699480010719232_n.jpg', alt: 'Premium shower door installation', category: 'frameless' },
    { src: '68725415_2357523987834680_4801777688945623040_n.jpg', alt: 'Custom glass installation Miami', category: 'commercial' },
    { src: '490267554_3970469936540069_6478893154460585196_n.jpg', alt: 'Frameless enclosure Doral', category: 'frameless' },
    { src: '49946891_2214197662167314_6398980879917514752_n.jpg', alt: 'Shower door design Miami', category: 'frameless' },
    { src: '50223945_2214197725500641_1002798658011267072_n.jpg', alt: 'Bathroom glass solution', category: 'semi-frameless' },
    { src: '50539848_2214197685500645_3559042946391080960_n.jpg', alt: 'Elegant shower enclosure', category: 'frameless' },
    { src: '68455081_2357523677834711_528273001653731328_n.jpg', alt: 'Custom frameless shower Miami', category: 'frameless' },
    { src: '59872695_2285842405002839_3678193740138151936_n.jpg', alt: 'Glass partition installation', category: 'commercial' },
    { src: '499228673_4010932042493858_6912110525183246754_n.jpg', alt: 'Premium shower doors Miami', category: 'frameless' },
    { src: '73304035_2415493158704429_2475792069092704256_n.jpg', alt: 'Frameless glass shower Kendall', category: 'frameless' },
    { src: '56816025_2265529817034098_4201502077425287168_n.jpg', alt: 'Walk-in shower design', category: 'walk-in' },
    { src: '500286933_1275750454553867_1567319370097498933_n.jpg', alt: 'Custom shower enclosure Miami', category: 'frameless' },
    { src: '490300363_3970469726540090_8664455822662189378_n.jpg', alt: 'Professional glass installation', category: 'frameless' },
    { src: '498682584_4010932035827192_5540031081643747321_n.jpg', alt: 'Frameless bathroom door', category: 'frameless' },
    { src: '500200850_1275748704554042_3472413797938586010_n.jpg', alt: 'Luxury shower enclosure Miami', category: 'frameless' },
    { src: '500257811_1275749841220595_20195216482106241_n.jpg', alt: 'Custom glass shower Brickell', category: 'frameless' },
    { src: '492408018_1250779803717599_735806355006297274_n.jpg', alt: 'Semi-frameless enclosure Miami', category: 'semi-frameless' },
    { src: '491984406_1243027317826181_7381695067973635338_n.jpg', alt: 'Walk-in shower installation', category: 'walk-in' },
    { src: '42139070_2138471243073290_7205424546667560960_n.jpg', alt: 'Frameless shower door installation', category: 'frameless' },
    { src: '508685465_1295135645948681_528981582150107870_n.jpg', alt: 'Commercial glass solution Miami', category: 'commercial' },
    { src: '495566098_4002449873342075_245622247702396314_n.jpg', alt: 'Custom frameless shower', category: 'frameless' },
    { src: '69286150_2367169440203468_7682818433724973056_n.jpg', alt: 'Bathroom glass partition', category: 'commercial' },
    { src: '489033719_1234081372054109_8679939838675222042_n.jpg', alt: 'Premium shower doors installation', category: 'frameless' },
    { src: '132008120_2778500805736994_6824193911000866591_n.jpg', alt: 'Frameless glass enclosure', category: 'frameless' },
    { src: '36668734_2070934203160328_4810007417515409408_n.jpg', alt: 'Custom shower glass Miami', category: 'frameless' },
    { src: '490380081_3970470173206712_2786898035193504931_n.jpg', alt: 'Walk-in enclosure design', category: 'walk-in' },
    { src: '52807458_2242359639351116_7873624327239761920_n.jpg', alt: 'Semi-frameless shower door', category: 'semi-frameless' },
    { src: '508415836_1295910482537864_7672495380146623795_n.jpg', alt: 'Premium frameless shower installation', category: 'frameless' },
    { src: '490589197_3970468879873508_6640168906121104071_n.jpg', alt: 'Custom glass shower Miami', category: 'frameless' },
    { src: '490267429_1234081395387440_9080005900110235703_n.jpg', alt: 'Frameless shower enclosure', category: 'frameless' },
    { src: '489843895_3970470156540047_627281491271937143_n.jpg', alt: 'Walk-in shower glass Miami', category: 'walk-in' },
    { src: '500764468_4020414638212265_3549904183990682494_n.jpg', alt: 'Commercial shower installation', category: 'commercial' },
    { src: '69853867_2367169283536817_7026322391789731840_n.jpg', alt: 'Glass partition design', category: 'commercial' },
    { src: '53207599_2242359616017785_1712430287280930816_n.jpg', alt: 'Frameless shower doors Doral', category: 'frameless' },
    { src: '302427694_514855500643370_9219416836488174960_n.jpg', alt: 'Premium glass enclosure', category: 'frameless' },
    { src: '75237440_2415493188704426_6262099782567723008_n.jpg', alt: 'Custom shower installation Miami', category: 'frameless' },
    { src: '490934567_1243027241159522_9181844223015985341_n.jpg', alt: 'Walk-in shower design Miami', category: 'walk-in' },
    { src: '72469791_2398147343772344_3815396801121353728_n.jpg', alt: 'Semi-frameless enclosure installation', category: 'semi-frameless' },
    { src: '56811302_2267081340212279_9158789369539067904_n.jpg', alt: 'Frameless bathroom glass door', category: 'frameless' },
    { src: '492695649_1250779897050923_2375304519241288864_n.jpg', alt: 'Commercial glass installation Miami', category: 'commercial' },
    { src: '57023996_2265529650367448_2510904066687631360_n.jpg', alt: 'Custom frameless shower Miami', category: 'frameless' },
    { src: '55793540_2261890467398033_1494699480010719232_n (1).jpg', alt: 'Frameless shower installation', category: 'frameless' },
    { src: '499986422_1275747354554177_5898756840309578452_n.jpg', alt: 'Premium shower doors Miami', category: 'frameless' },
    { src: '56711114_2265529800367433_2643881721665159168_n.jpg', alt: 'Walk-in shower glass installation', category: 'walk-in' },
    { src: '41968663_2138471613073253_5737276769229078528_n.jpg', alt: 'Glass shower door design', category: 'frameless' },
    { src: '489968766_3970469946540068_608912871683195848_n.jpg', alt: 'Frameless enclosure Miami', category: 'frameless' },
    { src: '59521617_2281836085403471_3287528613020172288_n.jpg', alt: 'Semi-frameless glass partition', category: 'semi-frameless' },
    { src: '492556558_9464004067028638_6034759634657359797_n.jpg', alt: 'Commercial glass solution', category: 'commercial' },
  ];

  const filteredImages = selectedFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === selectedFilter);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Frameless', value: 'frameless' },
    { label: 'Semi-Frameless', value: 'semi-frameless' },
    { label: 'Walk-In', value: 'walk-in' },
    { label: 'Commercial', value: 'commercial' },
  ];

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-light tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
            Gallery of Excellence
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            Explore our portfolio of premium shower doors and glass installations across Miami.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === filter.value
                  ? 'bg-gold text-dark'
                  : 'bg-primary/20 text-text border border-accent/20 hover:border-accent/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(index)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={`/fotos/${image.src}`}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-light text-sm font-light">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex flex-col items-center mt-10 gap-2">
            <p className="text-text text-sm">
              Showing {visibleImages.length} of {filteredImages.length} photos
            </p>
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary/20 border border-accent/30 text-accent hover:border-accent/60 hover:bg-primary/30 transition-all duration-300 font-semibold"
            >
              <Plus size={18} />
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-light hover:text-accent transition-colors"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={`/fotos/${filteredImages[selectedImage].src}`}
              alt={filteredImages[selectedImage].alt}
              sizes="(max-width: 1024px) 100vw, 80vw"
              fill
              className="object-contain"
              quality={95}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light hover:text-accent transition-colors bg-dark/50 p-3 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-light hover:text-accent transition-colors bg-dark/50 p-3 rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-light bg-dark/50 px-4 py-2 rounded-full text-sm">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
