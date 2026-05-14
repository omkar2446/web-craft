import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Team', id: 'team' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar-v2">
      <motion.a
        href="/"
        className="nav-logo"
        onClick={(e) => { 
          if (window.location.pathname === '/') {
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.06 }}
      >
        <img src="/logo.png" alt="WebCraft Studio" className="nav-logo-img" />
      </motion.a>

      <motion.button 
        className="menu-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? '✕' : 'MENU'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="dropdown-menu"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {links.map((link, index) => (
              <motion.a 
                key={index} 
                href={`#${link.id}`} 
                className="dropdown-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                whileHover={{ x: 8, color: '#f6d94e' }}
              >
                <span className="link-num">0{index + 1}</span>
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
