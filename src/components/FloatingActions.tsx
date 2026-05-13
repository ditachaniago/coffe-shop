import React, { useState } from 'react';
import { Phone, MessageCircle, Send, X, Coffee, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  darkMode: boolean;
  isChatOpen: boolean;
  setIsChatOpen: (val: boolean) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ 
  darkMode, 
  isChatOpen, 
  setIsChatOpen 
}) => {
  const [messages, setMessages] = useState([
    { sender: 'admin', text: 'Welcome to Aetheria Coffee & Lounge! How can our barista concierge assist you today?', time: 'Just now' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { sender: 'user', text: inputText, time: 'Just now' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const adminReply = { 
        sender: 'admin', 
        text: 'Thank you for reaching out! Our head concierge is currently reviewing your inquiry and will reply shortly. For immediate table reservation, please use our Booking Form above.', 
        time: 'Just now' 
      };
      setMessages(prev => [...prev, adminReply]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Phone Call Floating Button */}
        <a 
          href="tel:+62215558899"
          title="Direct Phone Call to Aetheria"
          className="w-12 h-12 rounded-full bg-[#c26d53] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/6281234567890?text=Halo%20Aetheria%20Concierge,%20saya%20ingin%20bertanya%20tentang%20reservasi"
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp Concierge"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300 group"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>

        {/* Live Chat Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          title="Live Chat with Concierge"
          className="w-12 h-12 rounded-full bg-[#c8a272] text-[#12100e] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 font-bold"
        >
          {isChatOpen ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
        </button>

      </div>

      {/* Admin Live Chat Modal / Drawer */}
      {isChatOpen && (
        <div className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-32px)] z-50 rounded-3xl overflow-hidden shadow-2xl border transition-all animate-fade-in ${
          darkMode ? 'bg-[#15110f] border-white/20 text-white' : 'bg-white border-black/10 text-gray-900'
        }`}>
          
          {/* Chat Header */}
          <div className="p-4 bg-[#c8a272] text-[#12100e] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#12100e] text-[#c8a272] flex items-center justify-center">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Aetheria Concierge</h4>
                <div className="text-[10px] flex items-center gap-1 font-sans opacity-80">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                  <span>Online & Ready</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-black/10 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className={`p-4 h-72 overflow-y-auto space-y-4 font-sans text-xs ${
            darkMode ? 'bg-black/20' : 'bg-gray-50'
          }`}>
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                  m.sender === 'user' 
                    ? 'bg-[#c8a272] text-[#12100e] rounded-br-none font-medium' 
                    : darkMode 
                      ? 'bg-white/10 text-white rounded-bl-none' 
                      : 'bg-white border text-gray-900 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
                <div className="text-[9px] opacity-50 mt-1 px-1">{m.time}</div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-current/10 flex items-center gap-2">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about menu, VIP tables, or dress code..."
              className={`flex-1 px-4 py-2.5 rounded-xl border text-xs outline-none focus:ring-1 focus:ring-[#c8a272] ${
                darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-100 border-transparent text-gray-900'
              }`}
            />
            <button 
              type="submit" 
              className="p-2.5 rounded-xl bg-[#c8a272] text-[#12100e] hover:bg-white transition-colors flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
