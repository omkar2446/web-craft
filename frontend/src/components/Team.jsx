import React from "react";
import "./Team.css";
import { User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const members = [
    {
      name: "omkar",
      role: "Full Stack Developer ",
      color: "card-peach",
      photo: "/omkar.jpeg",
      instagram: "https://instagram.com/omkartambe24_46",
      email: "mailto:otambe655@gmail.com",
      linkedin: "https://www.linkedin.com/in/omkar2446/",
    },
    {
      name: "sarthak",
      role: "Full Stack Developer",
      color: "card-blue",
      photo: "/sarthak.png",
      instagram: "https://instagram.com/sarthak_tanpure_9290",
      email: "mailto:sarthaktanpure255@gmail.com",
      linkedin: "http://linkedin.com/in/sarthak-tanpure-a74b5133a/",
    },
    {
      name: "yash",
      role: "Branding & Digital Marketing Specialist",
      color: "card-pink",
      photo: "/yash.jpg.jpeg",
      instagram: "https://instagram.com/yashtambe1",
      email: "mailto:tambeyash90@gmail.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "atharv",
      role: "Social Media Manager & Content Strategist",
      color: "card-pink",
      photo: "/Atharv.jpeg",
      instagram: "https://instagram.com/atharv_wadekar_111",
      email: "mailto:contact@webcraft.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="section-heading-wrapper">
        <motion.span
          className="heading-badge team-badge"
          style={{ backgroundColor: "#d2d2ff" }}
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
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          the wizards
          <br />
          behind it all
        </motion.h2>
      </div>
      <div className="team-container">
        <motion.div
          className="team-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            Designing and creating work that actually makes people feel
            <br />
            something. No fluff, no fuss, just fun, friendly, scroll-stopping
            creativity.
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
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className={`team-card ${member.color}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="photo-frame">
                {/* SVG Flower/Star shape background */}
                <svg viewBox="0 0 100 100" className="photo-shape">
                  <path d="M50 0 C60 20 80 20 100 30 C80 40 80 60 100 70 C80 80 60 80 50 100 C40 80 20 80 0 70 C20 60 20 40 0 30 C20 20 40 20 50 0 Z" />
                </svg>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                  loading="lazy"
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-socials">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa-brands fa-instagram" style={{ fontSize: "16px" }}></i>
                </a>
                <a href={member.email} className="social-icon">
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px" }}></i>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa-brands fa-linkedin" style={{ fontSize: "16px" }}></i>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Join Us Card */}
          <motion.div
            className="team-card card-yellow"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="photo-frame">
              <svg viewBox="0 0 100 100" className="photo-shape">
                <path d="M50 0 C60 20 80 20 100 30 C80 40 80 60 100 70 C80 80 60 80 50 100 C40 80 20 80 0 70 C20 60 20 40 0 30 C20 20 40 20 50 0 Z" />
              </svg>
              <div
                className="team-photo"
                style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <User size={64} color="#3b001f" />
              </div>
            </div>
            <h3 className="team-name">You?</h3>
            <p className="team-role">Let's build something amazing together</p>
            <button className="join-btn" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
