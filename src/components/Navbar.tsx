import React, { useState, useEffect } from 'react';
import { Coffee, Moon, Sun, Volume2, VolumeX, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  audioPlaying: boolean;
  setAudioPlaying: (val: boolean) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  audioPlaying,
  setAudioPlaying,
  onOpenChat
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? darkMode 
            ? 'bg-[#12100e]/80 backdrop-blur-md py-4 border-b border-white/10 shadow-xl shadow-black/20' 
            : 'bg-[#f4eee1]/90 backdrop-blur-md py-4 border-b border-black/10 shadow-lg shadow-black/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#c8a272] flex items-center justify-center text-[#12100e] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105 shadow-md shadow-[#c8a272]/30">
            <Coffee className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-widest font-bold uppercase transition-colors duration-300">
              AETHERIA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#c8a272] uppercase -mt-1 font-sans">
              Coffee & Lounge
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wider uppercase font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`relative py-1 overflow-hidden group transition-colors duration-300 hover:text-[#c8a272] ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c8a272] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
            </a>
          ))}
          <button 
            onClick={onOpenChat}
            className="flex items-center gap-1.5 text-xs text-[#c8a272] hover:text-white transition-colors py-1 px-3 rounded-full border border-[#c8a272]/50 hover:border-[#c8a272] hover:bg-[#c8a272]/10"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Admin</span>
          </button>
        </nav>

        {/* Utilities & CTA */}
        <div className="flex items-center gap-4">
          
          {/* Audio Ambience Toggle */}
          <button 
            onClick={() => setAudioPlaying(!audioPlaying)}
            title={audioPlaying ? "Mute Cafe Ambience" : "Play Cafe Ambience"}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
              audioPlaying 
                ? 'bg-[#c8a272] text-[#12100e] border-[#c8a272] shadow-md shadow-[#c8a272]/20' 
                : darkMode 
                  ? 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10' 
                  : 'bg-black/5 text-gray-700 border-black/10 hover:bg-black/10'
            }`}
          >
            {audioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Luxury Dark/Light Mode"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
              darkMode 
                ? 'bg-white/5 text-[#c8a272] border-white/10 hover:bg-white/10' 
                : 'bg-black/5 text-[#c26d53] border-black/10 hover:bg-black/10'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Book Table CTA Button (Desktop) */}
          <a 
            href="#reservation"
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#c8a272] text-[#12100e] hover:bg-white hover:text-[#12100e] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Table
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center border ${
              darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-b transition-all duration-300 shadow-2xl ${
          darkMode ? 'bg-[#12100e]/95 border-white/10 text-white' : 'bg-[#f4eee1]/95 border-black/10 text-gray-900'
        } backdrop-blur-xl px-6 py-8 flex flex-col gap-6`}>
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg py-2 hover:text-[#c8a272] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenChat(); }}
              className="font-serif text-lg py-2 text-[#c8a272] hover:text-white transition-colors"
            >
              Chat Admin
            </button>
          </nav>
          <div className="pt-4 border-t border-current/10 flex flex-col gap-3">
            <a 
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-[#c8a272] text-[#12100e] shadow-lg"
            >
              Book Table
            </a>
            <a 
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-center text-xs uppercase tracking-widest font-bold border border-[#c8a272] text-[#c8a272]"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
