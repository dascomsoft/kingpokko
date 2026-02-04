import React from 'react';
import { motion } from 'framer-motion';
import { GiCrown, GiCommercialAirplane } from 'react-icons/gi';
import { FaChartLine, FaHandshake, FaHandsHelping, FaBullseye, FaNetworkWired, FaAward, FaUsers, FaStar } from 'react-icons/fa';

const Sponsor = () => {
  const partnershipBenefits = [
    {
      icon: <GiCrown />,
      title: "Premium Brand Visibility",
      description: "Your logo featured on our kits, stadium banners, digital platforms, and match-day promotions reaching thousands of passionate football fans across Nigeria."
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Exposure",
      description: "Access to our growing fanbase through social media, match-day events, television coverage, and community outreach programs throughout Lagos and beyond."
    },
    {
      icon: <FaHandshake />,
      title: "Corporate Networking",
      description: "VIP access to exclusive events, player meet-and-greets, and networking opportunities with business leaders, sports officials, and community stakeholders."
    },
    {
      icon: <FaHandsHelping />,
      title: "CSR Enhancement",
      description: "Align with our community development programs, youth empowerment initiatives, and educational outreach for meaningful social impact and brand goodwill."
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Platinum Partner",
      level: "Principal Partnership",
      features: [
        "Front jersey sponsorship (primary position)",
        "Naming rights for training facility",
        "Executive VIP season tickets package",
        "Exclusive player appearances at corporate events",
        "Digital campaign co-creation and promotion",
        "Annual gala dinner sponsorship",
        "Feature in all club documentaries and publications"
      ],
      color: "from-club-gold to-yellow-600",
      icon: <FaStar className="text-4xl" />
    },
    {
      name: "Gold Partner",
      level: "Official Partner",
      features: [
        "Back jersey sponsorship",
        "Stadium branding in premium locations",
        "VIP match tickets package",
        "Social media features and shoutouts",
        "Event sponsorship rights",
        "Brand mention in match programs",
        "Access to player testimonials"
      ],
      color: "from-white to-gray-300",
      icon: <FaAward className="text-4xl" />
    },
    {
      name: "Silver Partner",
      level: "Community Partner",
      features: [
        "Sleeve sponsorship",
        "Program advertising space",
        "Premium match tickets",
        "Website recognition and link",
        "Community event participation",
        "Training kit branding",
        "Youth program collaboration"
      ],
      color: "from-gray-400 to-gray-600",
      icon: <FaUsers className="text-4xl" />
    }
  ];

  const successStories = [
    {
      quote: "Partnering with Great King Pokko FA has elevated our brand's community engagement and visibility significantly.",
      author: "Corporate Sponsor, 2022"
    },
    {
      quote: "The alignment with grassroots football development has strengthened our CSR initiatives beyond expectations.",
      author: "Community Partner, 2023"
    },
    {
      quote: "Our association with the club's success stories has created powerful marketing content for our brand.",
      author: "Marketing Director, 2024"
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
          <h2 className="text-5xl font-bold mb-6 gold-gradient">Great King Pokko Ltd</h2>
          <p className="text-2xl text-white mb-4">Our Proud Principal Sponsor</p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A strategic partnership built on shared values of excellence, community development, and sporting success that transcends financial support.
          </p>
        </motion.div>

        {/* Sponsor Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-club-gold/10 via-black to-club-gold/10 rounded-2xl p-8 md:p-12 border border-club-gold/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/3">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-club-gold to-yellow-600 rounded-full flex items-center justify-center text-black glow">
                  <GiCrown className="text-8xl" />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h3 className="text-4xl font-bold text-white mb-6">Strategic Alliance for Success</h3>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Great King Pokko Ltd's sponsorship represents a commitment to nurturing local talent and building a legacy of sporting excellence in Nigeria. This partnership enables us to provide world-class facilities, professional coaching, and opportunities for young athletes to reach their full potential.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    As a leading Nigerian corporation, Great King Pokko Ltd shares our vision for community development through sports, making this partnership a perfect alignment of corporate social responsibility and athletic excellence that creates lasting impact beyond the football pitch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 gold-gradient">Why Partner With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-8 rounded-xl border border-white/10 hover:border-club-gold/30 transition-all duration-300 group"
              >
                <div className="text-club-gold mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 gold-gradient">Partnership Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${tier.color} rounded-2xl p-8 h-full relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <div className="text-black bg-black/20 px-3 py-1 rounded-full text-sm font-bold">
                      {tier.name.split(' ')[0]}
                    </div>
                  </div>
                  
                  <div className="text-black mb-6 flex justify-center">
                    {tier.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-black mb-2 text-center">{tier.name}</h4>
                  <p className="text-black/80 text-center mb-6 font-medium">{tier.level}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                        <span className="text-black/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="mailto:demophet2000@yahoo.com?subject=Sponsorship Inquiry"
                    className="inline-block w-full text-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-all duration-300 transform group-hover:-translate-y-1 font-bold"
                  >
                    Inquire About {tier.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12 gold-gradient">Partner Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-8 rounded-xl border border-club-gold/20"
              >
                <div className="text-club-gold mb-4 text-3xl">
                  <GiCommercialAirplane />
                </div>
                <p className="text-gray-300 italic mb-6 text-lg">"{story.quote}"</p>
                <p className="text-club-gold font-bold">{story.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-8 rounded-2xl border border-club-gold/30">
            <h4 className="text-3xl font-bold text-white mb-8 text-center">Our Partnership Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Initial Consultation", desc: "Understanding your brand objectives" },
                { step: "2", title: "Proposal Development", desc: "Customized partnership package" },
                { step: "3", title: "Agreement Finalization", desc: "Mutually beneficial terms" },
                { step: "4", title: "Activation & Review", desc: "Launch and performance assessment" }
              ].map((process, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-club-gold flex items-center justify-center text-2xl font-bold text-black">
                    {process.step}
                  </div>
                  <h5 className="text-xl font-bold text-white mb-2">{process.title}</h5>
                  <p className="text-gray-400">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-club-gold/20 to-transparent p-12 rounded-2xl border border-club-gold/30">
            <h4 className="text-3xl font-bold text-white mb-6">Ready to Join Our Winning Team?</h4>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with Great King Pokko FA and be part of our journey to develop Nigeria's next generation of football stars while achieving your corporate objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:demophet2000@yahoo.com?subject=Partnership Proposal Request"
                className="px-8 py-4 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/50"
              >
                Request Partnership Package
              </a>
              <a
                href="tel:+2348101558759"
                className="px-8 py-4 border-2 border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Schedule Discovery Call
              </a>
            </div>
            <p className="text-gray-400 mt-8 text-sm">
              All partnership inquiries are treated with strict confidentiality. Contact us to discuss custom partnership solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;