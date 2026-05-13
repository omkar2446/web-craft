import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Kickoff & Coffee Chats",
      desc: "We get to know you—your brand, your goals, your vibe (and maybe your favorite snacks). This is where the ideas start flying and the creative wheels start turning.",
      emoji: "☕",
      color: "#f7b8d9",
      tag: "Discovery"
    },
    {
      number: "02",
      title: "Strategy & Research",
      desc: "We dive deep into the market, analyze competitors, and map out a strategic blueprint that ensures your brand doesn't just exist, but dominates.",
      emoji: "🗺️",
      color: "#b9d8a7",
      tag: "Strategy"
    },
    {
      number: "03",
      title: "Design & Refinement",
      desc: "Our creative team brings the vision to life with high-fidelity designs and iterative feedback loops, ensuring every pixel is perfect and intentional.",
      emoji: "✏️",
      color: "#d2d2ff",
      tag: "Design"
    },
    {
      number: "04",
      title: "Final Launch",
      desc: "The big reveal. We deploy your new digital artifact and provide ongoing support to ensure your launch is just the beginning of your growth.",
      emoji: "🚀",
      color: "#f6d94e",
      tag: "Launch"
    }
  ];

  const active = steps[activeStep];

  return (
    <section id="process" className="process-section">
      <div className="section-heading-wrapper">
        <motion.span
          className="heading-badge process-badge"
          style={{ backgroundColor: '#b9d8a7' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Process
        </motion.span>
        <motion.h2
          className="process-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          Our not-so<br />secret sauce
        </motion.h2>
      </div>

      <div className="process-container">
        {/* LEFT: Step Navigation + Content */}
        <div className="process-left">
          <div className="steps-nav">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`step-num ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="step-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="step-content-title">{active.title}</h3>
              <p className="step-content-desc">{active.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Animated STEP Card */}
        <div className="process-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="step-card"
              style={{ backgroundColor: active.color }}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.92 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Top tag */}
              <div className="step-card-tag">
                <span>{active.tag}</span>
              </div>

              {/* Big STEP number */}
              <div className="step-card-number">
                STEP {active.number}
              </div>

              {/* Central emoji */}
              <motion.div
                className="step-card-emoji"
                animate={{ rotate: [0, -8, 8, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
              >
                {active.emoji}
              </motion.div>

              {/* Title */}
              <div className="step-card-title">{active.title}</div>

              {/* Step progress dots */}
              <div className="step-card-dots">
                {steps.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`step-dot ${i === activeStep ? 'active' : ''}`}
                    onClick={() => setActiveStep(i)}
                    whileHover={{ scale: 1.3 }}
                    animate={i === activeStep ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  />
                ))}
              </div>

              {/* Decorative squiggle */}
              <svg className="step-card-deco" viewBox="0 0 200 40" fill="none">
                <path
                  d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20"
                  stroke="#3b001f"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.25"
                />
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
