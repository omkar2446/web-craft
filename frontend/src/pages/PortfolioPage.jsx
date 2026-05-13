import React from 'react';
import Portfolio from '../components/Portfolio';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;
