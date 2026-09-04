import React, { useRef, useState, useEffect } from 'react';
import './Brands.css';
import { motion } from 'framer-motion';

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numericTarget = parseFloat(target);
        const suffix = target.replace(/[\d.]/g, '');
        const startTime = performance.now();
        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * numericTarget);
          setCount(current + suffix);
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { ref, count };
}

function CountUpStat({ stat, index }) {
  const { ref, count } = useCountUp(stat.num, 1800);
  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 + 0.2, type: 'spring', stiffness: 120 }}
    >
      <span className="stat-number">{count}</span>
      <span className="stat-label">{stat.label}</span>
    </motion.div>
  );
}

const Brands = () => {
  const logos = [
    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", color: '#fff' },
    { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", color: '#000' },
    { name: "Instagram", src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", color: '#fff' },
    { name: "Meesho", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Meesho_logo.svg", color: '#fdf8c1' },
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", color: '#fff' },
    { name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg", color: '#b9d8a7' },
  ];

  const allLogos = [...logos, ...logos, ...logos, ...logos];

  const stats = [
    { num: "21+", label: "Brands launched" },
    { num: "40+", label: "Projects Delivered" },
    { num: "200+", label: "Moodboards created" },
    { num: "96%", label: "Happy clients" }
  ];

  return (
    <section id="brands" className="brands-section">
      {/* Badge */}
      <motion.span
        className="heading-badge brands-badge"
        style={{ backgroundColor: '#fff', border: '1px solid #3b001f' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Brands
      </motion.span>

      {/* Heading — splits word-by-word */}
      <motion.h2
        className="brands-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        We built the<br />rocket, they flew
      </motion.h2>

      {/* Marquee — fade in as block */}
      <motion.div
        className="brands-visual-area"
        initial={{ opacity: 0, scaleX: 0.9 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="brands-marquee-inner">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="logo-sticker"
              style={{
                backgroundColor: logo.color,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <img src={logo.src} alt={`${logo.name} logo - Trusted brand launched by WebCraft`} loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats bar — each number pops in with spring */}
      <div className="stats-bar" style={{ position: 'relative', overflow: 'visible' }}>
        {/* Decorative floating blobs */}
        <div className="deco-blob" style={{ width: 80, height: 80, background: '#f7b8d9', top: -40, left: '10%', animationDelay: '0s' }} />
        <div className="deco-blob" style={{ width: 50, height: 50, background: '#b9d8a7', top: -20, right: '15%', animationDelay: '1.5s' }} />

        <motion.span
          className="heading-badge badge-numbers"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
        >
          Numbers
        </motion.span>

        {stats.map((stat, index) => (
          <CountUpStat key={index} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
