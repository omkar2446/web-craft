import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <Services />
    </motion.div>
  );
};

export default ServicesPage;
