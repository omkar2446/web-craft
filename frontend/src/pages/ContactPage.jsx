import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;
