import React from 'react';
import { motion } from 'framer-motion';
import { GiCrown, GiCommercialAirplane } from 'react-icons/gi';
import { FaChartLine, FaHandshake, FaHandsHelping, FaBullseye, FaNetworkWired, FaAward, FaUsers, FaStar } from 'react-icons/fa';

const Sponsor = () => {
  const partnershipBenefits = [
    {
      icon: <GiCrown />,
      title: "Premium Brand Visibility",
      description: "Your logo featured on our kits, stadium banners, digital platforms, and match-day promotions."
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Exposure",
      description: "Access to our growing fanbase through social media, match-day events, and community programs."
    },
    {
      icon: <FaHandshake />,
      title: "Corporate Networking",
      description: "VIP access to exclusive events and networking opportunities with business leaders."
    },
    {
      icon: <FaHandsHelping />,
      title: "CSR Enhancement",
      description: "Align with community development programs for meaningful social impact."
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Platinum Partner",
      level: "Principal Partnership",
      features: [
        "Front jersey sponsorship",
        "Naming rights for training facility",
        "Executive VIP season tickets",
        "Exclusive player appearances",
        "Digital campaign co-creation",
        "Annual gala dinner sponsorship",
        "Feature in all publications"
      ],
      color: "from-club-gold to-yellow-600",
      icon: <FaStar />
    },
    {
      name: "Gold Partner",
      level: "Official Partner",
      features: [
        "Back jersey sponsorship",
        "Stadium branding",
        "VIP match tickets package",
        "Social media features",
        "Event sponsorship rights",
        "Brand mention in programs",
        "Player testimonials access"
      ],
      color: "from-white to-gray-300",
      icon: <FaAward />
    },
    {
      name: "Silver Partner",
      level: "Community Partner",
      features: [
        "Sleeve sponsorship",
        "Program advertising",
        "Premium match tickets",
        "Website recognition",
        "Community events",
        "Training kit branding",
        "Youth program collaboration"
      ],
      color: "from-gray-400 to-gray-600",
      icon: <FaUsers />
    }
  ];

  const successStories = [
    {
      quote: "Partnering with Great King Pokko FA has elevated our brand's community engagement significantly.",
      author: "Corporate Sponsor, 2022"
    },
    {
      quote: "The alignment with grassroots football has strengthened our CSR initiatives beyond expectations.",
      author: "Community Partner, 2023"
    },
    {
      quote: "Our association has created powerful marketing content for our brand.",
      author: "Marketing Director, 2024"
    }
  ];

  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10">
        {/* Header with responsive text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-18"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4 gold-gradient leading-tight">
            Great King Pokko Ltd
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 xs:mb-3 sm:mb-4 font-medium">
            Our Proud Principal Sponsor
          </p>
          <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-club-gold to-transparent mx-auto mb-3 xs:mb-4 sm:mb-5"></div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            A strategic partnership built on shared values of excellence, community development, and sporting success.
          </p>
        </motion.div>

        {/* Sponsor Showcase - Responsive layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-18 xl:mb-20"
        >
          <div className="bg-gradient-to-r from-club-gold/10 via-black to-club-gold/10 rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-club-gold/30 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xs:gap-8 sm:gap-10 md:gap-12">
              {/* Logo Section */}
              <div className="w-full lg:w-2/5 xl:w-1/3">
                <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto bg-gradient-to-br from-club-gold to-yellow-600 rounded-full flex items-center justify-center text-black glow shadow-2xl">
                  <GiCrown className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />
                </div>
                <div className="mt-4 xs:mt-5 text-center">
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg text-club-gold font-bold">Since 2011</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Official Principal Sponsor</p>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-3/5 xl:w-2/3">
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Strategic Alliance for Success
                </h3>
                <div className="space-y-3 xs:space-y-4">
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                    Great King Pokko Ltd's sponsorship represents a commitment to nurturing local talent and building a legacy of sporting excellence in Nigeria. This partnership enables world-class facilities and professional coaching.
                  </p>
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                    As a leading Nigerian corporation, Great King Pokko Ltd shares our vision for community development through sports, creating lasting impact beyond the football pitch.
                  </p>
                </div>
                <div className="mt-4 xs:mt-5 sm:mt-6 flex flex-wrap gap-2 xs:gap-3">
                  {["Youth Development", "Community Impact", "Excellence", "Innovation"].map((tag, idx) => (
                    <span key={idx} className="px-2 xs:px-3 py-1 bg-club-gold/20 text-club-gold text-[10px] xs:text-xs sm:text-sm rounded-full border border-club-gold/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partnership Benefits - Responsive grid */}
        <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-18">
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-6 xs:mb-8 sm:mb-10 gold-gradient">
            Why Partner With Us?
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl border border-white/10 hover:border-club-gold/30 transition-all duration-300 group hover:translate-y-[-2px] h-full"
              >
                <div className="text-club-gold mb-3 xs:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white mb-2 xs:mb-3 leading-tight">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Tiers - Responsive cards */}
        <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-18">
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-6 xs:mb-8 sm:mb-10 gold-gradient">
            Partnership Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group h-full"
              >
                <div className={`bg-gradient-to-br ${tier.color} rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl`}>
                  {/* Tier Badge */}
                  <div className="absolute top-3 xs:top-4 right-3 xs:right-4">
                    <div className="text-black bg-black/20 px-2 xs:px-3 py-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold">
                      {tier.name.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-black mb-4 xs:mb-5 flex justify-center">
                    <div className="text-3xl xs:text-4xl sm:text-5xl">
                      {tier.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 xs:mb-2 text-center leading-tight">
                    {tier.name}
                  </h4>
                  <p className="text-black/80 text-center mb-4 xs:mb-5 font-medium text-xs xs:text-sm sm:text-base">
                    {tier.level}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 mb-6 xs:mb-7 sm:mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-black rounded-full mt-1.5 xs:mt-2 mr-2 xs:mr-3 flex-shrink-0"></div>
                        <span className="text-black/90 text-[10px] xs:text-xs sm:text-sm leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a
                    href="mailto:demophet2000@yahoo.com?subject=Sponsorship Inquiry"
                    className="inline-block w-full text-center px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 bg-black text-white rounded-full hover:bg-gray-900 transition-all duration-300 active:scale-95 font-medium text-xs xs:text-sm sm:text-base"
                  >
                    Inquire About {tier.name.split(' ')[0]}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories - Responsive testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 xs:mb-12 sm:mb-14 md:mb-16"
        >
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 xs:mb-8 sm:mb-10 gold-gradient">
            Partner Testimonials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                className="bg-gradient-to-b from-gray-900/50 to-transparent p-4 xs:p-5 sm:p-6 md:p-7 rounded-lg xs:rounded-xl border border-club-gold/20 hover:border-club-gold/40 transition-all duration-300 h-full"
              >
                <div className="text-club-gold mb-3 xs:mb-4 text-2xl xs:text-3xl">
                  <GiCommercialAirplane />
                </div>
                <p className="text-gray-300 italic mb-4 xs:mb-5 text-xs xs:text-sm sm:text-base leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="border-t border-gray-800 pt-3 xs:pt-4">
                  <p className="text-club-gold font-bold text-xs xs:text-sm sm:text-base">
                    {story.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Process - Responsive steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 xs:mb-12 sm:mb-14 md:mb-16"
        >
          <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl border border-club-gold/30">
            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-5 xs:mb-6 sm:mb-7 text-center">
              Our Partnership Process
            </h4>
            <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-5">
              {[
                { step: "1", title: "Consultation", desc: "Understand objectives" },
                { step: "2", title: "Proposal", desc: "Customized package" },
                { step: "3", title: "Agreement", desc: "Finalize terms" },
                { step: "4", title: "Activation", desc: "Launch & review" }
              ].map((process, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto mb-2 xs:mb-3 rounded-full bg-club-gold flex items-center justify-center text-lg xs:text-xl sm:text-2xl font-bold text-black group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h5 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white mb-1 xs:mb-2 leading-tight">
                    {process.title}
                  </h5>
                  <p className="text-gray-400 text-[10px] xs:text-xs sm:text-sm leading-tight">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Ultra responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-club-gold/20 to-transparent p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-12 rounded-lg xs:rounded-xl sm:rounded-2xl border border-club-gold/30 shadow-xl">
            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight">
              Ready to Join Our Winning Team?
            </h4>
            <p className="text-gray-300 mb-4 xs:mb-5 sm:mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
              Partner with Great King Pokko FA and be part of our journey to develop Nigeria's next generation of football stars while achieving your corporate objectives.
            </p>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-5 justify-center">
              <a
                href="mailto:demophet2000@yahoo.com?subject=Partnership Proposal Request"
                className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-club-gold to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-club-gold transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 text-xs xs:text-sm sm:text-base md:text-lg w-full xs:w-auto text-center"
              >
                Request Partnership Package
              </a>
              <a
                href="tel:+2348101558759"
                className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 border border-club-gold text-club-gold font-bold rounded-full hover:bg-club-gold hover:text-black transition-all duration-300 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg w-full xs:w-auto text-center"
              >
                Schedule Discovery Call
              </a>
            </div>
            <p className="text-gray-400 mt-4 xs:mt-5 text-[10px] xs:text-xs sm:text-sm">
              All partnership inquiries are treated with strict confidentiality. Contact us for custom solutions.
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <div className="mt-8 xs:mt-10 text-center">
          <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
            Email: <a href="mailto:demophet2000@yahoo.com" className="text-club-gold">demophet2000@yahoo.com</a> | 
            Phone: <a href="tel:+2348101558759" className="text-club-gold">+234 810 155 8759</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;