import React from 'react';
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Club' },
    { path: '/coaching-staff', label: 'Coaching Staff' },
    { path: '/sponsor', label: 'Our Sponsor' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', url: '#' },
    { icon: <FaTwitter />, label: 'Twitter', url: '#' },
    { icon: <FaInstagram />, label: 'Instagram', url: '#' },
    { icon: <FaYoutube />, label: 'YouTube', url: '#' },
  ];

  const contactLinks = [
    { icon: <FaEnvelope />, text: 'demophet2000@yahoo.com', url: 'mailto:demophet2000@yahoo.com' },
    { icon: <FaWhatsapp />, text: '+234 810 155 8759', url: 'https://wa.me/2348101558759' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-club-gold to-yellow-600 rounded-full flex items-center justify-center">
                <GiSoccerBall className="text-2xl text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Great King Pokko FA</h3>
                <p className="text-sm text-gray-400">Since 2011</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Developing champions on and off the field through excellence, faith, and community.
            </p>
            <p className="text-club-gold font-bold italic">
              "With God, all things are possible"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-club-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-club-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-club-gold transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-club-gold/20 transition-all duration-300">
                    {contact.icon}
                  </div>
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-lg font-semibold text-white mb-3">Training Ground</h5>
              <p className="text-gray-400">
                The Anthony Recreation Center<br />
                Adebayo Mokuolu Street, Anthony<br />
                Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-club-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-club-gold/10 to-transparent p-6 rounded-xl border border-club-gold/20">
              <h5 className="text-lg font-bold text-white mb-3">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for updates on matches, trials, and events.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-lg focus:outline-none focus:border-club-gold text-white"
                />
                <button className="px-4 py-2 bg-club-gold text-black font-bold rounded-r-lg hover:bg-yellow-500 transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Great King Pokko FA. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-club-gold"></div>
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="w-3 h-3 rounded-full bg-black border border-gray-700"></div>
              </div>
              <p className="text-gray-500 text-sm">
                Colors: Gold, White & Black
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;