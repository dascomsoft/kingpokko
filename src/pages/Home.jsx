import React from 'react';
import Hero from '../components/Hero';
import ClubInfo from '../components/ClubInfo';
import { motion } from 'framer-motion';
import { GiTrophy, GiSoccerField, GiTeamIdea, GiSoccerBall, GiWhistle, GiLaurels, GiGrowth, GiChampions } from 'react-icons/gi';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaAward, FaHandshake } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <GiTrophy />,
      title: "Winning Legacy",
      description: "Multiple championship titles since 2011",
      color: "from-club-gold to-yellow-600"
    },
    {
      icon: <GiTeamIdea />,
      title: "Professional Coaching",
      description: "Licensed coaches with modern methodologies",
      color: "from-white to-gray-300"
    },
    {
      icon: <GiSoccerField />,
      title: "Premium Facilities",
      description: "State-of-the-art training ground at Anthony Recreation Center",
      color: "from-club-gold to-yellow-700"
    }
  ];

  const galleryImages = [
    { src: "/training1.jpg", alt: "Team Training Session", title: "Intensive Training" },
    { src: "/training2.jpg", alt: "Match Day Action", title: "Match Day" },
    { src: "/training3.jpg", alt: "Youth Development", title: "Youth Academy" },
    { src: "/training4.jpg", alt: "Team Celebration", title: "Victory Celebrations" }
  ];

  const upcomingEvents = [
    {
      date: "15 MAR 2024",
      title: "Open Trial Day",
      location: "Anthony Recreation Center",
      icon: <GiSoccerBall />
    },
    {
      date: "22 MAR 2024",
      title: "Youth Tournament",
      location: "Lagos Stadium",
      icon: <GiLaurels />
    },
    {
      date: "30 MAR 2024",
      title: "Community Outreach",
      location: "Local Community Field",
      icon: <FaHandshake />
    }
  ];

  const testimonials = [
    {
      quote: "Great King Pokko FA transformed my son into a disciplined athlete with excellent technical skills.",
      author: "Parent of U-15 Player",
      role: "Satisfied Parent"
    },
    {
      quote: "The professional coaching and facilities here are unmatched in grassroots football development.",
      author: "Former Player",
      role: "Now Playing Professionally"
    },
    {
      quote: "A club that truly lives by its motto 'With God, all things are possible'.",
      author: "Community Leader",
      role: "Anthony Community"
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      <ClubInfo />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient">Why Choose Great King Pokko FA</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just football training - we build character, foster talent, and create champions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300 glow`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "12+", label: "Years of Excellence", icon: <FaStar /> },
                { value: "50+", label: "Active Players", icon: <FaUsers /> },
                { value: "15+", label: "Trophies Won", icon: <GiChampions /> },
                { value: "100+", label: "Matches Played", icon: <GiWhistle /> }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-b from-gray-900/50 to-transparent p-6 rounded-xl border border-club-gold/20">
                  <div className="text-club-gold text-2xl md:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient">Our Journey in Pictures</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Capturing moments of dedication, triumph, and community spirit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden">
                  {/* Image de placeholder - remplacez par vos vraies images */}
                  <div className="w-full h-full bg-gradient-to-br from-club-gold/20 to-black/50 flex items-center justify-center">
                    <div className="text-center p-4">
                      <GiSoccerBall className="text-6xl text-club-gold/50 mx-auto mb-4" />
                      <p className="text-white font-bold">{image.title}</p>
                      <p className="text-gray-400 text-sm mt-2">Image: {image.alt}</p>
                    </div>
                  </div>
                  {/* Pour utiliser de vraies images :
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <h3 className="text-white font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient">Upcoming Events</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for exciting football activities and community events
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-club-gold/10 to-transparent p-6 rounded-2xl border border-club-gold/20 hover:border-club-gold/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-club-gold flex items-center justify-center text-2xl text-black">
                        {event.icon}
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                          <div className="flex items-center gap-2 text-gray-300">
                            <FaCalendarAlt />
                            <span>{event.date}</span>
                            <FaMapMarkerAlt className="ml-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center px-6 py-2 border border-club-gold text-club-gold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 text-sm"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient">What People Say</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from players, parents, and community members about their experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-8 rounded-2xl border border-club-gold/20"
              >
                <div className="text-club-gold text-4xl mb-6">
                  <GiGrowth />
                </div>
                <p className="text-gray-300 italic text-lg mb-6">"{testimonial.quote}"</p>
                <div>
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-club-gold text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-club-gold/20 via-black to-club-gold/20 p-8 md:p-12 rounded-2xl border border-club-gold/30 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Football Journey Today</h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you're a young aspiring player or looking to join our community, Great King Pokko FA welcomes you to be part of our football family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <a
                  href="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/30 text-sm md:text-base"
                >
                  Schedule a Trial Session
                </a>
                <a
                  href="tel:+2348101558759"
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                >
                  Call Us Now
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-8">
                <FaAward className="inline mr-2" />
                Ages 6-18 welcome | Boys & Girls | All skill levels
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;