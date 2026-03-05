import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Interactive carousel component with smooth transitions and professional styling
 */

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({ items, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full bg-black overflow-hidden group">
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px]">
        {/* Carousel Items */}
        <div className="relative w-full h-full">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#1a1a1a] border border-[#333333]" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-start z-20 p-8 md:p-16">
                <div className="max-w-2xl space-y-6 animate-slide-up">
                  <div className="inline-block">
                    <span className="text-xs font-bold tracking-widest uppercase px-4 py-2 bg-[#d12e56] text-white">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="heading-xl text-white">{item.title}</h2>
                  <p className="body-lg text-[#999999] max-w-xl">{item.description}</p>
                  <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#d12e56]/80 hover:bg-[#d12e56] text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover-scale"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#d12e56]/80 hover:bg-[#d12e56] text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover-scale"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators/Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#d12e56] w-8 h-2"
                : "bg-white/30 hover:bg-white/60 w-2 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-30 text-xs font-bold tracking-widest uppercase px-4 py-2 border border-[#d12e56] text-[#d12e56] hover:bg-[#d12e56] hover:text-white transition-smooth"
      >
        {isAutoPlaying ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
}
