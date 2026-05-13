import React from 'react';
import Pricing from '../components/Pricing';
import { motion } from 'framer-motion';

const PricingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <Pricing />
    </motion.div>
  );
};

export default PricingPage;
