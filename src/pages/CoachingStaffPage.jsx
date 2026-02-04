import React from 'react';
import CoachingStaff from '../components/CoachingStaff';
import { motion } from 'framer-motion';

const CoachingStaffPage = () => {
  return (
    <div className="pt-12 xs:pt-14 sm:pt-16 md:pt-18 lg:pt-20">
      {/* Hero Section with Background */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bambe11.webp')",
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.3) 1px, transparent 1px)', 
                       backgroundSize: '20px 20px'}}></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center px-1 xs:px-2"
          >
            {/* Main Title with Gradient */}
            <div className="mb-3 xs:mb-4 sm:mb-5 md:mb-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 xs:mb-3 gold-gradient leading-tight">
                Meet Our Coaches
              </h1>
              <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-club-gold to-transparent mx-auto"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 xs:mb-5 sm:mb-6 md:mb-8 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
              The Masterminds Behind Our Football Success
            </p>

            {/* Info Badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-gradient-to-r from-club-gold/20 to-club-gold/10 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl border border-club-gold/30 backdrop-blur-sm shadow-lg"
            >
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white leading-tight flex flex-col xs:flex-row xs:items-center xs:justify-center xs:gap-2">
                <span className="text-club-gold font-bold">8+ Years</span> 
                <span className="hidden xs:inline">|</span>
                <span>Combined Experience</span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">Licensed Coaches</span>
              </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-6 xs:mt-8 sm:mt-10 md:mt-12"
            >
              <div className="w-6 h-10 xs:w-7 xs:h-12 border border-club-gold/50 rounded-full flex justify-center backdrop-blur-sm">
                <div className="w-1 h-2 xs:h-3 bg-club-gold rounded-full mt-2"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-10 xs:h-12 sm:h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Coaching Staff Component */}
      <CoachingStaff />

      {/* Additional Info Section - Mobile Optimized */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            {/* Section Header */}
            <div className="mb-5 xs:mb-6 sm:mb-7 md:mb-8">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 xs:mb-3">
                Why <span className="gold-gradient">Professional</span> Coaching Matters
              </h2>
              <div className="w-12 xs:w-16 sm:w-20 h-0.5 bg-gradient-to-r from-club-gold to-transparent mx-auto"></div>
            </div>

            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl border border-club-gold/20 backdrop-blur-sm shadow-xl">
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg mb-4 xs:mb-5 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
                Professional coaching makes a <span className="text-club-gold font-bold">significant difference</span> in player development. Our coaches are not just trainers; they are mentors who understand the technical, tactical, physical, and psychological aspects of football.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
                {[
                  { 
                    title: "Expert Guidance", 
                    desc: "Proper technique, strategy, and skill development",
                    icon: "⚽"
                  },
                  { 
                    title: "Injury Prevention", 
                    desc: "Correct training methods to avoid injuries",
                    icon: "🛡️"
                  },
                  { 
                    title: "Career Development", 
                    desc: "Pathway to professional opportunities",
                    icon: "📈"
                  },
                  { 
                    title: "Character Building", 
                    desc: "Discipline, teamwork, and leadership skills",
                    icon: "👑"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    className="text-left p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl bg-gradient-to-br from-gray-900/50 to-transparent border border-club-gold/10 hover:border-club-gold/30 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <div className="flex items-start gap-2 xs:gap-3">
                      <div className="text-xl xs:text-2xl">{benefit.icon}</div>
                      <div>
                        <h4 className="text-club-gold font-bold text-sm xs:text-base sm:text-lg mb-1 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400 text-xs xs:text-sm leading-tight">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-5 xs:mt-6 sm:mt-8"
              >
                <a
                  href="/contact"
                  className="inline-block px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:shadow-yellow-500/30"
                >
                  Start Your Journey Today
                </a>
                <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm mt-2 xs:mt-3">
                  Free trial session available for new players
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-4 xs:py-5 bg-black">
        <div className="container mx-auto px-2 xs:px-3 text-center">
          <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
            © {new Date().getFullYear()} Great King Pokko FA. All rights reserved. | 
            <span className="text-club-gold mx-1 xs:mx-2">"With God, all things are possible"</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CoachingStaffPage;