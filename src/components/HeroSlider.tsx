'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    src: '/images/hero/1.jpg',
    heading: 'Premium Indian Spices',
    sub: 'Fresh, Authentic & Aromatic',
  },
  {
    src: '/images/hero/Furniture.webp',
    heading: 'Handcrafted Furniture',
    sub: 'Elegant Designs & Export Quality',
  },
  {
    src: '/images/hero/3.jpg',
    heading: 'Stylish Garments',
    sub: 'Fashionable and Comfortable',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideCount = slides.length;

  // Autoplay
  useEffect(() => {
    const nextSlide = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slideCount);
        setIsTransitioning(false);
      }, 600);
    };

    timeoutRef.current = setTimeout(nextSlide, 4000000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, slideCount]);

  const pauseAutoplay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const resumeAutoplay = () => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slideCount);
        setIsTransitioning(false);
      }, 600);
    }, 4000);
  };

  const goTo = (idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 600);
  };

  const prev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + slideCount) % slideCount);
      setIsTransitioning(false);
    }, 600);
  };

  const next = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % slideCount);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section
      className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[600px]"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onTouchStart={pauseAutoplay}
      onTouchEnd={resumeAutoplay}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 flex transition-all duration-700 ease-in-out
            ${idx === current && !isTransitioning ? 'opacity-100 scale-100 z-10' : ''}
            ${idx === current && isTransitioning ? 'opacity-0 scale-95 z-10' : ''}
            ${idx !== current ? 'opacity-0 scale-95 z-0 pointer-events-none' : ''}
          `}
          aria-hidden={idx !== current}
        >
          <img
            src={slide.src}
            alt={slide.heading}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-8 md:px-16">
          <div className="bg-black/30 sm:bg-black/50 p-2 sm:p-6 rounded text-white max-w-xs sm:max-w-xl">
              <h2 className="text-lg sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3">
                {slide.heading}
              </h2>
              <p className="text-xs sm:text-lg">{slide.sub}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4 shadow-lg transition z-20"
        aria-label="Previous Slide"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <span className="text-2xl sm:text-3xl">&#8592;</span>
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4 shadow-lg transition z-20"
        aria-label="Next Slide"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <span className="text-2xl sm:text-3xl">&#8594;</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border border-white ${
              idx === current ? 'bg-blue-700' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          60% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          section {
            aspect-ratio: 16/10;
            max-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
