import React, { useState } from 'react';

const SUBJECTS = [
  'Partner with us',
  'Become an agent',
  'Investor enquiry',
  'Press / Media',
  'General query',
];

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.subject) errs.subject = 'Please select a subject.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      <h1>Get in touch</h1>
      <p className="contact-sub">
        We're building something meaningful for Bharat. Whether you're a lender partner, a potential
        agent, an investor, or just curious — we'd love to hear from you.
      </p>

      {submitted ? (
        <div className="contact-success" role="alert" id="contact-success-msg">
          Thank you. We'll get back to you within 2 business days.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate id="contact-form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" style={{ fontSize: '0.8rem', color: '#b94a1c' }}>
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" style={{ fontSize: '0.8rem', color: '#b94a1c' }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Subject */}
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            >
              <option value="">Select a subject</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.subject && (
              <span id="subject-error" style={{ fontSize: '0.8rem', color: '#b94a1c' }}>
                {errors.subject}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us about your interest or enquiry..."
              value={form.message}
              onChange={handleChange}
              required
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" style={{ fontSize: '0.8rem', color: '#b94a1c' }}>
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn-primary" id="contact-submit">
            Send message
          </button>
        </form>
      )}

      {/* Contact info below form */}
      <div className="contact-info">
        <p>
          For urgent matters or compliance-related queries, you can also reach us at{' '}
          <a href="mailto:hello@shrineo.in">hello@shrineo.in</a>
        </p>
        <p>
          Grievance Officer:{' '}
          <a href="mailto:grievance@shrineo.in">grievance@shrineo.in</a>
        </p>
        <p>Response time: within 2 business days</p>
      </div>
    </section>
  );
}

export default Contact;
