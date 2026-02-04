import React from 'react';
import { motion } from 'framer-motion';
import { GiWhistle, GiAchievement, GiTrophy, GiSoccerKick, GiStopwatch } from 'react-icons/gi';
import { FaUserGraduate, FaFutbol, FaRunning, FaClipboardCheck, FaHeartbeat, FaBrain, FaUsers } from 'react-icons/fa';

const CoachingStaff = () => {
  const coaches = [
    {
      name: "Coach Godwin",
      role: "Head Coach",
      experience: "8+ Years",
      specialty: "Tactical Strategy & Player Development",
      bio: "Licensed coach with extensive experience in youth development and professional football. Coach Godwin's philosophy combines technical excellence with character building, having trained multiple players who now compete in top-tier leagues.",
      achievements: [
        "NFF Certified Advanced Coach",
        "Led team to 3 regional championships",
        "Developed 5 professional league players",
        "Specialized in youth talent identification"
      ],
      icon: <GiWhistle />,
      color: "from-club-gold to-yellow-600",
      image: "/coach-godwin.jpg" // Vous pouvez ajouter des images réelles plus tard
    },
    {
      name: "Assistant Coach Ekundayo",
      role: "Assistant Coach & Fitness Specialist",
      experience: "6+ Years",
      specialty: "Fitness Conditioning & Technical Skills",
      bio: "Former professional athlete turned coach, Ekundayo specializes in physical conditioning and technical skill development. His innovative training methods have significantly improved team performance and injury prevention.",
      achievements: [
        "Sports Science Degree",
        "Specialist in injury prevention",
        "Technical skills development expert",
        "Strength and conditioning certification"
      ],
      icon: <FaRunning />,
      color: "from-white to-gray-300",
      image: "/coach-ekundayo.jpg"
    }
  ];

  const trainingPhilosophy = [
    {
      icon: <FaUserGraduate />,
      title: "Holistic Development",
      description: "We focus on developing complete athletes - technically skilled, tactically intelligent, physically strong, and mentally resilient."
    },
    {
      icon: <GiAchievement />,
      title: "Excellence in Execution",
      description: "Every training session is designed to push boundaries and achieve measurable improvement in performance."
    },
    {
      icon: <FaFutbol />,
      title: "Modern Methodology",
      description: "Incorporating the latest sports science and data analytics to optimize player performance and team strategy."
    }
  ];

  const methodologyPoints = [
    {
      icon: <FaClipboardCheck />,
      title: "Data-Driven Analysis",
      description: "Using performance metrics and video analysis"
    },
    {
      icon: <FaHeartbeat />,
      title: "Personalized Training",
      description: "Individual development plans for each player"
    },
    {
      icon: <FaBrain />,
      title: "Sports Psychology",
      description: "Mental resilience and focus training"
    },
    {
      icon: <GiStopwatch />,
      title: "Recovery Optimization",
      description: "Science-based recovery protocols"
    }
  ];

  const coachingStats = [
    { value: "14+", label: "Years Combined Experience" },
    { value: "50+", label: "Players Developed" },
    { value: "15+", label: "Professional Players Trained" },
    { value: "3", label: "Regional Championships" }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient">Masterminds Behind The Success</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our coaching staff combines extensive experience, modern methodology, and a passion for developing champions both on and off the field.
          </p>
        </motion.div>

        {/* Coaching Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coachingStats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-b from-gray-900/50 to-transparent p-6 rounded-xl border border-club-gold/20">
                <div className="text-3xl md:text-4xl font-bold text-club-gold mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coaches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-club-gold/20 hover:border-club-gold/50 transition-all duration-500 hover-glow h-full">
                {/* Coach Header */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${coach.color}`}>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center text-3xl md:text-4xl">
                      {coach.icon}
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-black">{coach.name}</h3>
                      <p className="text-lg md:text-xl opacity-90 text-black">{coach.role}</p>
                      <p className="text-base md:text-lg opacity-80 text-black">{coach.experience} Experience</p>
                    </div>
                  </div>
                </div>

                {/* Coach Body */}
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold text-club-gold mb-2">Specialty</h4>
                    <p className="text-gray-300">{coach.specialty}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-bold text-club-gold mb-2">Bio</h4>
                    <p className="text-gray-400 leading-relaxed">{coach.bio}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg md:text-xl font-bold text-club-gold mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-club-gold rounded-full mt-2"></div>
                          <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Coach Button */}
                  <div className="pt-6 border-t border-gray-800">
                    <a
                      href={`mailto:demophet2000@yahoo.com?subject=Inquiry for ${coach.name}`}
                      className="inline-flex items-center justify-center w-full px-6 py-3 border border-club-gold text-club-gold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                    >
                      Contact {coach.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-gradient">Our Training Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPhilosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-6 md:p-8 rounded-xl border border-white/10 hover:border-club-gold/30 transition-all duration-300 group"
              >
                <div className="text-club-gold mb-6 text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coaching Methodology */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-6 md:p-8 rounded-2xl border border-club-gold/20">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Modern Coaching Approach</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologyPoints.map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-club-gold/20 flex items-center justify-center text-club-gold">
                    {item.icon}
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-club-gold/20 to-transparent p-8 md:p-12 rounded-2xl border border-club-gold/30">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Interested in Our Coaching?</h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a player looking to develop your skills or a parent interested in our youth programs, our coaching staff is here to help you reach your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a
                href="/contact"
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/30 text-sm md:text-base"
              >
                Contact Our Coaches
              </a>
              <a
                href="tel:+2348101558759"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                Schedule Training Session
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingStaff;