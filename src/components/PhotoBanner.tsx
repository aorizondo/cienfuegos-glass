'use client';

import { allImages } from './Gallery';

// Pick a subset of visually diverse images for the auto-scroll banner
const bannerImages = allImages.slice(0, 20);

const PhotoBanner = () => {
  return (
    <section className="py-4 bg-dark overflow-hidden" aria-label="Featured project photos">
      {/* First row — scrolls left */}
      <div className="relative mb-3">
        <div className="flex gap-3 animate-scroll-left">
          {[...bannerImages, ...bannerImages].map((img, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-lg overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/fotos/thumb/${img.src}.webp`}
                alt={img.alt}
                loading={i < 10 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row — scrolls right */}
      <div className="relative">
        <div className="flex gap-3 animate-scroll-right">
          {[...bannerImages.slice(10), ...bannerImages.slice(10)].map((img, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-lg overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/fotos/thumb/${img.src}.webp`}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoBanner;
