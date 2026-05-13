import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/coffeeData';
import { Star, Coffee, Sparkles, X, Plus } from 'lucide-react';

interface MenuSectionProps {
  darkMode: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'non-coffee' | 'pastry' | 'signature'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'coffee', label: 'Artisan Coffee' },
    { id: 'non-coffee', label: 'Non-Coffee & Matcha' },
    { id: 'pastry', label: 'Pastries & Desserts' },
    { id: 'signature', label: 'Signature Mocktails' }
  ];

  return (
    <section id="menu" className={`py-24 px-6 ${darkMode ? 'bg-[#12100e]' : 'bg-[#f4eee1]'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a272]/10 border border-[#c8a272]/30 text-[#c8a272] text-xs font-sans tracking-[0.2em] uppercase mb-4">
            <Coffee className="w-3.5 h-3.5" />
            <span>Exquisite Selection</span>
          </div>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Curated <span className="text-[#c8a272] italic">Masterpieces</span>
          </h2>
          <p className={`font-sans text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-light`}>
            Every cup and plate is meticulously engineered by award-winning baristas and pastry chefs. Explore our seasonal menu.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#c8a272] text-[#12100e] shadow-lg shadow-[#c8a272]/20 scale-105 font-bold'
                  : darkMode
                    ? 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    : 'bg-black/5 text-gray-700 hover:bg-black/10 border border-black/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border shadow-xl ${
                darkMode 
                  ? 'bg-[#1e1512]/60 border-white/10 hover:border-[#c8a272]/50 hover:shadow-black/50' 
                  : 'bg-white/80 border-black/5 hover:border-[#c8a272]/50 hover:shadow-black/10'
              }`}
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1 text-white text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 text-[#c8a272] fill-[#c8a272]" />
                  <span>{item.rating}</span>
                </div>

                {/* Price tag */}
                <div className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-[#c8a272] text-[#12100e] font-sans font-bold text-sm tracking-wide shadow-md">
                  {item.price}
                </div>

                {/* Steam effect for hot drinks */}
                {item.category === 'coffee' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-6 h-12 bg-white/20 blur-md rounded-full animate-steam" />
                  </div>
                )}
              </div>

              {/* Content Box */}
              <div className="p-6">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded ${
                        darkMode ? 'bg-white/10 text-[#c8a272]' : 'bg-[#c8a272]/20 text-[#1e1512]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`font-serif text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#c8a272] ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.name}
                </h3>

                <p className={`font-sans text-sm line-clamp-2 mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-current/10">
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-bold text-[#c8a272] hover:text-white transition-colors"
                  >
                    <span>View Details</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>

                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Aetheria,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-widest font-semibold border border-[#c8a272] text-[#c8a272] hover:bg-[#c8a272] hover:text-[#12100e] transition-colors"
                  >
                    Order Now
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className={`relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border ${
            darkMode ? 'bg-[#1e1512] border-white/20 text-white' : 'bg-[#f4eee1] border-black/10 text-gray-900'
          }`}>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-[#c8a272] fill-[#c8a272]" />
                    <span className="font-bold text-sm">{selectedItem.rating} / 5.0</span>
                    <span className="text-gray-500 text-xs">(Verified Taste)</span>
                  </div>
                  <h4 className="font-serif text-3xl font-bold mb-2">{selectedItem.name}</h4>
                  <div className="text-xl font-sans font-bold text-[#c8a272] mb-4">{selectedItem.price}</div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded bg-[#c8a272]/20 text-[#c8a272] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-sans text-sm leading-relaxed opacity-90 mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div className="p-4 rounded-xl bg-black/20 border border-white/10 mb-6 text-xs text-gray-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c8a272] shrink-0" />
                    <span>Best enjoyed fresh at 65°C or poured over premium crystal ice.</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Aetheria,%20saya%20ingin%20memesan%20${encodeURIComponent(selectedItem.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-center text-xs uppercase tracking-widest font-bold bg-[#c8a272] text-[#12100e] hover:bg-white transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
