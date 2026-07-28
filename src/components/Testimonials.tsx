import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentIndex]);

  return (
    <section id="testimonials" className="py-24 relative bg-[#050814] overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching video typography */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            Testimonials
          </h2>
          <p className="mt-2 font-syne text-lg sm:text-xl font-bold text-slate-300 tracking-wide">
            Student Testimonials
          </p>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
        </div>

        {/* Testimonials Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Cards Grid / Slider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const itemIndex = (currentIndex + offset) % TESTIMONIALS.length;
              const item = TESTIMONIALS[itemIndex];
              const isCenter = offset === 1;

              return (
                <div
                  key={`${item.id}-${offset}`}
                  className={`relative p-8 rounded-2xl bg-[#0a0e1a] border transition-all duration-500 flex flex-col justify-between ${
                    isCenter
                      ? 'border-emerald-400/60 bg-[#0c1222] shadow-[0_0_25px_rgba(52,211,153,0.15)] md:-translate-y-2'
                      : 'border-slate-800/80 opacity-90'
                  }`}
                >
                  {/* Top Quote Icon in Emerald Green */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-serif text-5xl font-extrabold text-emerald-400 select-none leading-none opacity-80">
                      “
                    </span>
                    <span className="text-[11px] font-orbitron font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {item.branch}
                    </span>
                  </div>

                  {/* Quote Body Text */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-8 flex-1">
                    "{item.quote}"
                  </p>

                  {/* Footer Name & Branch */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-orbitron text-sm font-bold text-white tracking-wider uppercase">
                        {item.name}
                      </h4>
                      <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                        {item.branch} Student
                      </p>
                    </div>

                    {/* Bottom right quote icon matching video */}
                    <span className="font-serif text-4xl font-extrabold text-emerald-400/40 select-none leading-none">
                      ”
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/10 transition-all shadow-lg"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                      : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/10 transition-all shadow-lg"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
