import React, { useState } from 'react';
import './Services.css';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      title: "Branding & Identity",
      subtitle: "Make your mark - boldly and beautifully.",
      color: "orange",
      desc: "Your brand is so much more than just a logo—it's your personality, your story, your vibe. We help bring that to life with a look and feel that is uniquely you. Whether you're just getting started or ready for a glow-up, we craft everything from logos to full-on brand systems that speak your truth. Stand out with the Loni BK top digital marketing team.",
      tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Content Marketing", "Professional Branding Loni", "Business Identity Shirdi", "Loni Top Digital Marketing", "Shirdi Top Digital Marketing Team"],
      images: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      title: "Web Design and Development",
      subtitle: "Pretty and powerful websites that actually work.",
      color: "mint",
      desc: "WebCraft is your premier digital home. As the Loni top web developer and Shirdi top web developer, we design and build sites that are both beautiful and brainy. Serving Loni BK, Loni KH, and Shirdi with elite software solutions that ensure top search rankings.",
      tags: ["UI/UX Design", "Custom Web Development", "Responsive Design", "Website Maintenance", "Landing Page Design", "Ecommerce Developer Shirdi", "Loni Top Web Developer", "Loni BK Top Web Developer", "Loni KH Top Web Developer", "Shirdi Top Web Developer", "Best Web Developer in Loni", "Best Web Developer in Shirdi"],
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      title: "Content Creation",
      subtitle: "Words, visuals, and videos that speak human.",
      color: "pink",
      desc: "We create content that captures attention and tells your story in the most compelling way possible. From social media assets to long-form video, we make sure your brand is seen and heard. Partner with the top software developer Shirdi and Loni BK top digital marketing team to grow your audience.",
      tags: ["Social Media Content", "Video Production", "Copywriting", "Photography", "Loni Top Web Developer", "Shirdi Top Web Developer"],
      images: []
    },
    {
      title: "Digital Marketing",
      subtitle: "Get seen. Get clicks. Get results.",
      color: "blue",
      desc: "Our digital marketing team in Loni and Shirdi creates strategic campaigns that drive growth and maximize ROI. As the Loni BK top digital marketing team and Shirdi top digital marketing agency, we combine data with creativity to reach your audience where they live online.",
      tags: ["SEO", "PPC Campaigns", "Email Marketing", "Analytics", "Best SEO Agency Loni", "Digital Marketing Shirdi", "Loni BK Top Digital Marketing Team", "Shirdi Top Digital Marketing Team", "Shirdi Digital Marketing Agency", "Best SEO Agency in Shirdi"],
      images: []
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-heading-wrapper">
        <motion.span
          className="heading-badge services-badge"
          style={{ backgroundColor: '#f6d94e' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.span>
        <motion.h2
          className="services-heading"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '64px', fontWeight: '800', color: '#3b001f', textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          what we<br />do really well
        </motion.h2>
      </div>

      <motion.div 
        className="services-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={`service-item ${service.color}`}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
          >
            <div className="service-header" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
              <div className="service-title-group">
                <span className="service-title">{service.title}</span>
                <span className="service-subtitle">{service.subtitle}</span>
              </div>
              <motion.div 
                className="service-icon"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={24} />
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-body">
                    <div className="service-content-left">
                      <div className="sub-services-list">
                        {service.tags.map((tag, i) => (
                          <motion.span 
                            key={i} 
                            className="sub-service-tag"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                            whileHover={{ scale: 1.08, y: -2 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <motion.p 
                        className="service-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        {service.desc}
                      </motion.p>
                    </div>
                    {service.images.length > 0 && (
                      <div className="service-content-right">
                        {service.images.map((img, i) => (
                          <motion.img 
                            key={i} 
                            src={img} 
                            alt="Service Visual" 
                            className="service-visual-img"
                            loading="lazy"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.15 + 0.1, duration: 0.5 }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <button 
          onClick={() => navigate('/social-media-marketing')}
          style={{
            backgroundColor: '#3b001f',
            color: '#fdf8c1',
            padding: '16px 36px',
            borderRadius: '50px',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '18px',
            fontWeight: '800',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0 6px 0px #b9d8a7',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(4px)';
            e.currentTarget.style.boxShadow = '0 2px 0px #b9d8a7';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 0px #b9d8a7';
          }}
        >
          Explore Social Media Marketing
        </button>
      </div>
    </section>
  );
};

export default Services;
