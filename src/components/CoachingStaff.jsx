import React from 'react';
import { motion } from 'framer-motion';
import { GiWhistle, GiAchievement, GiTrophy, GiSoccerKick, GiStopwatch } from 'react-icons/gi';
import { FaUserGraduate, FaFutbol, FaRunning, FaClipboardCheck, FaHeartbeat, FaBrain, FaUsers } from 'react-icons/fa';

const CoachingStaff = () => {
  const coaches = [
    {
      name: "Coach Godwin",
      role: "Head Coach",
      experience: "5+ Years",
      specialty: "Tactical Strategy & Player Development",
      bio: "Licensed coach with extensive experience in youth development and professional football. Coach Godwin's philosophy combines technical excellence with character building.",
      achievements: [
        "NFF Certified Advanced Coach",
        "Led team to 3 regional championships",
        "Developed 5 professional league players",
        "Specialized in youth talent identification"
      ],
      icon: <GiWhistle />,
      color: "from-club-gold to-yellow-600",
      image: "/coach-godwin.jpg"
    },
    {
      name: "Assistant Coach Ekundayo",
      role: "Assistant Coach & Fitness Specialist",
      experience: "3+ Years",
      specialty: "Fitness Conditioning & Technical Skills",
      bio: "Former professional athlete turned coach, Ekundayo specializes in physical conditioning and technical skill development.",
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
      description: "Every training session is designed to push boundaries and achieve measurable improvement."
    },
    {
      icon: <FaFutbol />,
      title: "Modern Methodology",
      description: "Incorporating the latest sports science and data analytics to optimize player performance."
    }
  ];

  const methodologyPoints = [
    {
      icon: <FaClipboardCheck />,
      title: "Data-Driven Analysis",
      description: "Performance metrics and video analysis"
    },
    {
      icon: <FaHeartbeat />,
      title: "Personalized Training",
      description: "Individual development plans"
    },
    {
      icon: <FaBrain />,
      title: "Sports Psychology",
      description: "Mental resilience training"
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
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header - Optimized for all screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-1 xs:px-2"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 gold-gradient leading-tight">
            Masterminds Behind The Success
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Our coaching staff combines extensive experience, modern methodology, and a passion for developing champions.
          </p>
        </motion.div>

        {/* Coaching Stats - Optimized grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-30px" }}
          className="mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {coachingStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-gradient-to-b from-gray-900/50 to-transparent p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-xl border border-club-gold/20 hover:border-club-gold/40 transition-all duration-300"
              >
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-club-gold mb-1 xs:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coaches Section - Perfect for all devices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-10 xs:mb-12 sm:mb-14 md:mb-16">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group w-full"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden border border-club-gold/20 hover:border-club-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-club-gold/10 h-full flex flex-col">
                {/* Coach Header */}
                <div className={`p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-r ${coach.color} flex-shrink-0`}>
                  <div className="flex flex-col xs:flex-row items-center gap-3 xs:gap-4 sm:gap-5">
                    <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-black/30 flex items-center justify-center text-xl xs:text-2xl sm:text-3xl md:text-4xl">
                      {coach.icon}
                    </div>
                    <div className="text-center xs:text-left flex-1">
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
                        {coach.name}
                      </h3>
                      <p className="text-sm xs:text-base sm:text-lg md:text-xl opacity-90 text-black">
                        {coach.role}
                      </p>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg opacity-80 text-black">
                        {coach.experience} Experience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coach Body */}
                <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 flex-grow flex flex-col">
                  <div className="mb-3 xs:mb-4">
                    <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-club-gold mb-1">
                      Specialty
                    </h4>
                    <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                      {coach.specialty}
                    </p>
                  </div>

                  <div className="mb-3 xs:mb-4">
                    <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-club-gold mb-1">
                      Bio
                    </h4>
                    <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed">
                      {coach.bio}
                    </p>
                  </div>

                  <div className="mb-4 xs:mb-5 sm:mb-6 flex-grow">
                    <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-club-gold mb-2 xs:mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 xs:space-y-2">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-club-gold rounded-full mt-1.5 xs:mt-2 mr-2 xs:mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-xs xs:text-sm sm:text-base">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Coach Button */}
                  <div className="pt-3 xs:pt-4 border-t border-gray-800 mt-auto">
                    <a
                      href={`mailto:demophet2000@yahoo.com?subject=Inquiry for ${coach.name}`}
                      className="inline-flex items-center justify-center w-full px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 border border-club-gold text-club-gold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg font-medium"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 xs:mb-12 sm:mb-14 md:mb-16"
        >
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 gold-gradient">
            Our Training Philosophy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {trainingPhilosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl border border-white/10 hover:border-club-gold/30 transition-all duration-300 group h-full"
              >
                <div className="text-club-gold mb-3 xs:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 xs:mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coaching Methodology */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 xs:mb-10 sm:mb-12 md:mb-14"
        >
          <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl border border-club-gold/20">
            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 text-center">
              Modern Coaching Approach
            </h4>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5">
              {methodologyPoints.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-2 xs:p-3 sm:p-4 hover:bg-club-gold/5 rounded-lg transition-all duration-300"
                >
                  <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 xs:mb-3 rounded-full bg-club-gold/20 flex items-center justify-center text-club-gold text-base xs:text-lg sm:text-xl">
                    {item.icon}
                  </div>
                  <h5 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white mb-1 xs:mb-2 leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Perfect for all devices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-club-gold/20 to-transparent p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-lg xs:rounded-xl sm:rounded-2xl border border-club-gold/30">
            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight">
              Interested in Our Coaching?
            </h4>
            <p className="text-gray-300 mb-4 xs:mb-5 sm:mb-6 max-w-xl lg:max-w-2xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
              Whether you're a player looking to develop your skills or a parent interested in our youth programs, our coaching staff is here to help you reach your potential.
            </p>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-5 justify-center">
              <a
                href="/contact"
                className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg w-full xs:w-auto text-center shadow-lg hover:shadow-xl hover:shadow-yellow-500/30"
              >
                Contact Our Coaches
              </a>
              <a
                href="tel:+2348101558759"
                className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 border border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg w-full xs:w-auto text-center"
              >
                Schedule Training Session
              </a>
            </div>
            <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm mt-4 xs:mt-5">
              <span className="text-club-gold">✦</span> Available for individual and group sessions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingStaff;