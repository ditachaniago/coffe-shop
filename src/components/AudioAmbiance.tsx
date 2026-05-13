import React from 'react';
import { Disc, Music } from 'lucide-react';

interface AudioAmbianceProps {
  darkMode: boolean;
  audioPlaying: boolean;
  setAudioPlaying: (val: boolean) => void;
}

export const AudioAmbiance: React.FC<AudioAmbianceProps> = ({ 
  darkMode, 
  audioPlaying, 
  setAudioPlaying 
}) => {
  return (
    <div className={`fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 p-3 rounded-full backdrop-blur-md border shadow-xl transition-all duration-500 ${
      darkMode ? 'bg-[#12100e]/80 border-white/10 text-white' : 'bg-white/90 border-black/10 text-gray-900 shadow-black/5'
    }`}>
      <button 
        onClick={() => setAudioPlaying(!audioPlaying)}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
          audioPlaying ? 'bg-[#c8a272] text-[#12100e] animate-spin duration-3000' : 'bg-gray-700/20 text-current'
        }`}
      >
        <Disc className="w-5 h-5" />
      </button>

      <div className="flex flex-col pr-3">
        <div className="flex items-center gap-1.5">
          <Music className="w-3 h-3 text-[#c8a272]" />
          <span className="font-serif text-xs font-bold tracking-wider">Aetheria Lo-Fi Jazz</span>
        </div>
        <span className="text-[9px] font-sans opacity-70">
          {audioPlaying ? 'Now playing • Tokyo Slow Roastery Vibe' : 'Music paused • Click to play'}
        </span>
      </div>

      {audioPlaying && (
        <div className="flex items-end gap-0.5 h-4 pr-1">
          <div className="w-1 bg-[#c8a272] h-2 animate-pulse" />
          <div className="w-1 bg-[#c8a272] h-4 animate-pulse delay-75" />
          <div className="w-1 bg-[#c8a272] h-3 animate-pulse delay-150" />
        </div>
      )}
    </div>
  );
};
