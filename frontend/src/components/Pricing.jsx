import React from 'react';
import './Pricing.css';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      id: "mint",
      badge: "Social Media",
      price: "$125.35",
      period: "month",
      cta: "Book a Call",
      description: "Small to medium-sized businesses looking to build and maintain a consistent online presence without the hassle.",
      features: [
        "Social Media Management (4 platforms, 12 posts/month)",
        "Monthly Email Marketing Campaign (up to 2 campaigns)",
        "Blog Content Creation (2 articles/month)",
        "Basic Analytics Report with actionable insights",
        "Post Scheduling and Optimization",
        "Quarterly Competitor Analysis",
        "Engagement Monitoring and Response (comments and messages)"
      ]
    },
    {
      id: "salmon",
      badge: "Maintenance",
      price: "$20.90",
      period: "based on project",
      cta: "Let's Talk",
      description: "Businesses aiming to improve visibility and climb search engine rankings steadily.",
      features: [
        "Regular Updates & Maintenance",
        "Security Monitoring and Bug Fixes",
        "Performance Optimization",
        "Plugins and Theme Updates",
        "Monthly Backups & Recovery",
        "Comprehensive SEO Strategy (on page and off page)",
        "Keyword Research & Implementation"
      ]
    },
    {
      id: "blue",
      badge: "Branding",
      price: "$156.73",
      period: "project",
      cta: "Get Started",
      description: "Entrepreneurs, startups, and businesses ready to establish or refresh their brand identity with a cohesive, professional image.",
      features: [
        "Logo Design (3 concepts)",
        "Business Card Design",
        "Social Media Profile Branding",
        "Email Signature Design",
        "Presentation Templates (PowerPoint/Google Slides)",
        "Print-Ready Files for Marketing Collateral",
        "Packaging Design (Optional Add-on)"
      ]
    }
  ];

  const handleMail = (plan) => {
    const message = `I'm interested in the ${plan.badge} plan (${plan.price}).\n\n` +
      `Plan Description: ${plan.description}\n\n` +
      `Plan Features:\n${plan.features.map(f => `- ${f}`).join('\n')}\n\n` +
      `Please get in touch with me!`;

    // 1. Dispatch custom event to fill the form
    const event = new CustomEvent('fillContactForm', { detail: { message } });
    window.dispatchEvent(event);

    // 2. Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-heading-wrapper">
        <motion.span
          className="heading-badge pricing-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pricing
        </motion.span>
        <motion.h2
          className="pricing-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          pick your<br />flavor
        </motion.h2>
        <motion.p
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Affordable, high-impact plans from the Loni BK top software developer. Partner with the Loni BK top digital marketing team and Shirdi top software developer to scale your business.
        </motion.p>
      </div>
      <motion.div
        className="pricing-container"
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
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.id}`}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <div className="card-left">
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="card-cta-group">
                <button
                  onClick={() => handleMail(plan)}
                  className="card-cta-btn mail-btn"
                >
                  Mail
                </button>
                <a
                  href="tel:9405909432"
                  className="card-cta-btn call-btn"
                  style={{ textDecoration: 'none', textAlign: 'center' }}
                >
                  Call
                </a>
              </div>
            </div>

            <div className="card-right">
              <span className="card-badge">{plan.badge}</span>
              <div className="price-info">
                <span className="price-text">{plan.price}</span>
                <span className="price-period">/{plan.period}</span>
              </div>
              <p className="card-desc">{plan.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
