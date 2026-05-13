import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const ADMIN_PASS = '9405909432';

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'Gousia "Gladrags" Shah',
      role: 'Founder, CHASE.in',
      text: 'Working with this team was a real thing. Super organized, wildly creative, and just fun to talk to. They totally get our brand from day one.',
      color: 'pink-card',
      photo: 'https://i.pravatar.cc/150?u=gousia',
      company: 'CHASE'
    },
    {
      id: 2,
      author: 'Team Rhythm',
      role: 'Rhythm',
      text: "They took our messy ideas and turned them into a stunning identity. Everything feels cohesive, intentional, and so us. We're obsessed.",
      color: 'purple-card',
      photo: 'https://i.pravatar.cc/150?u=rhythm',
      company: 'RHYTHM'
    },
    {
      id: 3,
      author: 'Team Pixel AI',
      role: 'Team Pixel AI',
      text: "We still get compliments on our branding. It feels premium, fun, and totally hits our vibe. Couldn't have asked for a better team.",
      color: 'yellow-card',
      photo: 'https://i.pravatar.cc/150?u=pixel',
      company: 'PIXEL AI'
    },
    {
      id: 4,
      author: 'APPS Coding',
      role: 'Management',
      text: "We've worked with agencies before but this one hits different in the best way. Creative visionaries and amazing attention to detail.",
      color: 'red-card',
      photo: 'https://i.pravatar.cc/150?u=apps',
      company: 'APPS'
    }
  ]);

  const cardColors = ['pink-card', 'purple-card', 'yellow-card', 'red-card'];
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', company: '', text: '' });

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState(null); // id of card to delete
  const [passwordInput, setPasswordInput] = useState('');
  const [passError, setPassError] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    const newReview = {
      id: Date.now(),
      author: formData.name,
      role: formData.role || 'Client',
      text: formData.text,
      color: cardColors[reviews.length % cardColors.length],
      photo: `https://i.pravatar.cc/150?u=${formData.name}`,
      company: formData.company || formData.name.charAt(0).toUpperCase()
    };
    setReviews([...reviews, newReview]);
    setFormData({ name: '', role: '', company: '', text: '' });
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowForm(false); }, 2500);
  };

  const openDeleteModal = (id) => {
    setDeleteTarget(id);
    setPasswordInput('');
    setPassError(false);
  };

  const confirmDelete = () => {
    if (passwordInput === ADMIN_PASS) {
      setReviews(reviews.filter(r => r.id !== deleteTarget));
      setDeleteTarget(null);
      setPasswordInput('');
      setPassError(false);
    } else {
      setPassError(true);
      setPasswordInput('');
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">

      {/* Password Modal */}
      <AnimatePresence>
        {deleteTarget !== null && (
          <motion.div
            className="delete-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeleteTarget(null)}
          >
            <motion.div
              className="delete-modal"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="delete-modal-icon">🔐</div>
              <h3 className="delete-modal-title">Admin Access Required</h3>
              <p className="delete-modal-sub">Enter the admin password to delete this review.</p>
              <input
                type="password"
                className={`delete-password-input ${passError ? 'input-error' : ''}`}
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e) => { setPasswordInput(e.target.value); setPassError(false); }}
                onKeyDown={(e) => e.key === 'Enter' && confirmDelete()}
                autoFocus
              />
              {passError && (
                <motion.p
                  className="delete-error"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  ❌ Incorrect password. Try again.
                </motion.p>
              )}
              <div className="delete-modal-actions">
                <button className="delete-cancel-btn" onClick={() => setDeleteTarget(null)}>Cancel</button>
                <motion.button
                  className="delete-confirm-btn"
                  onClick={confirmDelete}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Delete Review
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.span
        className="heading-badge"
        style={{ backgroundColor: '#fbd6a2' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.span>

      {/* Heading */}
      <motion.h2
        className="testimonials-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        clients talk<br />&amp; we blush
      </motion.h2>

      {/* Cards */}
      <div className="testimonials-container">
        {reviews.map((review, index) => (
          <motion.div
          key={review.id}
            className={`testimonial-card ${review.color}`}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            {/* Delete button */}
            <button
              className="card-delete-btn"
              onClick={() => openDeleteModal(review.id)}
              title="Delete review"
            >✕</button>

            <div className="card-header">
              <motion.div
                className="profile-pic profile-initial"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
              >
                {review.author.charAt(0).toUpperCase()}
              </motion.div>
              <div className="author-info">
                <span className="author-name">{review.author}</span>
                <span className="author-says">says...</span>
              </div>
            </div>
            <div className="card-body">
              <p className="testimonial-text">"{review.text}"</p>
            </div>
            <div className="card-footer">
              <div className="company-logo">{review.company.charAt(0)}</div>
              <span className="company-name">{review.role}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Feedback CTA */}
      <motion.div
        className="feedback-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="feedback-prompt">Worked with us? We'd love to hear from you! 🙌</p>
        <motion.button
          className="add-feedback-btn"
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {showForm ? 'Close ✕' : '+ Add Your Review'}
        </motion.button>
      </motion.div>

      {/* Feedback Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="feedback-form-wrapper"
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {submitted ? (
              <motion.div
                className="feedback-success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className="success-emoji">🎉</span>
                <p>Thank you! Your review has been added.</p>
              </motion.div>
            ) : (
              <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="feedback-row">
                  <div className="feedback-field">
                    <label>Your Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Sarah K." required />
                  </div>
                  <div className="feedback-field">
                    <label>Role / Title</label>
                    <input name="role" value={formData.role} onChange={handleChange} placeholder="e.g. CEO, Designer" />
                  </div>
                </div>
                <div className="feedback-field">
                  <label>Company / Brand</label>
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="e.g. My Brand Co." />
                </div>
                <div className="feedback-field">
                  <label>Your Review *</label>
                  <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Tell us what you loved about working with us..." required rows={4} />
                </div>
                <motion.button
                  type="submit"
                  className="feedback-submit-btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Submit Review 🚀
                </motion.button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dots */}
      <motion.div
        className="pagination-dots"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </motion.div>
    </section>
  );
};

export default Testimonials;
