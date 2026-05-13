import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialSection } from './components/TestimonialSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AudioAmbiance } from './components/AudioAmbiance';

export function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${
      darkMode ? 'bg-[#0b0a0a] text-[#f7f5f0]' : 'bg-[#f4eee1] text-[#12100e]'
    }`}>
      
      {/* Background Cinematic Aura */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#c8a272]/5 via-[#c26d53]/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#8f9779]/5 via-[#c8a272]/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          audioPlaying={audioPlaying} 
          setAudioPlaying={setAudioPlaying}
          onOpenChat={() => setIsChatOpen(true)}
        />

        <Hero darkMode={darkMode} />
        
        <MenuSection darkMode={darkMode} />

        <ReservationSection darkMode={darkMode} />

        <GallerySection darkMode={darkMode} />

        <TestimonialSection darkMode={darkMode} />

        <LocationSection darkMode={darkMode} />

        <Footer darkMode={darkMode} />

        <FloatingActions 
          darkMode={darkMode} 
          isChatOpen={isChatOpen} 
          setIsChatOpen={setIsChatOpen} 
        />

        <AudioAmbiance 
          darkMode={darkMode} 
          audioPlaying={audioPlaying} 
          setAudioPlaying={setAudioPlaying} 
        />
      </div>

    </div>
  );
}

export default App;
