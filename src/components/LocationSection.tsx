import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

interface LocationSectionProps {
  darkMode: boolean;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-24 px-6 ${darkMode ? 'bg-[#12100e]' : 'bg-[#f4eee1]'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a272]/10 border border-[#c8a272]/30 text-[#c8a272] text-xs font-sans tracking-[0.2em] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Strategic Location</span>
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Visit Our <span className="text-[#c8a272] italic">Sanctuary</span>
          </h2>
          <p className={`font-sans text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-light`}>
            Located in the premier lifestyle district. Come for the world-class specialty coffee, stay for the cinematic atmosphere.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details Card */}
          <div className={`lg:col-span-5 p-8 md:p-12 rounded-3xl border flex flex-col justify-between shadow-xl ${
            darkMode ? 'bg-[#1e1512]/60 border-white/10 text-white' : 'bg-white/80 border-black/5 text-gray-900'
          }`}>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-4">Aetheria Roastery Flagship</h3>
                <p className={`font-sans text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Jl. Senopati Boulevard No. 88, Kebayoran Baru, Jakarta Selatan 12190
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-current/10 font-sans text-sm">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c8a272]/20 flex items-center justify-center text-[#c8a272] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-[#c8a272]">Opening Hours</div>
                    <div className="mt-1 font-medium">Mon - Thu: 07:00 AM - 10:00 PM</div>
                    <div className="mt-0.5 font-medium">Fri - Sun: 07:00 AM - Midnight</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c8a272]/20 flex items-center justify-center text-[#c8a272] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-[#c8a272]">Direct Concierge</div>
                    <div className="mt-1 font-medium">+62 21 555 8899</div>
                    <div className="mt-0.5 text-xs opacity-70">Available 24/7 for VIP bookings</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c8a272]/20 flex items-center justify-center text-[#c8a272] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-[#c8a272]">Business & Events</div>
                    <div className="mt-1 font-medium">concierge@aetheria.coffee</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-current/10">
              <a 
                href="https://maps.google.com/?q=Senopati+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#c8a272] text-[#12100e] font-sans uppercase text-xs tracking-widest font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>

          </div>

          {/* Embedded Map Visual */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[400px]">
            {/* Elegant Map Simulation / Embed */}
            <iframe 
              title="Aetheria Coffee Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2721867181313!2d106.8060388152504!3d-6.227797995491749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f150531c3835%3A0x6a1005186b51eb53!2sSenopati%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid" 
              className="w-full h-full border-0 absolute inset-0 filter contrast-125 saturate-50"
              loading="lazy"
              allowFullScreen={false}
            />
            {/* Dark mode overlay tint */}
            {darkMode && (
              <div className="absolute inset-0 bg-[#12100e]/30 pointer-events-none" />
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
