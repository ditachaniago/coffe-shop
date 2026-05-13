import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/coffeeData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialSectionProps {
  darkMode: boolean;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${darkMode ? 'bg-[#15110f]' : 'bg-[#e6dec9]/20'} transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a272]/10 border border-[#c8a272]/30 text-[#c8a272] text-xs font-sans tracking-[0.2em] uppercase mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>High-End Reputation</span>
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Voices of <span className="text-[#c8a272] italic">Connoisseurs</span>
          </h2>
        </div>

        {/* Testimonial Showcase Box */}
        <div className={`relative p-8 md:p-16 rounded-3xl backdrop-blur-2xl border shadow-2xl transition-all duration-500 ${
          darkMode ? 'bg-[#12100e]/80 border-white/10 text-white shadow-black/50' : 'bg-white/90 border-black/10 text-gray-900 shadow-black/5'
        }`}>
          
          <div className="absolute top-8 right-8 text-[#c8a272]/20">
            <Quote className="w-20 h-20" />
          </div>

          <div className="min-h-[200px] flex flex-col justify-between relative z-10">
            
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#c8a272] fill-[#c8a272] animate-pulse" />
              ))}
            </div>

            {/* Comment */}
            <blockquote className="font-serif text-xl md:text-3xl italic font-light leading-relaxed mb-8">
              "{current.comment}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-current/10">
              <div className="flex items-center gap-4">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#c8a272]"
                />
                <div>
                  <h4 className="font-sans font-bold text-lg">{current.name}</h4>
                  <div className="text-xs text-[#c8a272] tracking-wider uppercase">{current.role}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 font-mono">{current.date}</div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center hover:bg-[#c8a272] hover:text-[#12100e] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center hover:bg-[#c8a272] hover:text-[#12100e] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-[#c8a272] w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
