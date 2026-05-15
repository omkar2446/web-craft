import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './BlogPage.css';

const BlogPage = () => {
  const posts = [
    {
      title: "Strategic SEO for Hotels and Resorts in Shirdi",
      date: "May 15, 2024",
      excerpt: "Shirdi is a hub of hospitality. We provide specialized SEO services for hotels and resorts in Shirdi to help them rank on the first page of Google and attract more pilgrims and tourists.",
      keywords: ["Hotel SEO Shirdi", "Resort Marketing Shirdi", "Shirdi Digital Marketing", "Top Developer Shirdi"]
    },
    {
      title: "Affordable Web Design for Small Businesses in Loni BK",
      date: "May 15, 2024",
      excerpt: "Are you a small business owner in Loni BK? Get a professional, high-converting website that helps you grow. We offer special packages for Loni BK and Loni KH startups.",
      keywords: ["Loni BK Web Design", "Loni KH Startups", "Affordable Website Loni", "Top Software Developer Loni"]
    },
    {
      title: "Top Digital Marketing & Software Development in Loni BK, KH, and Shirdi",
      date: "May 15, 2024",
      excerpt: "WebCraft is expanding its reach to provide elite digital marketing and software development services in Loni BK, Loni KH, and Shirdi. As the top developer in the region, we are committed to helping local businesses dominate the digital space with cutting-edge technology and strategic SEO.",
      keywords: ["Loni BK", "Loni KH", "Loni Shirdi", "Loni Top Digital Marketing", "Top Developer Loni"]
    },
    {
      title: "Why WebCraft is the Top Software Company in Loni",
      date: "May 14, 2024",
      excerpt: "Discover why WebCraft is recognized as the leading software development company in Loni, providing innovative digital solutions for local businesses. Our team of expert developers and designers work tirelessly to ensure your brand stands out in the digital landscape.",
      keywords: ["Loni Software Company", "Top Software Company Loni", "WebCraft Loni", "Software Development Loni"]
    },
    {
      title: "The Future of Web Development in Shirdi",
      date: "May 12, 2024",
      excerpt: "Shirdi is becoming a hub for digital transformation. Learn how web development in Shirdi is helping local hospitality and retail businesses grow their online presence. We specialize in creating high-performance websites that capture the essence of your business.",
      keywords: ["Web Development in Shirdi", "Web Developer Shirdi", "Digital Marketing Shirdi", "Shirdi Tech Solutions"]
    },
    {
      title: "Digital Marketing Strategies for Businesses in Pune",
      date: "May 10, 2024",
      excerpt: "Our Pune digital marketing team shares the top strategies to dominate the local market and reach more customers online. From SEO to social media marketing, we cover all aspects of digital growth for Pune-based startups and established enterprises.",
      keywords: ["Digital Marketing Pune", "Pune Web Developer", "SEO Company Pune", "Best Digital Marketing Pune"]
    },
    {
      title: "How to Choose the Best Web Developer in Maharashtra",
      date: "May 08, 2024",
      excerpt: "Selecting the right partner for your web project is crucial. We break down the key factors to consider when hiring a web developer in Maharashtra, focusing on expertise, local presence, and portfolio quality.",
      keywords: ["Best Web Developer Maharashtra", "Web Design Company Maharashtra", "Top Software Agency"]
    },
    {
      title: "Boost Your Hotel Business in Shirdi with Expert SEO",
      date: "May 06, 2024",
      excerpt: "Shirdi's hospitality sector is highly competitive. Learn how specialized SEO for hotels in Shirdi can help you get more direct bookings and visibility on Google Maps. Our Shirdi digital marketing team has the expertise to help your hotel stand out.",
      keywords: ["Hotel SEO Shirdi", "Shirdi Digital Marketing", "Top Web Developer Shirdi", "Local SEO Shirdi"]
    },
    {
      title: "Custom Ecommerce Solutions for Ahmednagar Businesses",
      date: "May 04, 2024",
      excerpt: "Taking your retail business online? We offer custom ecommerce website development in Ahmednagar, helping local merchants sell their products globally with secure payment gateways and user-friendly interfaces.",
      keywords: ["Ecommerce Ahmednagar", "Website Developer Ahmednagar", "Ahmednagar Software Company"]
    },
    {
      title: "Social Media Growth for Startups in Loni",
      date: "May 02, 2024",
      excerpt: "Social media is the heartbeat of modern marketing. We share proven techniques for startups in Loni to grow their Instagram and Facebook presence, building a community of loyal customers and increasing brand awareness.",
      keywords: ["Social Media Loni", "Digital Marketing Loni", "Loni Marketing Agency"]
    },
    {
      title: "Mobile App Development Trends in Pune for 2024",
      date: "April 30, 2024",
      excerpt: "Stay ahead of the curve with our insights into the latest mobile app development trends in Pune. From AI integration to cross-platform solutions, we explore what makes a successful app in the current market.",
      keywords: ["App Developer Pune", "Mobile App Pune", "Pune Tech Trends", "Software Development Pune"]
    },
    {
      title: "Top Web Developer in Nashik: Scaling Your Business",
      date: "April 28, 2024",
      excerpt: "Nashik's growing industrial sector needs modern web solutions. As a top web developer in Nashik, we help manufacturers and service providers scale their operations with custom web platforms and SEO-driven digital marketing.",
      keywords: ["Web Developer Nashik", "Digital Marketing Nashik", "Nashik Software Agency"]
    },
    {
      title: "Leading Digital Marketing Agency in Nagar (Ahmednagar)",
      date: "April 26, 2024",
      excerpt: "Looking for digital marketing in Nagar? Our team provides end-to-end solutions including SEO, PPC, and branding for businesses in Ahmednagar, ensuring they dominate the local search results and reach more customers.",
      keywords: ["Digital Marketing Nagar", "Ahmednagar SEO", "Web Developer Nagar"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-page-wrapper"
    >
      <div className="blog-container">
        <header className="blog-header">
          <motion.span 
            className="heading-badge blog-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Insights
          </motion.span>
          <motion.h1 
            className="blog-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            WebCraft <br /><span>Blog & News</span>
          </motion.h1>
          <motion.p 
            className="blog-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Expert perspectives on web development, digital marketing, and software innovation in Loni, Shirdi, and Pune.
          </motion.p>
        </header>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="blog-card-meta">
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.keywords.map((kw, j) => (
                  <span key={j} className="blog-tag">#{kw.replace(/\s+/g, '')}</span>
                ))}
              </div>
              <div className="blog-card-footer">
                <button className="read-more-btn">Read Full Story</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="bottom-integrated-section">
        <div className="centered-card-container">
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
