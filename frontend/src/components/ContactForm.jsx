import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  React.useEffect(() => {
    const handleAutoFill = (e) => {
      if (e.detail && e.detail.message) {
        setFormData(prev => ({ ...prev, message: e.detail.message }));
      }
    };
    window.addEventListener('fillContactForm', handleAutoFill);
    return () => window.removeEventListener('fillContactForm', handleAutoFill);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('https://web-craft-9gv2.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ loading: false, success: null, error: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      console.error('Error connecting to backend:', err);
      // Fallback to mailto if backend is down
      const { name, email, phone, message } = formData;
      const subject = encodeURIComponent(`New Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
      window.location.href = `mailto:otambe655@gmail.com?subject=${subject}&body=${body}`;

      setStatus({ loading: false, success: 'Redirecting to email client...', error: null });
    }
  };

  const fields = [
    { label: 'Name', name: 'name', type: 'text', required: true },
    { label: 'Email', name: 'email', type: 'email', required: true },
    { label: 'Phone', name: 'phone', type: 'tel', required: false },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT — illustration + heading animate in from the left */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="illustration-box"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path d="M150 150 Q200 100 250 150 T350 150" fill="none" stroke="#3B001F" strokeWidth="2" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="#3B001F" strokeWidth="3" />
              <text x="200" y="210" textAnchor="middle" style={{ font: 'bold 24px Arial', fill: '#3B001F' }}>LET'S GO!</text>
              <path d="M50 50 L100 80 L70 120 Z" fill="none" stroke="#3B001F" strokeWidth="2" />
              <circle cx="300" cy="100" r="10" fill="#3B001F" />
              <path d="M350 300 L380 330" stroke="#3B001F" strokeWidth="3" />
            </svg>
          </motion.div>

          <motion.h2
            className="quote-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Need a custom quote?
          </motion.h2>

          <motion.p
            className="quote-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          >
            Don't let your ideas sit idle—slide into our inbox and let's make magic!
          </motion.p>
        </motion.div>

        {/* RIGHT — each form field staggers in from the right */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            {fields.map((field, i) => (
              <motion.div
                key={field.name}
                className="form-group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 + 0.2 }}
              >
                <label className="form-label">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="form-input"
                  required={field.required}
                />
              </motion.div>
            ))}

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            >
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                style={{ minHeight: '80px', resize: 'none' }}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={status.loading}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 150 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.97 }}
            >
              {status.loading ? 'Sending...' : 'Submit Message'}
            </motion.button>

            <AnimatePresence>
              {status.success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="status-message success"
                >
                  {status.success}
                </motion.p>
              )}
              {status.error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="status-message error"
                >
                  {status.error}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
