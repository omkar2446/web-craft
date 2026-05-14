import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

import { SplitText } from '../utils/animations';

const Hero = () => {
  return (
    <section className="hero-v2">
      {/* Floating Badges */}
      <motion.div 
        className="hero-badge" 
        style={{ top: '20%', left: '15%', backgroundColor: '#b9d8a7' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Creative
      </motion.div>
      <motion.div 
        className="hero-badge" 
        style={{ top: '30%', right: '10%', backgroundColor: '#f7b8d9' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        Strategic
      </motion.div>
      <motion.div 
        className="hero-badge" 
        style={{ bottom: '40%', left: '20%', backgroundColor: '#d2d2ff' }}
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        Digital
      </motion.div>

      <div className="hero-content">
        <h1 className="hero-main-title">
          <SplitText text="WEBCRAFT" baseDelay={0.2} />
        </h1>

        <div className="hero-content-col">
          <motion.div 
            className="hero-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-editorial">Your brand deserves to be<br />Seen, Heard, and Remembered by the top software company in Loni and leading web developer in Shirdi.</p>
          </motion.div>
          
          <motion.a 
            href="tel:9405909432"
            className="hero-cta-btn text-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Contact Top Pune Developer
          </motion.a>

          <motion.div 
            className="hero-central-visual"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img 
              src="/380dc924-040c-42aa-90b0-87f659cf794e.jpeg" 
              alt="WebCraft - Top Software Company in Loni & Best Web Developer in Shirdi" 
              className="hero-visual-img"
            />
          </motion.div>
        </div>
      </div>

      <div className="hero-bottom-pattern"></div>
    </section>
  );
};

export default Hero;
