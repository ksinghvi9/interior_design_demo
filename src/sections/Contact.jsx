import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    budget: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapHovered, setMapHovered] = useState(false);

  const propertyTypes = ['Villa', 'Apartment', 'Penthouse', 'Office', 'Other'];
  const budgetRanges = ['₹30 - ₹50 Lakhs', '₹50 - ₹80 Lakhs', '₹80 Lakhs - ₹1.5 Crore', '₹1.5 Crore+'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetWhatsAppNumber = '918302893552';

    const formattedMessage = 
`✨ *NEW CONSULTATION REQUEST* ✨
-----------------------------------
👤 *Full Name:* ${formData.name}
📧 *Email Address:* ${formData.email}
📞 *Phone Number:* ${formData.phone}
🏠 *Property Type:* ${formData.propertyType}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Brief:* ${formData.details}
-----------------------------------
*Sent via Aurum Atelier Website*`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: '',
      budget: '',
      details: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section-spacer bg-brand-bg transition-colors duration-500">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">Connect With Us</span>
          <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-2">
            Request Consultation
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-accent font-semibold">
                The Gurugram Atelier
              </span>
              <h3 className="font-sans font-semibold text-2xl text-brand-textPrimary tracking-normal">
                Aurum Atelier Studio
              </h3>

              <div className="space-y-4 font-sans text-xs font-light text-brand-textSecondary leading-relaxed">
                <div className="flex gap-3 items-start">
                  <MapPin size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-textPrimary">Main Office & Gallery</p>
                    <p className="mt-0.5">Horizon Drive, DLF Phase 5, Sector 54,</p>
                    <p>Gurugram, Haryana 122011, India</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-textPrimary">Consultation Desk</p>
                    <p className="mt-0.5">+91 98100 88200</p>
                    <p>+91 124 456 7890</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-textPrimary">General Inquiries</p>
                    <p className="mt-0.5">concierge@aurumatelier.com</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-textPrimary">Studio Hours</p>
                    <p className="mt-0.5">Mon – Sat: 10:00 AM – 7:00 PM</p>
                    <p>Sundays: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive SVG Map */}
            <div 
              className="relative aspect-video w-full border border-brand-border bg-brand-card rounded-2xl overflow-hidden shadow-sm flex items-center justify-center cursor-crosshair select-none"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
            >
              <svg viewBox="0 0 400 220" className="w-full h-full stroke-brand-border/60 fill-none stroke-[0.8]">
                <path d="M 0,40 L 400,200" strokeWidth="1.5" />
                <path d="M 120,0 L 220,220" strokeWidth="1.5" />
                <path d="M 320,0 L 40,220" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 0,160 L 400,100" strokeWidth="1" />

                <rect x="50" y="80" width="40" height="30" rx="1" fill="#B08A5A" fillOpacity="0.03" />
                <rect x="250" y="40" width="50" height="40" rx="1" fill="#B08A5A" fillOpacity="0.03" />
                <rect x="220" y="130" width="60" height="35" rx="1" fill="#B08A5A" fillOpacity="0.03" />
                <rect x="110" y="110" width="45" height="30" rx="1" fill="#B08A5A" fillOpacity="0.03" />

                <path d="M 300,100 C 330,80 370,120 400,110 L 400,220 L 300,220 Z" fill="#F1ECE4" fillOpacity="0.6" />
                
                <text x="320" y="180" fontSize="7" className="fill-brand-accent/60 font-sans uppercase tracking-widest font-light">DLF Golf Course</text>
                <text x="20" y="195" fontSize="7" className="fill-brand-textSecondary/40 font-sans tracking-wide">Golf Course Road</text>
                <text x="140" y="30" fontSize="7" className="fill-brand-textSecondary/40 font-sans tracking-wide">Horizon Drive</text>

                <g>
                  <circle cx="185" cy="115" r="10" className="stroke-brand-accent fill-none animate-ping" style={{ transformOrigin: '185px 115px' }} />
                  <circle cx="185" cy="115" r="4" fill="#B08A5A" />
                  <path d="M 185,115 L 185,103" stroke="#B08A5A" strokeWidth="1.2" />
                  <circle cx="185" cy="103" r="3" fill="#FFFFFF" stroke="#B08A5A" strokeWidth="1" />
                </g>
              </svg>

              <AnimatePresence>
                {mapHovered && (
                  <motion.div 
                    className="absolute bg-brand-textPrimary text-brand-bg p-3 shadow-md z-20 pointer-events-none text-left w-[180px] rounded-lg border border-brand-border/20"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-sans font-semibold text-[11px] text-brand-accent tracking-wide uppercase">Aurum Atelier Studio</p>
                    <p className="text-[9px] font-sans text-brand-bg/80 mt-1 leading-normal">
                      Sector 54, DLF Phase 5,<br />Gurugram, India
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7 border border-brand-border bg-brand-card p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-left border-b border-brand-border/40 pb-3">
                    <h3 className="font-sans font-semibold text-lg lg:text-xl text-brand-textPrimary tracking-normal">
                      Request a Consultation
                    </h3>
                    <p className="text-[9px] font-sans text-brand-textSecondary mt-1 uppercase tracking-widest font-semibold">
                      We reply to all design inquiries within 24 business hours.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col text-left">
                      <label htmlFor="name" className="text-[9px] uppercase tracking-widest text-brand-accent mb-1.5 font-semibold">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full bg-brand-secBg/30 border border-brand-border px-3 py-2.5 text-xs focus:border-brand-accent focus:outline-none transition-colors duration-300 text-brand-textPrimary font-light font-sans rounded-lg"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="email" className="text-[9px] uppercase tracking-widest text-brand-accent mb-1.5 font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full bg-brand-secBg/30 border border-brand-border px-3 py-2.5 text-xs focus:border-brand-accent focus:outline-none transition-colors duration-300 text-brand-textPrimary font-light font-sans rounded-lg"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Phone & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col text-left">
                      <label htmlFor="phone" className="text-[9px] uppercase tracking-widest text-brand-accent mb-1.5 font-semibold">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        className="w-full bg-brand-secBg/30 border border-brand-border px-3 py-2.5 text-xs focus:border-brand-accent focus:outline-none transition-colors duration-300 text-brand-textPrimary font-light font-sans rounded-lg"
                        placeholder="+91 99999 88888"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="propertyType" className="text-[9px] uppercase tracking-widest text-brand-accent mb-1.5 font-semibold">Property Type</label>
                      <select 
                        id="propertyType"
                        required
                        className="w-full bg-brand-secBg/30 border border-brand-border px-3 py-2.5 text-xs focus:border-brand-accent focus:outline-none transition-colors duration-300 text-brand-textPrimary font-light font-sans rounded-lg"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      >
                        <option value="" disabled>Select Property Type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="budget" className="text-[9px] uppercase tracking-widest text-brand-accent mb-1.5 font-semibold">Estimated Project Budget</label>
                    <select 
                      id="budget"
                      required
                      className="w-full bg-brand-secBg/30 border border-brand-border px-3 py-2.5 text-xs focus:border-brand-accent focus:outline-none transition-colors duration-300 text-brand-textPrimary font-light font-sans rounded-lg"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="" disabled>Select Budget Range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="details" className="text-[9px] uppercase tracking-widest text-brand-accent mb-1.5 font-semibold">Project Brief</label>
                    <textarea 
                      id="details"
                      rows="3"
                      required
                      className="w-full bg-brand-secBg/30 border border-brand-border px-3 py-2.5 text-xs focus:border-brand-accent focus:outline-none transition-colors duration-300 text-brand-textPrimary font-light font-sans resize-none rounded-lg"
                      placeholder="Please describe your space, styling expectations, and requirements..."
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-brand-accent text-white hover:bg-brand-textPrimary transition-all duration-300 font-sans text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 border border-transparent rounded-lg cursor-pointer font-semibold"
                  >
                    Send Request <Send size={11} />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="submission-success"
                  className="text-center py-8 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent flex items-center justify-center text-brand-accent mb-4">
                    <Check size={20} />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-brand-textPrimary tracking-normal">
                    Opening WhatsApp...
                  </h3>
                  <p className="mt-2 text-xs font-sans text-brand-textSecondary max-w-sm leading-relaxed font-light mx-auto">
                    Thank you, <span className="font-semibold text-brand-accent">{formData.name}</span>. Your consultation details have been formatted and directed to WhatsApp (<span className="font-semibold text-brand-textPrimary">+91 83028 93552</span>).
                  </p>

                  <a
                    href={`https://wa.me/8302893552?text=${encodeURIComponent(
`✨ *NEW CONSULTATION REQUEST* ✨
-----------------------------------
👤 *Full Name:* ${formData.name}
📧 *Email Address:* ${formData.email}
📞 *Phone Number:* ${formData.phone}
🏠 *Property Type:* ${formData.propertyType}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Brief:* ${formData.details}
-----------------------------------
*Sent via Aurum Atelier Website*`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 px-6 py-3 bg-brand-accent hover:bg-brand-textPrimary text-white font-sans text-[10px] uppercase tracking-widest rounded-lg inline-flex items-center gap-2 font-semibold transition-colors"
                  >
                    Open WhatsApp Chat <Send size={11} />
                  </a>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-5 py-2 border border-brand-border hover:border-brand-accent text-[9px] uppercase tracking-widest text-brand-textSecondary hover:text-brand-accent transition-colors focus:outline-none cursor-pointer rounded-lg"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
