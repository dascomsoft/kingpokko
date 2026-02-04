import React from 'react';
import ClubInfo from '../components/ClubInfo';
import { motion } from 'framer-motion';
import { GiSoccerBall, GiChampions, GiGrowth } from 'react-icons/gi';

const About = () => {
  const timeline = [
    { year: "2011", event: "Club Founded", description: "Great King Pokko FA established with a vision to develop local talent" },
    { year: "2013", event: "First Championship", description: "Won regional championship in our second competitive season" },
    { year: "2015", event: "Facility Upgrade", description: "Moved to Anthony Recreation Center with improved facilities" },
    { year: "2018", event: "Professional Coaches", description: "UEFA licensed coaching staff joined the club" },
    { year: "2020", event: "Youth Academy", description: "Launched youth development program for under-15 players" },
    { year: "2023", event: "Major Sponsorship", description: "Partnership with Great King Pokko Ltd secured" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6 gold-gradient">Our Story</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Building Champions Since 2011
            </p>
            <div className="inline-block bg-gradient-to-r from-club-gold/20 to-transparent px-8 py-4 rounded-2xl border border-club-gold/30">
              <p className="text-xl">
                Founded on faith, built on excellence, driven by passion
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ClubInfo />

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 gold-gradient">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a force in Nigerian football
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-club-gold via-yellow-600 to-transparent"></div>

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2">
                  <div className={`bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-club-gold/20 ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  } hover-glow transition-all duration-300`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-club-gold flex items-center justify-center mr-4">
                        {index === 0 ? <GiSoccerBall /> : index === timeline.length - 1 ? <GiChampions /> : <GiGrowth />}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                    </div>
                    <h4 className="text-xl font-bold text-club-gold mb-2">{item.event}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-club-gold border-4 border-black relative z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 gold-gradient">More Than A Football Club</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Great King Pokko FA, we believe football is more than just a game. It's a platform for character 
                development, community building, and life-changing opportunities. Our motto, "With God, all things are 
                possible," guides everything we do - from training sessions to community outreach.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're committed to developing well-rounded individuals who excel both on and off the pitch. Our 
                players learn discipline, teamwork, resilience, and leadership - skills that serve them for life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "500+", label: "Youth Trained" },
                { value: "15+", label: "Pro Players" },
                { value: "98%", label: "Graduation Rate" },
                { value: "100+", label: "Community Events" },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-club-gold/20 text-center">
                  <div className="text-4xl font-bold text-club-gold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;