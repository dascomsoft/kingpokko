import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // Direct action functions
  const directActions = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      description: "Instant chat support",
      action: () => window.open('https://wa.me/2348101558759', '_blank'),
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      icon: <FaPhone />,
      title: "Call Now",
      description: "Speak directly",
      action: () => window.location.href = 'tel:+2348101558759',
      color: "bg-gradient-to-r from-club-gold to-yellow-600"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "Send detailed message",
      action: () => window.location.href = 'mailto:demophet2000@yahoo.com',
      color: "bg-gradient-to-r from-gray-800 to-gray-900"
    }
  ];

  return (
    <div className="pt-12 xs:pt-14 sm:pt-16 md:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{backgroundImage: "url('/ballon1.jpg')"}}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 xs:w-1.5 xs:h-1.5 bg-club-gold/30 rounded-full"
              animate={{
                y: [0, -120],
                x: [0, Math.random() * 80 - 40],
                opacity: [0, 0.7, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: '110%',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center px-1"
          >
            {/* Main Title */}
            <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="inline-block mb-3 xs:mb-4"
              >
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 xs:border-3 border-club-gold/50 flex items-center justify-center backdrop-blur-sm bg-black/30">
                  <span className="text-club-gold text-2xl xs:text-3xl sm:text-4xl">📞</span>
                </div>
              </motion.div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4 gold-gradient leading-tight">
                Contact Us
              </h1>
              
              <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-club-gold to-transparent mx-auto mb-3 xs:mb-4 sm:mb-5"></div>
              
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 xs:mb-4 sm:mb-5 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
                Get in Touch With Great King Pokko FA
              </p>
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block bg-gradient-to-r from-club-gold/20 to-club-gold/10 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl border border-club-gold/30 backdrop-blur-sm shadow-xl mb-4 xs:mb-5"
            >
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white leading-tight">
                We're here to answer your questions and welcome you to our football family
              </p>
            </motion.div>

            {/* Direct Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 xs:mt-8 sm:mt-10"
            >
              <div className="grid grid-cols-3 gap-2 xs:gap-3 max-w-xl mx-auto">
                {directActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={action.action}
                    className={`${action.color} text-white px-2 xs:px-3 py-3 xs:py-4 rounded-lg xs:rounded-xl flex flex-col items-center justify-center gap-1 xs:gap-2 active:scale-95 transition-all duration-300`}
                  >
                    <div className="text-lg xs:text-xl sm:text-2xl">{action.icon}</div>
                    <span className="text-[10px] xs:text-xs font-bold">{action.title}</span>
                    <span className="text-[8px] xs:text-[10px] opacity-90">{action.description}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 xs:mt-10 sm:mt-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 max-w-2xl mx-auto">
                {[
                  { value: "24h", label: "Response Time" },
                  { value: "100%", label: "Reply Rate" },
                  { value: "2011", label: "Since" },
                  { value: "1000+", label: "Players" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl font-bold text-club-gold">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-[10px] xs:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 xs:mt-10 sm:mt-12"
            >
              <div className="w-5 h-8 xs:w-6 xs:h-10 border border-club-gold/50 rounded-full flex justify-center backdrop-blur-sm mx-auto">
                <div className="w-1 h-2 xs:h-3 bg-club-gold rounded-full mt-2"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-8 xs:h-12 sm:h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Main Contact Form Component */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-14 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-2.5 xs:px-3 sm:px-4 md:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 xs:mb-5 sm:mb-6">
              Frequently Asked <span className="gold-gradient">Questions</span>
            </h2>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-4 xs:p-5 sm:p-6 rounded-lg xs:rounded-xl border border-club-gold/20 backdrop-blur-sm">
              <div className="space-y-3 xs:space-y-4">
                {[
                  {
                    q: "How can I join as a player?",
                    a: "Contact us via WhatsApp or call to schedule a trial session."
                  },
                  {
                    q: "What are the training hours?",
                    a: "Monday to Saturday, 4PM - 7PM at Anthony Recreation Center."
                  },
                  {
                    q: "How to become a sponsor?",
                    a: "Send us a detailed message outlining your partnership interest."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="text-left p-3 xs:p-4 bg-gray-900/50 rounded-lg">
                    <h4 className="text-club-gold font-bold text-sm xs:text-base mb-2">Q: {faq.q}</h4>
                    <p className="text-gray-300 text-xs xs:text-sm">A: {faq.a}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 xs:mt-6 text-center">
                <p className="text-gray-400 text-xs xs:text-sm mb-3">
                  Have more questions?
                </p>
                <button
                  onClick={() => window.open('https://wa.me/2348101558759', '_blank')}
                  className="inline-flex items-center px-4 xs:px-5 py-2 xs:py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-500 transition-all duration-300 active:scale-95 text-xs xs:text-sm"
                >
                  <FaWhatsapp className="mr-2" />
                  Ask on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 xs:py-5 bg-black border-t border-gray-900">
        <div className="container mx-auto px-2.5 xs:px-3 text-center">
          <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
            © {new Date().getFullYear()} Great King Pokko FA. All rights reserved.
          </p>
          <p className="text-gray-600 text-[9px] xs:text-[10px] mt-1">
            <span className="text-club-gold">"With God, all things are possible"</span> | Contact: +234 810 155 8759
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;