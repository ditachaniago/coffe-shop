import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/coffeeData';
import { Camera, ZoomIn, X } from 'lucide-react';

interface GallerySectionProps {
  darkMode: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ darkMode }) => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className={`py-24 px-6 ${darkMode ? 'bg-[#12100e]' : 'bg-[#f4eee1]'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a272]/10 border border-[#c8a272]/30 text-[#c8a272] text-xs font-sans tracking-[0.2em] uppercase mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Cinematic Moments</span>
            </div>
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Instagram <span className="text-[#c8a272] italic">Aesthetic</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className={`font-sans text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-light leading-relaxed`}>
              Tag us <span className="text-[#c8a272] font-semibold">@aetheria.coffee</span> to get featured on our live curation wall. Every corner is meticulously crafted for your creative lens.
            </p>
          </div>
        </div>

        {/* Masonry / Grid Modern Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-900 shadow-xl transition-all duration-700 hover:shadow-2xl ${
                index === 0 || index === 3 ? 'sm:col-span-2 lg:col-span-2 h-[380px]' : 'h-[380px]'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <span className="text-xs uppercase tracking-widest text-[#c8a272] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-300 font-sans">
                  <ZoomIn className="w-3.5 h-3.5 text-[#c8a272]" />
                  <span>Click to expand cinematic view</span>
                </div>
              </div>

              {/* Permanent Category Tag */}
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in cursor-zoom-out"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center">
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxItem(null); }}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={lightboxItem.image} 
              alt={lightboxItem.title} 
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="w-full p-6 bg-[#12100e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
              <div>
                <div className="text-xs text-[#c8a272] tracking-[0.2em] uppercase font-bold">{lightboxItem.category}</div>
                <h3 className="font-serif text-2xl font-bold text-white">{lightboxItem.title}</h3>
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c8a272] text-[#12100e] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                <Camera className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
