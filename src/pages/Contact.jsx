import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
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
            <h1 className="text-6xl font-bold mb-6 gold-gradient">Contact Us</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Get in Touch With Great King Pokko FA
            </p>
            <div className="inline-block bg-gradient-to-r from-club-gold/20 to-transparent px-8 py-4 rounded-2xl border border-club-gold/30">
              <p className="text-xl">
                We're here to answer your questions and welcome you to our football family
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Contact;