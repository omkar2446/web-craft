import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { SplitText, TiltCard } from '../utils/animations';
import './SocialMediaMarketing.css';

const SocialMediaMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Content Creation",
      desc: "Reels, carousels, and eye-catching graphics that stop the scroll and demand attention.",
      color: "card-peach",
      icon: "fa-solid fa-camera-retro"
    },
    {
      title: "Community Management",
      desc: "We don't just post; we engage. We reply to comments, DMs, and build your loyal tribe.",
      color: "card-blue",
      icon: "fa-solid fa-users"
    },
    {
      title: "Paid Ad Campaigns",
      desc: "Laser-targeted Meta & LinkedIn ads designed to convert views into actual paying customers.",
      color: "card-mint",
      icon: "fa-solid fa-bullseye"
    },
    {
      title: "Analytics & Growth",
      desc: "Data-driven decisions. We track the metrics that matter and constantly optimize for reach.",
      color: "card-yellow",
      icon: "fa-solid fa-chart-line"
    }
  ];

  return (
    <div className="smm-page-container">
      <Navbar />
      
      {/* SMM Hero Section */}
      <section className="smm-hero-section">
        <motion.span
          className="heading-badge smm-badge"
          style={{ backgroundColor: '#f7b8d9', border: '1px solid #3b001f' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Social Media Marketing
        </motion.span>
        
        <h1 className="smm-hero-title">
          <SplitText text="DOMINATE" baseDelay={0.1} />
          <br />
          <SplitText text="YOUR FEED" baseDelay={0.4} />
        </h1>
        
        <motion.p 
          className="smm-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          WebCraft Studio is the top digital marketing team in Loni and Pune. We don't just post. We build communities, spark conversations, and drive real business growth. Whether you need a standalone social media powerhouse or an integrated digital strategy, our Loni-based experts have you covered.
        </motion.p>
      </section>

      {/* Flexible Offering Banner */}
      <div className="smm-flexible-banner">
        <motion.div 
          className="flexible-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <i className="fa-solid fa-bolt" style={{ fontSize: '32px', marginBottom: '15px' }}></i>
          <h3>Web + Social? Or Just Social?</h3>
          <p>We are totally flexible. Hire the best web developer in Loni to build your website AND run your socials, or just bring on our top digital marketing team in Pune to completely take over your Instagram, LinkedIn, and Facebook marketing. You choose the firepower.</p>
        </motion.div>
      </div>

      {/* SMM Features */}
      <section className="smm-features-section">
        <div className="smm-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className={`smm-feature-card ${feature.color}`}>
                <div className="smm-icon-wrapper">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="smm-feature-title">{feature.title}</h3>
                <p className="smm-feature-desc">{feature.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="bottom-integrated-section">
        <div className="centered-card-container">
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
