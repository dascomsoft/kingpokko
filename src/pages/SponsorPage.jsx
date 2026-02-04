import React from 'react';
import Sponsor from '../components/Sponsor';
import { motion } from 'framer-motion';

const SponsorPage = () => {
  return (
    <div className="pt-12 xs:pt-14 sm:pt-16 md:pt-18 lg:pt-20">
      {/* Hero Section with Parallax Background */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
             style={{backgroundImage: "url('/ballon1.jpg')"}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 xs:w-1.5 xs:h-1.5 bg-club-gold/30 rounded-full"
              animate={{
                y: [0, -150],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: '110%',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center px-1"
          >
            {/* Main Title with Decorative Elements */}
            <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="inline-block mb-3 xs:mb-4"
              >
                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 xs:border-4 border-club-gold/50 flex items-center justify-center backdrop-blur-sm bg-black/30">
                  <span className="text-club-gold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">🤝</span>
                </div>
              </motion.div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 xs:mb-3 sm:mb-4 gold-gradient leading-tight">
                Our Sponsors & Partners
              </h1>
              
              <div className="w-20 xs:w-24 sm:w-28 md:w-36 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-club-gold to-transparent mx-auto mb-3 xs:mb-4 sm:mb-5"></div>
              
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 xs:mb-4 sm:mb-5 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                Building Success Together
              </p>
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block bg-gradient-to-r from-club-gold/20 to-club-gold/10 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-lg xs:rounded-xl border border-club-gold/30 backdrop-blur-sm shadow-xl"
            >
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white leading-tight">
                Strategic Partnerships Driving <span className="text-club-gold font-bold">Football Excellence</span> in Nigeria
              </p>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 xs:mt-8 sm:mt-10"
            >
              <div className="grid grid-cols-3 gap-2 xs:gap-3 max-w-md mx-auto">
                {[
                  { value: "12+", label: "Years" },
                  { value: "50+", label: "Partners" },
                  { value: "100M+", label: "Reach" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-club-gold">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-[10px] xs:text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 xs:mt-8 sm:mt-10 md:mt-12"
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

      {/* Main Sponsor Component */}
      <Sponsor />

      {/* Additional Partnership Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 xs:mb-5 sm:mb-6">
              More Than <span className="gold-gradient">Financial Support</span>
            </h2>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-4 xs:p-5 sm:p-6 md:p-8 rounded-lg xs:rounded-xl border border-club-gold/20 backdrop-blur-sm">
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg mb-4 xs:mb-5 leading-relaxed">
                Our partnerships extend beyond sponsorship to create meaningful impact through community engagement, youth development, and shared values that benefit all stakeholders.
              </p>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4">
                {[
                  { title: "Community Impact", desc: "Supporting local youth programs" },
                  { title: "Talent Development", desc: "Nurturing future football stars" },
                  { title: "Brand Alignment", desc: "Shared values and objectives" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-3 xs:p-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3 rounded-full bg-club-gold/20 flex items-center justify-center text-club-gold">
                      {idx === 0 ? "🏆" : idx === 1 ? "⭐" : "🤝"}
                    </div>
                    <h4 className="text-club-gold font-bold text-sm xs:text-base mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-[10px] xs:text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 xs:mt-6">
                <a
                  href="/contact"
                  className="inline-block px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 border border-club-gold text-club-gold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base"
                >
                  Explore Partnership Opportunities
                </a>
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
            "With God, all things are possible"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SponsorPage;