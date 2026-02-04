import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ballon1.jpg')",
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Gradient overlay supplémentaire */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        
        {/* Pattern subtil */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-club-gold/10 via-transparent to-club-gold/10" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-2 sm:px-4"
        >
          {/* Club Crest - Responsive sizing */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative inline-block mb-6 sm:mb-8"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full border-4 sm:border-6 md:border-8 border-club-gold relative overflow-hidden glow">
              <div className="absolute inset-0 bg-gradient-to-br from-club-gold via-yellow-500 to-club-black flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/kingpokkologo.jpeg" 
                    alt="Great King Pokko FA Logo" 
                    className="h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60 rounded-full object-cover"
                  /> 
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Title - Responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6">
            <span className="gold-gradient block mb-1 sm:mb-2">Great King</span>
            <span className="text-white drop-shadow-lg block">Pokko FA</span>
          </h1>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative inline-block mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg mx-auto px-2"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-club-gold mb-2 drop-shadow-lg leading-tight">
              "With God, all things are possible"
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-club-gold shadow-lg"></div>
          </motion.div>

          {/* Year Founded */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-gradient-to-r from-club-gold/20 to-transparent px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-club-gold/30 mb-6 sm:mb-8 backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base md:text-lg font-semibold">
              Founded <span className="text-club-gold">2011</span>
            </p>
          </motion.div>

          {/* CTA Buttons - Stack on mobile, row on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mt-6 sm:mt-8 md:mt-12 px-2"
          >
            <a
              href="#about"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-yellow-500/50 text-xs sm:text-sm md:text-base shadow-lg w-full sm:w-auto text-center"
            >
              Discover Our Story
            </a>
            <a
              href="/contact"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border-2 border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-xs sm:text-sm md:text-base backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Join Our Team
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-club-gold rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-2 sm:h-3 bg-club-gold rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Football Elements - Adjust density for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-club-gold/30 rounded-full"
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: '90%',
            }}
          />
        ))}
        
        {/* Football patterns - Hide on very small screens */}
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 opacity-10 hidden sm:block">
          <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-club-gold rounded-full"></div>
        </div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 opacity-10 hidden sm:block">
          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-club-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;