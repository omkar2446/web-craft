import React, { useRef } from 'react';
import './Portfolio.css';
import { motion } from 'framer-motion';

function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(700px) rotateX(0) rotateY(0) scale(1)';
  };
  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.2s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

const Portfolio = () => {
  const projects = [
    {
      title: "Jay Yogeshwar Solar",
      link: "https://www.jayyogeshwarsolar.in/",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      bgColor: "#f6d94e"
    },
    {
      title: "Agriconnect",
      link: "https://agriconnect-ohet.vercel.app/",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
      bgColor: "#eef2e6"
    },
    {
      title: "SongQueue",
      link: "https://songqueue.vercel.app/",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop",
      bgColor: "#050505"
    },
    {
      title: "Foodihub",
      link: "https://foodiehub-z1hk.onrender.com/",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
      bgColor: "#ffedd5"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-heading-wrapper">
        <motion.span
          className="heading-badge portfolio-badge"
          style={{ backgroundColor: '#d2d2ff' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <motion.h2
          className="portfolio-heading"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '64px', fontWeight: '800', color: '#3b001f', textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          Look what<br />we made!
        </motion.h2>
        <motion.p
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Explore projects delivered by the Loni BK top software developer and Shirdi top software developer. Our Loni BK top digital marketing team ensures every project ranks and converts.
        </motion.p>
      </div>

      <motion.div 
        className="portfolio-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <TiltCard className="portfolio-card">
              <div className="project-visual" style={{ backgroundColor: project.bgColor }}>
                <img src={project.image} alt={`${project.title} - Loni BK top software developer, Shirdi top software developer project by WebCraft`} className="project-img" loading="lazy" />
              </div>
              <div className="project-info">
                <span className="project-title">{project.title}</span>
                <button className="case-study-btn" onClick={() => window.open(project.link, '_blank')}>Visit Website</button>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
