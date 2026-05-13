import React from 'react';
import { ArrowRight, Calendar, Sparkles, Coffee } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinematic Coffee Roastery" 
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-10000"
        />
      </div>

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-[#c8a272]/40 blur-[1px] animate-float" />
        <div className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-white/30 blur-[2px] animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full bg-[#c26d53]/40 blur-[2px] animate-float" />
        <div className="absolute top-3/4 right-1/5 w-2.5 h-2.5 rounded-full bg-[#c8a272]/60 animate-float-slow" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#c8a272] text-xs font-sans tracking-[0.25em] uppercase mb-8 animate-fade-in shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>International Luxury Roastery & Lounge</span>
        </div>

        {/* Large Title & Slogan */}
        <h1 className="font-serif text-3xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.1] mb-6 drop-shadow-2xl">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8a272] via-[#e6dec9] to-[#c26d53] italic">Artisan Craft</span> Meets Exquisite Comfort.
        </h1>

        {/* Slogan Subtext */}
        <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-12 leading-relaxed tracking-wide">
          Experience the pinnacle of specialty coffee culture. Cinematic ambiance, world-class single origins, and artisanal culinary masterworks designed for the modern connoisseur.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a 
            href="#reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#c8a272] text-[#12100e] hover:bg-white transition-all duration-300 font-sans text-sm uppercase tracking-widest font-bold shadow-xl hover:shadow-[#c8a272]/30 hover:scale-105 group"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Book Table</span>
          </a>

          <a 
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all duration-300 font-sans text-sm uppercase tracking-widest font-bold shadow-xl hover:scale-105 group"
          >
            <Coffee className="w-4 h-4 text-[#c8a272]" />
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-20 pt-10 border-t border-white/10 w-full text-left">
          <div>
            <div className="font-serif text-2xl md:text-3xl text-[#c8a272] font-bold">98+</div>
            <div className="text-xs font-sans tracking-wider uppercase text-gray-400 mt-1">Q-Grader Score</div>
          </div>
          <div>
            <div className="font-serif text-2xl md:text-3xl text-[#c8a272] font-bold">14 hrs</div>
            <div className="text-xs font-sans tracking-wider uppercase text-gray-400 mt-1">Kyoto Cold Drip</div>
          </div>
          <div>
            <div className="font-serif text-2xl md:text-3xl text-[#c8a272] font-bold">100%</div>
            <div className="text-xs font-sans tracking-wider uppercase text-gray-400 mt-1">Arabica Specialty</div>
          </div>
          <div>
            <div className="font-serif text-2xl md:text-3xl text-[#c8a272] font-bold">24k</div>
            <div className="text-xs font-sans tracking-wider uppercase text-gray-400 mt-1">Gold Crema Infusion</div>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Wave/Fading */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${darkMode ? 'from-[#12100e]' : 'from-[#f4eee1]'} to-transparent pointer-events-none z-10`} />
    </section>
  );
};
