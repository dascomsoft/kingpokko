import React from 'react';
import Sponsor from '../components/Sponsor';
import { motion } from 'framer-motion';

const SponsorPage = () => {
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
            <h1 className="text-6xl font-bold mb-6 gold-gradient">Our Sponsors & Partners</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Building Success Together
            </p>
            <div className="inline-block bg-gradient-to-r from-club-gold/20 to-transparent px-8 py-4 rounded-2xl border border-club-gold/30">
              <p className="text-xl">
                Strategic Partnerships Driving Football Excellence in Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Sponsor />
    </div>
  );
};

export default SponsorPage;