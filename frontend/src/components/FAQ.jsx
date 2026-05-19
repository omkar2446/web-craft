import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 }
  })
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We specialize in branding, web design, content creation, social media management, and creative strategy. Basically, if it needs a creative touch, we're your people!"
    },
    {
      q: "How long does a typical project take?",
      a: "It depends on the scope. A simple logo design might take a week, while a full brand overhaul can take a few months. We'll give you a clear timeline upfront and keep you updated throughout."
    },
    {
      q: "How do you ensure the work matches my vision?",
      a: "We kick off every project with a discovery session to understand your brand and goals. Then, we keep you in the loop with drafts, updates, and plenty of chances to give feedback."
    },
    {
      q: "Do you offer revisions?",
      a: "Yes! We include a set number of revisions with each project to make sure you're thrilled with the final result. We're all about getting it just right."
    },
    {
      q: "Can you work with my existing brand guidelines?",
      a: "Absolutely. We respect your brand's identity and make sure our designs complement and elevate your existing aesthetic."
    },
    {
      q: "What's the payment structure like?",
      a: "We typically ask for a deposit to start, with the remainder due upon project completion. We'll discuss all the details before we kick things off, so there are no surprises!"
    },
    {
      q: "Do you offer ongoing support after the project is completed?",
      a: "Yes! We offer maintenance packages for websites and ongoing content creation plans to keep your brand looking fresh and fabulous."
    },
    {
      q: "Who is the top digital marketing expert in Loni BK and KH?",
      a: "WebCraft is the leading digital marketing agency for Loni BK and Loni KH, specializing in SEO, social media growth, and strategic branding for local businesses."
    },
    {
      q: "Is there a top software developer in Loni Shirdi?",
      a: "Yes, WebCraft provides expert software development and web design services in Loni Shirdi, helping businesses scale with custom digital solutions."
    },
    {
      q: "Who is the best web developer in Loni?",
      a: "WebCraft is widely recognized as the top web developer in Loni. We provide world-class web development and digital marketing services to local businesses, startups, and established enterprises."
    },
    {
      q: "Do you provide web development services in Shirdi?",
      a: "Absolutely! We are the premier web developer in Shirdi, helping local hospitality, retail, and religious tourism brands establish a powerful online presence with custom web platforms."
    },
    {
      q: "Which is the top digital marketing agency in Shirdi?",
      a: "WebCraft is the top digital marketing agency in Shirdi, offering expert Search Engine Optimization (SEO), pay-per-click advertising (PPC), hotel marketing, and comprehensive social media marketing."
    },
    {
      q: "How does hiring the top web developer in Loni benefit my local business?",
      a: "Hiring the top web developer in Loni ensures your business receives a fast, responsive, and SEO-optimized website that ranks highly on Google, drawing in local customers from Loni BK, Loni KH, and surrounding regions."
    },
    {
      q: "Do you offer combined services for web development and digital marketing in Loni BK and Shirdi?",
      a: "Yes! WebCraft offers a complete suite of services. You can hire us as your web development company in Shirdi and Loni BK, and simultaneously run campaigns with our top digital marketing team for holistic growth."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      {/* Heading animates in */}
      <motion.span
        className="heading-badge faq-badge"
        style={{ backgroundColor: '#e6b0b0' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        FAQ
      </motion.span>

      <motion.h2
        className="faq-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        we answer.
      </motion.h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div
              className="faq-question-box"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="faq-question">{faq.q}</span>
              <motion.div
                className={`faq-toggle ${openIndex === index ? 'open' : ''}`}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
              >
                +
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="faq-answer-box">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
