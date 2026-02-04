import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import { GiSoccerField } from 'react-icons/gi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Our Facility",
      details: "Anthony Recreation Center, Adebayo Mokuolu Street, Anthony, Lagos",
      color: "from-club-gold to-yellow-600",
      link: "https://maps.google.com/?q=Anthony+Recreation+Center+Lagos",
      linkText: "View on Map"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "demophet2000@yahoo.com",
      color: "from-white to-gray-300",
      link: "mailto:demophet2000@yahoo.com",
      linkText: "Send Email"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: "+234 810 155 8759",
      color: "from-green-500 to-green-600",
      link: "https://wa.me/2348101558759",
      linkText: "Chat on WhatsApp"
    }
  ];

  const contactSubjects = [
    "Player Trial Inquiry",
    "Sponsorship Opportunity",
    "Training Schedule",
    "Match Ticket Information",
    "Media & Press",
    "General Inquiry"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const whatsappMessage = 
`*New Contact Form Submission* 🏆

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject}
*Message:* ${formData.message}

_This message was sent via Great King Pokko FA website_`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/2348101558759?text=${encodedMessage}`;
    
    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Quick action functions
  const handleQuickWhatsApp = () => {
    const message = encodeURIComponent("Hello Great King Pokko FA, I'm interested in learning more about your football club.");
    window.open(`https://wa.me/2348101558759?text=${message}`, '_blank');
  };

  const handleQuickCall = () => {
    window.location.href = 'tel:+2348101558759';
  };

  const handleQuickEmail = () => {
    window.location.href = 'mailto:demophet2000@yahoo.com?subject=Inquiry About Great King Pokko FA';
  };

  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-1"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 gold-gradient leading-tight">
            Get In Touch
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-club-gold to-transparent mx-auto mb-3 xs:mb-4 sm:mb-5"></div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            Whether you're a prospective player, sponsor, or fan, we'd love to hear from you. Reach out to join our football family.
          </p>
        </motion.div>

        {/* Quick Action Buttons - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-30px" }}
          className="mb-6 xs:mb-8 sm:mb-10"
        >
          <div className="grid grid-cols-3 gap-2 xs:gap-3 max-w-xl mx-auto">
            <button
              onClick={handleQuickWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 xs:px-3 py-2 xs:py-2.5 rounded-lg xs:rounded-xl flex flex-col items-center justify-center gap-1 xs:gap-2 active:scale-95 transition-all duration-300"
            >
              <FaWhatsapp className="text-base xs:text-lg" />
              <span className="text-[10px] xs:text-xs font-medium">WhatsApp</span>
            </button>
            <button
              onClick={handleQuickCall}
              className="bg-gradient-to-r from-club-gold to-yellow-600 text-black px-2 xs:px-3 py-2 xs:py-2.5 rounded-lg xs:rounded-xl flex flex-col items-center justify-center gap-1 xs:gap-2 active:scale-95 transition-all duration-300"
            >
              <FaPhone className="text-base xs:text-lg" />
              <span className="text-[10px] xs:text-xs font-medium">Call Now</span>
            </button>
            <button
              onClick={handleQuickEmail}
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-2 xs:px-3 py-2 xs:py-2.5 rounded-lg xs:rounded-xl flex flex-col items-center justify-center gap-1 xs:gap-2 active:scale-95 transition-all duration-300"
            >
              <FaEnvelope className="text-base xs:text-lg" />
              <span className="text-[10px] xs:text-xs font-medium">Email</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 xs:mb-8 leading-tight">
              Connect With Us
            </h3>
            
            <div className="space-y-4 xs:space-y-5 sm:space-y-6 mb-8 xs:mb-10 sm:mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  className="bg-gradient-to-br from-gray-900 to-black p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl border border-gray-800 hover:border-club-gold/30 transition-all duration-300 group active:scale-95"
                >
                  <div className="flex items-start gap-3 xs:gap-4">
                    <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-lg xs:text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white mb-1 xs:mb-2 leading-tight">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-xs xs:text-sm sm:text-base mb-2 xs:mb-3 truncate">
                        {info.details}
                      </p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-club-gold hover:text-yellow-400 transition-colors duration-300 text-xs xs:text-sm"
                      >
                        <span>{info.linkText}</span>
                        <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-1 xs:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Training Facility Info */}
            <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-4 xs:p-5 sm:p-6 md:p-7 rounded-lg xs:rounded-xl border border-club-gold/20">
              <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-5">
                <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-club-gold flex items-center justify-center flex-shrink-0">
                  <GiSoccerField className="text-lg xs:text-xl sm:text-2xl text-black" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                    Training Sessions
                  </h4>
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                    Monday - Saturday: 4PM - 7PM
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed">
                Interested in joining our training sessions? Contact us to schedule a trial or attend an open training day.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 border border-club-gold/20">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 xs:mb-8 leading-tight">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-500/20 to-transparent p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl border border-green-500/30 mb-6"
                >
                  <div className="flex items-center gap-3 xs:gap-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <FaPaperPlane className="text-lg xs:text-xl text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-1 leading-tight">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-300 text-xs xs:text-sm">
                        WhatsApp is opening with your message. We'll respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5">
                    <div>
                      <label className="block text-gray-300 mb-1.5 xs:mb-2 text-xs xs:text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-gray-800 border border-gray-700 rounded-lg xs:rounded-xl focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white text-xs xs:text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1.5 xs:mb-2 text-xs xs:text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-gray-800 border border-gray-700 rounded-lg xs:rounded-xl focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white text-xs xs:text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5">
                    <div>
                      <label className="block text-gray-300 mb-1.5 xs:mb-2 text-xs xs:text-sm font-medium">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <FaPhone className="text-gray-400 w-3 h-3 xs:w-4 xs:h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-9 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 bg-gray-800 border border-gray-700 rounded-lg xs:rounded-xl focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white text-xs xs:text-sm"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1.5 xs:mb-2 text-xs xs:text-sm font-medium">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-gray-800 border border-gray-700 rounded-lg xs:rounded-xl focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white text-xs xs:text-sm appearance-none"
                      >
                        <option value="">Select a subject</option>
                        {contactSubjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1.5 xs:mb-2 text-xs xs:text-sm font-medium">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-gray-800 border border-gray-700 rounded-lg xs:rounded-xl focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white text-xs xs:text-sm resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 xs:py-3.5 sm:py-4 px-4 xs:px-5 rounded-lg xs:rounded-xl font-bold transition-all duration-300 active:scale-95 ${
                      isSubmitting
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-club-gold to-yellow-600 hover:from-yellow-600 hover:to-club-gold text-black'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center text-xs xs:text-sm sm:text-base">
                        <svg className="animate-spin h-4 w-4 xs:h-5 xs:w-5 mr-2 xs:mr-3 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending to WhatsApp...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center text-xs xs:text-sm sm:text-base">
                        <FaWhatsapp className="mr-2 xs:mr-3" />
                        Send via WhatsApp
                      </span>
                    )}
                  </motion.button>

                  <p className="text-gray-500 text-[10px] xs:text-xs text-center mt-2">
                    Your message will be sent directly to our WhatsApp for immediate response
                  </p>
                </form>
              )}

              {/* Social Media Links */}
              <div className="mt-8 xs:mt-10 pt-6 xs:pt-8 border-t border-gray-800">
                <h4 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-4 xs:mb-5">
                  Follow Our Journey
                </h4>
                <div className="flex gap-3 xs:gap-4 justify-center">
                  {[
                    { name: 'Facebook', icon: 'F' },
                    { name: 'Twitter', icon: 'T' },
                    { name: 'Instagram', icon: 'I' },
                    { name: 'YouTube', icon: 'Y' }
                  ].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-club-gold hover:text-black transition-all duration-300 active:scale-95"
                    >
                      <span className="text-sm xs:text-base font-bold">{platform.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 xs:mt-12 sm:mt-14 md:mt-16"
        >
          <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-4 xs:p-5 sm:p-6 md:p-7 rounded-lg xs:rounded-xl sm:rounded-2xl border border-club-gold/20">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 xs:mb-5 sm:mb-6 text-center leading-tight">
              Find Us at Anthony Recreation Center
            </h3>
            <div className="h-64 xs:h-72 sm:h-80 md:h-96 bg-gradient-to-br from-gray-900 to-black rounded-lg xs:rounded-xl border border-gray-800 flex items-center justify-center">
              <div className="text-center p-4 xs:p-6">
                <GiSoccerField className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-club-gold mb-3 xs:mb-4 mx-auto" />
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white mb-2 xs:mb-3">
                  The Anthony Recreation Center
                </p>
                <p className="text-gray-300 text-xs xs:text-sm sm:text-base mb-4 xs:mb-5">
                  Adebayo Mokuolu Street, Anthony, Lagos
                </p>
                <a
                  href="https://maps.google.com/?q=Anthony+Recreation+Center+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 border border-club-gold text-club-gold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base"
                >
                  <FaMapMarkerAlt className="mr-2 xs:mr-3" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 xs:mt-10 text-center"
        >
          <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
            📞 <span className="text-club-gold">Emergency Contact:</span> Call +234 810 155 8759 for urgent matters
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;