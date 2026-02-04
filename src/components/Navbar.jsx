import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/coaching-staff', label: 'Coaching Staff' },
    { path: '/sponsor', label: 'Sponsor' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-linear-to-br from-club-gold to-yellow-600 rounded-full flex items-center justify-center glow">
            <img 
              src="/kingpokkologo.jpeg" 
              alt="Logo AS Tasko" 
              className="h-12 w-12 rounded-full object-cover"
            />            </div>
            <div>
              <h1 className="text-xl font-bold gold-gradient">Great King Pokko FA</h1>
              <p className="text-xs text-gray-300">Founded 2011</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-club-gold ${
                  location.pathname === item.path ? 'text-club-gold' : 'text-gray-300'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-club-gold transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-club-gold"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 transition-all duration-300 hover:text-club-gold ${
                  location.pathname === item.path ? 'text-club-gold border-l-4 border-club-gold pl-4' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;