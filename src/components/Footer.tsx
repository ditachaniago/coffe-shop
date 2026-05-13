import React, { useState } from 'react';
import { Coffee, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={`pt-20 pb-12 px-6 border-t ${
      darkMode ? 'bg-[#0b0a0a] border-white/10 text-white' : 'bg-[#e6dec9]/40 border-black/10 text-gray-900'
    } transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-current/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c8a272] flex items-center justify-center text-[#12100e]">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-widest font-bold uppercase">AETHERIA</span>
                <span className="text-[10px] tracking-[0.25em] text-[#c8a272] uppercase -mt-1 font-sans">Coffee & Lounge</span>
              </div>
            </div>

            <p className={`font-sans text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Redefining luxury coffee roastery and cinematic lifestyle lounges. Handcrafted by master baristas, designed for international connoisseurs.
            </p>

            <div className="flex items-center gap-4 text-xs tracking-wider font-mono text-[#c8a272]">
              <span>TOKYO</span> • <span>SEOUL</span> • <span>NEW YORK</span> • <span>JAKARTA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4 font-sans">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c8a272]">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-[#c8a272] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#c8a272] transition-colors">Menu Selection</a></li>
              <li><a href="#reservation" className="hover:text-[#c8a272] transition-colors">Table Booking</a></li>
              <li><a href="#gallery" className="hover:text-[#c8a272] transition-colors">Cinematic Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#c8a272] transition-colors">Strategic Location</a></li>
            </ul>
          </div>

          {/* Opening Info */}
          <div className="lg:col-span-3 space-y-4 font-sans">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c8a272]">Concierge Hours</h4>
            <div className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>
                <span className="font-bold">Mon - Thu:</span> 07:00 AM - 10:00 PM
              </div>
              <div>
                <span className="font-bold">Fri - Sun:</span> 07:00 AM - Midnight
              </div>
              <div>
                <span className="font-bold">Live Jazz Sessions:</span> Every Fri & Sat night
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-4 font-sans">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c8a272]">Newsletter</h4>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Subscribe to receive exclusive invitations to private coffee cuppings and seasonal dessert launches.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full pl-4 pr-12 py-3 rounded-xl border text-xs outline-none focus:ring-2 focus:ring-[#c8a272] ${
                    darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-black/10 text-gray-900'
                  }`}
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-[#c8a272] text-[#12100e] hover:bg-white transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-[#c8a272]/20 border border-[#c8a272]/30 text-[#c8a272] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed successfully! Welcome to the inner circle.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs opacity-60">
          <div>
            © {new Date().getFullYear()} AETHERIA Coffee Roasters & Lounge. All rights reserved.
          </div>
          <div className="flex items-center gap-6 tracking-wider">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
            <span>ACCESSIBILITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
