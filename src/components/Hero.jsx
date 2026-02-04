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
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/80" />
        
        {/* Pattern subtil */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-club-gold/10 via-transparent to-club-gold/10" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Club Crest */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-club-gold relative overflow-hidden glow">
              <div className="absolute inset-0 bg-linear-to-br from-club-gold via-yellow-500 to-club-black flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/kingpokkologo.jpeg" 
                    alt="Great King Pokko FA Logo" 
                    className="h-60 w-60 rounded-full object-cover"
                  /> 
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gold-gradient">Great King</span>
            <br />
            <span className="text-white drop-shadow-lg">Pokko FA</span>
          </h1>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative inline-block mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-club-gold mb-2 drop-shadow-lg">
              "With God, all things are possible"
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-club-gold shadow-lg"></div>
          </motion.div>

          {/* Year Founded */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-linear-to-r from-club-gold/20 to-transparent px-6 py-3 rounded-full border border-club-gold/30 mb-8 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl font-semibold">
              Founded <span className="text-club-gold">2011</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12"
          >
            <a
              href="#about"
              className="px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/50 text-sm md:text-base shadow-lg"
            >
              Discover Our Story
            </a>
            <a
              href="/contact"
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-sm md:text-base backdrop-blur-sm"
            >
              Join Our Team
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-club-gold rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-club-gold rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Football Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-club-gold/30 rounded-full"
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: '90%',
            }}
          />
        ))}
        
        {/* Football patterns */}
        <div className="absolute top-10 left-10 opacity-10">
          <div className="w-20 h-20 border-2 border-club-gold rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className="w-16 h-16 border-2 border-club-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;