import React, { useState } from 'react';
import { Calendar, Users, Clock, Phone, User, CheckCircle2, Sparkles, Coffee } from 'lucide-react';

interface ReservationSectionProps {
  darkMode: boolean;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      guests: '2',
      date: '',
      time: '19:00',
      notes: ''
    });
  };

  return (
    <section id="reservation" className={`relative py-24 px-6 overflow-hidden ${darkMode ? 'bg-[#181311]' : 'bg-[#e6dec9]/40'} transition-colors duration-500`}>
      
      {/* Decorative Coffee Beans Floating */}
      <div className="absolute top-12 left-10 w-24 h-24 rounded-full bg-[#c8a272]/10 blur-xl pointer-events-none animate-float" />
      <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-[#c26d53]/10 blur-2xl pointer-events-none animate-float-slow" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a272]/10 border border-[#c8a272]/30 text-[#c8a272] text-xs font-sans tracking-[0.2em] uppercase mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Realtime Booking</span>
            </div>
            
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Reserve Your <span className="text-[#c8a272] italic">Experience</span>
            </h2>

            <p className={`font-sans text-base md:text-lg mb-8 leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Whether it’s an intimate anniversary, a high-stakes startup meeting, or a tranquil solo retreat with premium Japanese pour-over, secure your table in advance.
            </p>

            {/* Premium Perks */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8a272]/20 flex items-center justify-center text-[#c8a272] shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-serif text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Cinematic Lighting & Seating</h4>
                  <p className={`font-sans text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hand-selected interior layout optimized for comfort and visual aesthetics.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8a272]/20 flex items-center justify-center text-[#c8a272] shrink-0 mt-1">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-serif text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Exclusive Welcome Amuse-Bouche</h4>
                  <p className={`font-sans text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Complimentary mini Cascara Fizz palate cleanser for all reserved guests.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-xl border shadow-2xl relative ${
              darkMode ? 'bg-[#12100e]/80 border-white/10 text-white' : 'bg-white/90 border-black/10 text-gray-900 shadow-black/5'
            }`}>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Book a Table</h3>
                  <p className={`font-sans text-xs mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Fill out the details below. Our reservation concierge will confirm instantly.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Natasha Wilona"
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#c8a272] ${
                            darkMode 
                              ? 'bg-black/40 border-white/10 text-white placeholder:text-gray-600' 
                              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                          }`}
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">WhatsApp Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+62 812-3456-7890"
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#c8a272] ${
                            darkMode 
                              ? 'bg-black/40 border-white/10 text-white placeholder:text-gray-600' 
                              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">Number of Guests</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <Users className="w-4 h-4" />
                        </div>
                        <select 
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#c8a272] ${
                            darkMode 
                              ? 'bg-black/40 border-white/10 text-white' 
                              : 'bg-gray-50 border-gray-200 text-gray-900'
                          }`}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="4">4 People</option>
                          <option value="6">6 People</option>
                          <option value="8+">8+ People (VIP)</option>
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">Reservation Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input 
                          type="date" 
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#c8a272] ${
                            darkMode 
                              ? 'bg-black/40 border-white/10 text-white' 
                              : 'bg-gray-50 border-gray-200 text-gray-900'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">Preferred Time</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#c8a272] ${
                            darkMode 
                              ? 'bg-black/40 border-white/10 text-white' 
                              : 'bg-gray-50 border-gray-200 text-gray-900'
                          }`}
                        >
                          <option value="08:00">08:00 AM (Breakfast)</option>
                          <option value="10:00">10:00 AM (Brunch)</option>
                          <option value="13:00">01:00 PM (Lunch)</option>
                          <option value="16:00">04:00 PM (Sunset)</option>
                          <option value="19:00">07:00 PM (Dinner & Jazz)</option>
                          <option value="21:00">09:00 PM (Late Night)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests / Notes */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">Special Requests / Seating Preference</label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="e.g., Near window, anniversary surprise, birthday cake..."
                      className={`w-full p-4 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-[#c8a272] ${
                        darkMode 
                          ? 'bg-black/40 border-white/10 text-white placeholder:text-gray-600' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#c8a272] hover:bg-white text-[#12100e] font-sans uppercase text-xs tracking-widest font-bold transition-all duration-300 shadow-xl hover:shadow-[#c8a272]/30 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#12100e] border-t-transparent rounded-full animate-spin" />
                        <span>Confirming Reservation...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Reservation</span>
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Popup Simulation */
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-[#c8a272]/20 text-[#c8a272] flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold mb-3">Reservation Confirmed!</h3>
                  <p className={`font-sans text-sm mb-8 max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Thank you, <span className="font-bold text-[#c8a272]">{formData.name}</span>. Your table for <span className="font-bold text-[#c8a272]">{formData.guests}</span> is secured for <span className="font-bold text-[#c8a272]">{formData.date || 'Today'} at {formData.time}</span>. A confirmation message has been sent to your WhatsApp ({formData.phone}).
                  </p>

                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10 inline-block text-left mb-8">
                    <div className="text-xs uppercase tracking-widest text-[#c8a272] font-bold mb-1">Booking Ref #AE-7892</div>
                    <div className="text-xs text-gray-400">Please arrive 10 minutes prior to your reserved time slot.</div>
                  </div>

                  <div>
                    <button 
                      onClick={resetForm}
                      className="px-8 py-3 rounded-full border border-[#c8a272] text-[#c8a272] hover:bg-[#c8a272] hover:text-[#12100e] transition-colors text-xs uppercase tracking-widest font-bold"
                    >
                      Book Another Table
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
