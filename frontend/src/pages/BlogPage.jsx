import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './BlogPage.css';

const BlogPage = () => {
  const posts = [
    {
      title: "How to Scale Your Business with the Best Digital Marketing Services in Shirdi",
      date: "May 20, 2026",
      excerpt: "Are you running a hotel, resort, or local business in Shirdi? Learn how Shirdi top digital marketing team and elite SEO expert services can dramatically increase your visibility, drive online bookings, and scale your brand in the local market.",
      keywords: ["Digital Marketing Shirdi", "Shirdi Top Digital Marketing Agency", "Best SEO Agency in Shirdi", "Hotel SEO Shirdi", "Shirdi Digital Marketing Team", "Shirdi SEO Expert"]
    },
    {
      title: "Why Hiring a Local Web Developer in Loni BK & KH is Crucial for Modern Startups",
      date: "May 19, 2026",
      excerpt: "Local expertise meets high-end engineering. Discover why hiring the top web developer in Loni BK and Loni KH guarantees faster project delivery, custom software integrations, and pixel-perfect design that sets your startup apart.",
      keywords: ["Loni Top Web Developer", "Loni BK Top Web Developer", "Loni KH Top Web Developer", "Top Web Developer in Loni", "Loni Web Development Company", "Top Software Developer Loni"]
    },
    {
      title: "Why Every Business Needs a Website",
      date: "May 19, 2026",
      excerpt: "In today's digital era, an online presence is mandatory. Find out why partnering with a custom website developer in Loni or a business website developer in Loni is the first step to securing brand trust.",
      keywords: ["Web Development SEO Keywords", "Business Website Developer in Loni", "Custom Website Developer in Loni", "Startup Website Development in Loni"]
    },
    {
      title: "Benefits of SEO Friendly Website Design",
      date: "May 18, 2026",
      excerpt: "Building a site is only half the battle. Discover why SEO friendly website development in Loni ensures search visibility and attracts high-quality local organic leads from day one.",
      keywords: ["SEO Friendly Website Development in Loni", "How to Improve Website SEO", "Technical SEO Services", "Local Business SEO Services"]
    },
    {
      title: "How to Grow Business Online",
      date: "May 17, 2026",
      excerpt: "Grow your business online using search optimization and advertising. Partner with the top digital marketing agency and use local business SEO services to generate continuous sales.",
      keywords: ["How to Grow Business Online", "Business Promotion Services", "Online Growth Agency", "Lead Generation Company"]
    },
    {
      title: "Importance of Responsive Website Design",
      date: "May 16, 2026",
      excerpt: "Most of your traffic is mobile. A responsive website design in Loni ensures that your visitors have a seamless experience, whether on a smartphone or a desktop.",
      keywords: ["Responsive Website Design in Loni", "Mobile Friendly Website Design in Loni", "Responsive Website Design Shirdi", "Fast Loading Website Developer in Loni"]
    },
    {
      title: "Ecommerce Website Benefits",
      date: "May 15, 2026",
      excerpt: "Take your retail store online. Learn how an ecommerce website developer in Loni and ecommerce website development Shirdi can expand your market and drive 24/7 sales.",
      keywords: ["Ecommerce Website Developer in Loni", "Ecommerce Website Development Shirdi", "Ecommerce Developer Near Me", "Ecommerce SEO Services"]
    },
    {
      title: "Website Speed Optimization Tips",
      date: "May 14, 2026",
      excerpt: "Speed is a ranking factor. Get expert advice from a fast website development services provider on improving loading times and core web vitals.",
      keywords: ["Fast Website Development Services", "Fast Loading Website Developer in Loni", "Technical SEO Services", "Best IT Company Near Me"]
    },
    {
      title: "Modern UI UX Design Trends",
      date: "May 13, 2026",
      excerpt: "User experience dictates conversions. Explore the latest layouts and interactions with a top website designer near Loni offering premium UI UX design services in Loni.",
      keywords: ["UI UX Design Services in Loni", "Top Website Designer Near Loni", "UI UX Design Services Shirdi", "Web Designer in Loni"]
    },
    {
      title: "How SEO Helps Local Businesses",
      date: "May 12, 2026",
      excerpt: "Local customers are searching for you. Learn how local business SEO services and top SEO company near me can put your business on the map in Loni BK, KH, and Shirdi.",
      keywords: ["How SEO Helps Local Businesses", "Local Business SEO Services", "Top SEO Company Near Me", "SEO Expert Near Me"]
    },
    {
      title: "Best Website Development Company in Loni",
      date: "May 11, 2026",
      excerpt: "Looking for a tech partner? Discover why WebCraft is recognized as the best website development company in Loni and the professional website developer in Loni.",
      keywords: ["Best Website Development Company in Loni", "Professional Website Developer in Loni", "Website Development Company in Loni", "Freelance Web Developer in Loni"]
    },
    {
      title: "Website Design Tips for Small Businesses",
      date: "May 10, 2026",
      excerpt: "Maximize your budget. Our small business website developer in Loni team shares critical tips for designing high-performance sites for local trades and services.",
      keywords: ["Small Business Website Developer in Loni", "Affordable Web Design Services in Loni", "Small Business Website Developer Shirdi", "Local Website Designer in Loni"]
    },
    {
      title: "How to Rank Website on Google",
      date: "May 09, 2026",
      excerpt: "Unlock organic traffic. Discover how a website ranking expert and local SEO services Ahmednagar optimize websites to achieve page one rankings.",
      keywords: ["How to Rank Website on Google", "Website Ranking Expert", "Google Ranking Services Pune", "Local SEO Services Ahmednagar"]
    },
    {
      title: "React Website Development Guide",
      date: "May 08, 2026",
      excerpt: "React powers modern interfaces. Learn how a React website developer in Loni and React developer Pune build super fast, dynamic web applications.",
      keywords: ["React Website Developer in Loni", "React Developer Pune", "React Developer Shirdi", "Web Application Development in Loni"]
    },
    {
      title: "Best Tools for Web Development",
      date: "May 07, 2026",
      excerpt: "From code editors to frameworks. Our full stack developer in Loni shares the ultimate tool stack used by professional website developers.",
      keywords: ["Full Stack Developer in Loni", "Best Tools for Web Development", "Best IT Company in Loni", "Professional Website Developer Loni"]
    },
    {
      title: "How to Improve Website SEO",
      date: "May 06, 2026",
      excerpt: "Simple adjustments can make a big difference. Learn search engine optimization services techniques that boost search visibility and keyword ranking.",
      keywords: ["How to Improve Website SEO", "Website SEO Services", "Technical SEO Services", "Google SEO Services Nashik"]
    },
    {
      title: "Best SEO Strategies for Businesses",
      date: "May 05, 2026",
      excerpt: "Stay ahead of the competition. Implement the best SEO strategies for businesses in 2026 to capture organic market share and scale your brand.",
      keywords: ["Best SEO Strategies for Businesses", "Technical SEO Services", "SEO Services Company", "Local SEO Expert"]
    },
    {
      title: "How Digital Marketing Increases Sales",
      date: "May 04, 2026",
      excerpt: "Convert clicks into revenue. Our online growth agency shares how professional digital marketing services and digital branding services drive sales.",
      keywords: ["How Digital Marketing Increases Sales", "Professional Digital Marketing Services", "Digital Branding Agency", "Business Growth Agency"]
    },
    {
      title: "Social Media Marketing Tips",
      date: "May 03, 2026",
      excerpt: "Build your online audience. Read our social media marketing agency tips for crafting viral reels, post schedules, and engaging brand profiles.",
      keywords: ["Social Media Marketing Tips", "Social Media Marketing Agency", "Social Media Promotion Services", "Social Media Marketing Pune"]
    },
    {
      title: "Google Ads Optimization Guide",
      date: "May 02, 2026",
      excerpt: "Maximize your advertising budget. Hire a Google ads expert near me to implement targeted pay-per-click strategies that convert instantly.",
      keywords: ["Google Ads Optimization Guide", "Google Ads Management Services", "Google Ads Expert Near Me", "PPC Advertising Services"]
    },
    {
      title: "Instagram Marketing for Businesses",
      date: "May 01, 2026",
      excerpt: "Leverage visual storytelling. Learn how Instagram marketing services can build brand loyalty and attract younger demographics to your business.",
      keywords: ["Instagram Marketing for Businesses", "Instagram Marketing Services", "Instagram Marketing Agency Loni", "Instagram Marketing Shirdi"]
    },
    {
      title: "Local SEO Guide for Small Businesses",
      date: "April 30, 2026",
      excerpt: "Win the local search war. Optimize your Google My Business profile and target local keywords with our comprehensive local SEO services guide.",
      keywords: ["Local SEO Guide for Small Businesses", "Google My Business Optimization", "Local SEO Expert", "Local SEO Services Ahmednagar"]
    },
    {
      title: "Best Marketing Strategies in 2026",
      date: "April 29, 2026",
      excerpt: "As algorithms change, your marketing must evolve. Discover the best marketing strategies in 2026 combining AI, content creation, and search advertising.",
      keywords: ["Best Marketing Strategies in 2026", "Performance Marketing Agency", "Online Marketing Company", "Technical SEO Services"]
    },
    {
      title: "How to Get More Website Traffic",
      date: "April 28, 2026",
      excerpt: "Turn your website into a traffic magnet. Explore organic traffic growth services and website ranking strategies to multiply your visitor numbers.",
      keywords: ["How to Get More Website Traffic", "Organic Traffic Growth Services", "Website SEO Services", "Google Ranking Expert"]
    },
    {
      title: "Facebook Ads Tips",
      date: "April 27, 2026",
      excerpt: "Target the right users with demographic data. Use Facebook marketing agency blueprints to set up high-converting remarketing campaigns.",
      keywords: ["Facebook Ads Tips", "Facebook Marketing Agency", "Facebook Marketing Services Loni", "Facebook Ads Services Shirdi"]
    },
    {
      title: "Content Marketing Strategies",
      date: "April 26, 2026",
      excerpt: "Content is king. Learn how a dedicated content marketing agency drives customer engagement through educational blogs, case studies, and guides.",
      keywords: ["Content Marketing Strategies", "Content Marketing Agency", "YouTube Marketing Services", "Online Branding Tips"]
    },
    {
      title: "Online Branding Tips",
      date: "April 25, 2026",
      excerpt: "A strong brand reduces client acquisition cost. Learn visual branding and online positioning from the top digital branding agency in Pune and Shirdi.",
      keywords: ["Online Branding Tips", "Branding Agency", "Digital Branding Agency", "Branding Services Shirdi"]
    },
    {
      title: "SEO vs Google Ads",
      date: "April 24, 2026",
      excerpt: "Organic search engine optimization services or instant paid traffic? We weigh the pros and cons of both channels to find the best fit for your budget.",
      keywords: ["SEO vs Google Ads", "SEO Services Company", "PPC Advertising Services", "Google Ads Management Services"]
    },
    {
      title: "Lead Generation Strategies",
      date: "April 23, 2026",
      excerpt: "Fill your pipeline. Our lead generation company shares the top funnels and landing page designs to convert cold traffic into hot leads.",
      keywords: ["Lead Generation Strategies", "Lead Generation Company", "Lead Generation Services Loni", "Landing Page Designer Shirdi"]
    },
    {
      title: "YouTube Marketing Tips",
      date: "April 22, 2026",
      excerpt: "Video content has the highest retention. Learn how YouTube marketing services can position your business as an industry authority.",
      keywords: ["YouTube Marketing Tips", "YouTube Marketing Services", "Content Marketing Agency", "Social Media Promotion Services"]
    },
    {
      title: "How to Rank Higher on Google",
      date: "April 21, 2026",
      excerpt: "Secure the top spot. A step-by-step checklist from a local Google ranking expert on off-page link building and technical SEO audits.",
      keywords: ["How to Rank Higher on Google", "Google Ranking Expert", "Google Ranking Expert Shirdi", "Google Ranking Services Loni"]
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
              transition={{ delay: Math.min(i, 6) * 0.05, duration: 0.5 }}
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
