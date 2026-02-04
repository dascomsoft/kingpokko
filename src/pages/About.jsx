import React from 'react';
import ClubInfo from '../components/ClubInfo';
import { motion } from 'framer-motion';
import { GiSoccerBall, GiChampions, GiGrowth } from 'react-icons/gi';

const About = () => {
  const timeline = [
    { year: "2011", event: "Club Founded", description: "Great King Pokko FA established with a vision to develop local talent" },
    { year: "2013", event: "First Championship", description: "Won regional championship in our second competitive season" },
    { year: "2015", event: "Facility Upgrade", description: "Moved to Anthony Recreation Center with improved facilities" },
    { year: "2018", event: "Professional Coaches", description: "Licensed coaching staff joined the club" },
    { year: "2020", event: "Youth Academy", description: "Launched youth development program for under-15 players" },
    { year: "2023", event: "Major Sponsorship", description: "Partnership with Great King Pokko Ltd secured" },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/ballon2.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gold-gradient">Our Story</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Building Champions Since 2011
            </p>
            <div className="inline-block bg-gradient-to-r from-club-gold/20 to-transparent px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-club-gold/30 backdrop-blur-sm">
              <p className="text-base sm:text-lg md:text-xl">
                Founded on faith, built on excellence, driven by passion
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ClubInfo />

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16 px-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gold-gradient">Our Journey</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a force in Nigerian football
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on tablet+ */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-club-gold via-yellow-600 to-transparent hidden sm:block"></div>

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 sm:mb-12 ${index % 2 === 0 ? '' : ''}`}
              >
                {/* Mobile Layout - Stacked */}
                <div className="sm:hidden">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-club-gold/20 hover-glow transition-all duration-300 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-club-gold flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        {index === 0 ? <GiSoccerBall /> : index === timeline.length - 1 ? <GiChampions /> : <GiGrowth />}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.year}</h3>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-club-gold">{item.event}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>

                {/* Desktop Layout - Split */}
                <div className="hidden sm:flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-6 md:pr-8' : 'pl-4 sm:pl-6 md:pl-8'}`}>
                    {index % 2 === 0 && (
                      <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-club-gold/20 hover-glow transition-all duration-300">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-club-gold flex items-center justify-center mr-3 sm:mr-4">
                            {index === 0 ? <GiSoccerBall /> : index === timeline.length - 1 ? <GiChampions /> : <GiGrowth />}
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.year}</h3>
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-club-gold mb-2">{item.event}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-club-gold border-2 sm:border-4 border-black relative z-10 hidden sm:block"></div>
                  
                  <div className={`w-1/2 ${index % 2 !== 0 ? 'pr-4 sm:pr-6 md:pr-8' : 'pl-4 sm:pl-6 md:pl-8'}`}>
                    {index % 2 !== 0 && (
                      <div className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-club-gold/20 hover-glow transition-all duration-300">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-club-gold flex items-center justify-center mr-3 sm:mr-4">
                            {index === 0 ? <GiSoccerBall /> : index === timeline.length - 1 ? <GiChampions /> : <GiGrowth />}
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.year}</h3>
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-club-gold mb-2">{item.event}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 px-2 sm:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gold-gradient">More Than A Football Club</h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                At Great King Pokko FA, we believe football is more than just a game. It's a platform for character 
                development, community building, and life-changing opportunities. Our motto, "With God, all things are 
                possible," guides everything we do - from training sessions to community outreach.
              </p>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                We're committed to developing well-rounded individuals who excel both on and off the pitch. Our 
                players learn discipline, teamwork, resilience, and leadership - skills that serve them for life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {[
                  { value: "500+", label: "Youth Trained" },
                  { value: "15+", label: "Pro Players" },
                  { value: "98%", label: "Graduation Rate" },
                  { value: "100+", label: "Community Events" },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-900 to-black p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-club-gold/20 text-center hover-glow transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-club-gold mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-club-gold/20 via-black to-club-gold/20 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-club-gold/30">
              <div className="text-4xl sm:text-5xl md:text-6xl text-club-gold mb-4 sm:mb-6">"</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 italic">
                Our mission is to develop not just football players, but future leaders who will make positive contributions to society.
              </h3>
              <div className="inline-block bg-gradient-to-r from-club-gold to-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <p className="text-black font-bold text-sm sm:text-base md:text-lg">Coach's Philosophy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;