import React from 'react';
import CoachingStaff from '../components/CoachingStaff';
import { motion } from 'framer-motion';

const CoachingStaffPage = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gold-gradient">Meet Our Coaches</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              The Masterminds Behind Our Success
            </p>
            <div className="inline-block bg-gradient-to-r from-club-gold/20 to-transparent px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-club-gold/30">
              <p className="text-lg md:text-xl">
                8+ Years Combined Experience | Licensed Coach | Player Development Specialists
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CoachingStaff />
    </div>
  );
};

export default CoachingStaffPage;