import React from 'react';
import './Team.css';
import { User, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
  const members = [
    {
      name: "omkar",
      role: "Product Design",
      color: "card-peach",
      photo: "/omkar.jpeg"
    },
    {
      name: "sarthak",
      role: "Strategy & Marketing",
      color: "card-blue",
      photo: "/sarthak.jpeg"
    },
    {
      name: "yash",
      role: "Content Strategist",
      color: "card-pink",
      photo: "/yash.jpeg"
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="section-heading-wrapper">
        <motion.span
          className="heading-badge team-badge"
          style={{ backgroundColor: '#d2d2ff' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Team
        </motion.span>
        <motion.h2
          className="team-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          the wizards<br />behind it all
        </motion.h2>
      </div>
      <div className="team-container">
        <motion.div
          className="team-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <p>
            Designing and creating work that actually makes people feel<br />
            something. No fluff, no fuss, just fun, friendly, scroll-stopping creativity.
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className={`team-card ${member.color}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <div className="photo-frame">
                {/* SVG Flower/Star shape background */}
                <svg viewBox="0 0 100 100" className="photo-shape">
                  <path d="M50 0 C60 20 80 20 100 30 C80 40 80 60 100 70 C80 80 60 80 50 100 C40 80 20 80 0 70 C20 60 20 40 0 30 C20 20 40 20 50 0 Z" />
                </svg>
                <img src={member.photo} alt={member.name} className="team-photo" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-socials">
                <a href="#" className="social-icon"><User size={16} /></a>
                <a href="#" className="social-icon"><Mail size={16} /></a>
                <a href="#" className="social-icon"><Globe size={16} /></a>
              </div>
            </motion.div>
          ))}

          {/* Join Us Card */}

        </motion.div>
      </div>
    </section>
  );
};

export default Team;
