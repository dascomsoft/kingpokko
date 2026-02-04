import React from 'react';
import { motion } from 'framer-motion';
import { GiTrophy, GiSoccerField, GiTeamUpgrade, GiTargeted } from 'react-icons/gi';
import { FaCross, FaUsers } from 'react-icons/fa';

const ClubInfo = () => {
  const stats = [
    { icon: <GiTrophy />, value: "2+", label: "Trophies Won", color: "from-yellow-500 to-club-gold" },
    { icon: <FaUsers />, value: "50+", label: "Active Players", color: "from-white to-green-700" },
    { icon: <GiSoccerField />, value: "100+", label: "Matches Played", color: "from-club-gold to-slate-600" },
  ];

  const values = [
    {
      icon: <FaCross className="text-4xl" />,
      title: "Faith & Spirituality",
      description: "Guided by our motto 'With God, all things are possible', we integrate Christian values into our training and gameplay, fostering spiritual growth alongside athletic excellence."
    },
    {
      icon: <GiTeamUpgrade className="text-4xl" />,
      title: "Team Excellence",
      description: "We believe in collective success. Our philosophy emphasizes teamwork, mutual respect, and developing players who understand that the team's victory comes before individual glory."
    },
    {
      icon: <GiTargeted className="text-4xl" />,
      title: "Competitive Edge",
      description: "We strive for excellence in every match, combining tactical intelligence with physical prowess to dominate the pitch and maintain our winning legacy."
    }
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
          <h2 className="text-5xl font-bold mb-6 gold-gradient">Our Legacy & Vision</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since 2011, Great King Pokko FA has been more than just a football club - we're a family united by passion, faith, and excellence.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-4xl glow`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-club-gold/20 hover-glow transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-club-gold mb-6">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become Nigeria's premier football academy that produces world-class athletes grounded in Christian values, 
              known for exceptional talent development, sportsmanship, and community impact. We envision a future where 
              every player reaches their God-given potential both on and off the field.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-club-gold/20 hover-glow transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-club-gold mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To develop exceptional football talent through professional coaching, state-of-the-art facilities, 
              and character-building programs. We commit to nurturing well-rounded individuals who excel in sports, 
              uphold Christian principles, contribute positively to society, and inspire the next generation of athletes.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12 gold-gradient">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-8 rounded-xl border border-white/10 hover:border-club-gold/30 transition-all duration-300"
              >
                <div className="text-club-gold mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 text-center">{value.title}</h4>
                <p className="text-gray-400 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Club Colors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-2xl font-bold text-white mb-8">Our Colors</h4>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-club-gold rounded-full mx-auto mb-3 glow"></div>
              <p className="font-semibold">Gold</p>
              <p className="text-sm text-gray-400">Excellence & Victory</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3"></div>
              <p className="font-semibold">White</p>
              <p className="text-sm text-gray-400">Purity & Integrity</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-3 border border-gray-700"></div>
              <p className="font-semibold">Black</p>
              <p className="text-sm text-gray-400">Strength & Resilience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClubInfo;