import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('This form is currently disabled. Please email me directly.');
    setTimeout(() => setFormStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bucharest, Romania',
      link: null
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '0749536968',
      link: 'tel:0749536968'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'bogdan.andrei450@gmail.com',
      link: 'mailto:bogdan.andrei450@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'www.linkedin.com/in/andreipbogdan',
      link: 'https://www.linkedin.com/in/andreipbogdan/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'andu97RO',
      link: 'https://github.com/andu97RO'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's collaborate on ensuring software excellence together
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <p>
              Always open to discussing QA Automation, quality strategy, or new opportunities.
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>

              {formStatus && (
                <motion.div
                  className="form-status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div className="footer" variants={itemVariants}>
          <p>Designed & Built by Andrei Bogdan</p>
          <p>2026 - All Rights Reserved</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
