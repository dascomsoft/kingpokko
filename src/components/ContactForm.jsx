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
      details: "The Anthony Recreation Center, Adebayo Mokuolu Street, Anthony, Lagos, Nigeria",
      color: "from-club-gold to-yellow-600",
      link: "https://maps.google.com",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gold-gradient">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a prospective player, sponsor, or fan, we'd love to hear from you. Reach out to join our football family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Connect With Us</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-club-gold/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{info.title}</h4>
                      <p className="text-gray-300 mb-3">{info.details}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-club-gold hover:text-yellow-400 transition-colors duration-300"
                      >
                        <span>{info.linkText}</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Training Facility Info */}
            <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-8 rounded-2xl border border-club-gold/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-club-gold flex items-center justify-center">
                  <GiSoccerField className="text-2xl text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Training Sessions</h4>
                  <p className="text-gray-300">Monday - Saturday: 4PM - 7PM</p>
                </div>
              </div>
              <p className="text-gray-400">
                Interested in joining our training sessions? Contact us to schedule a trial or attend an open training day.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-club-gold/20">
              <h3 className="text-3xl font-bold text-white mb-8">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-500/20 to-transparent p-6 rounded-xl border border-green-500/30"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <FaPaperPlane className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                      <p className="text-gray-300">Thank you for contacting Great King Pokko FA. We'll respond within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white appearance-none"
                      >
                        <option value="">Select a subject</option>
                        {contactSubjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-club-gold focus:ring-2 focus:ring-club-gold/50 outline-none transition-all duration-300 text-white resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-club-gold to-yellow-600 hover:from-yellow-600 hover:to-club-gold text-black'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <FaPaperPlane className="mr-3" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              )}

              {/* Social Media Links */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h4 className="text-xl font-bold text-white mb-6">Follow Our Journey</h4>
                <div className="flex space-x-6">
                  {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-8 rounded-2xl border border-club-gold/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Find Us at Anthony Recreation Center</h3>
            <div className="h-96 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 flex items-center justify-center">
              <div className="text-center">
                <GiSoccerField className="text-8xl text-club-gold mb-6 mx-auto" />
                <p className="text-xl text-white mb-4">The Anthony Recreation Center</p>
                <p className="text-gray-300">Adebayo Mokuolu Street, Anthony, Lagos</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-6 px-6 py-3 border border-club-gold text-club-gold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300"
                >
                  <FaMapMarkerAlt className="mr-3" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;