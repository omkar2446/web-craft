import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];
  const footerSections = [
    { label: 'PHONE', value: <a href="tel:9405909432" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9405909432 <br /> +91 9307919092</a> },

    { label: 'Email', value: <a href="mailto:webcraft.studio003@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>webcraft.studio003@gmail.com</a> },
    {
      label: 'Address',
      value: <>413714<br />LONI,<br />AHILYANAGAR<br />MAHARASHTRA</>
    },
    {
      label: 'Opening Hours',
      value: <>Mon to Sat: 9.00am - 8.30pm<br /></>
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Left: Contact Info — each block staggers in */}
        <div className="footer-left">
          {footerSections.map((section, i) => (
            <motion.div
              key={i}
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <span className="footer-label">{section.label}</span>
              <span className="footer-value">{section.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Right: Nav links — each stagger from the right */}
        <div className="footer-right">
          {footerLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              whileHover={{ x: 6, transition: { duration: 0.15 } }}
            >
              <Link to={link.path} className="footer-link">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Massive WEBCRAFT text — scale in from center */}
      <div className="massive-text-container">
        <motion.h2
          className="massive-text"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          WEBCRAFT
        </motion.h2>
      </div>

      {/* Bottom bar — fade in last */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="bottom-text">Build it with the best Web Developer in Loni</span>
        <span className="bottom-text">@webcraft-studio | Top Ahilyanagar's Digital Agency</span>
      </motion.div>
    </footer>
  );
};

export default Footer;
