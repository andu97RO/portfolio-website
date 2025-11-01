import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'Test Automation', level: 95, category: 'QA' },
    { name: 'Appium (Mobile)', level: 90, category: 'QA' },
    { name: 'Cypress', level: 90, category: 'QA' },
    { name: 'Java', level: 85, category: 'Programming' },
    { name: 'JavaScript', level: 80, category: 'Programming' },
    { name: 'CI/CD Integration', level: 85, category: 'DevOps' },
    { name: 'API Testing', level: 85, category: 'QA' },
    { name: 'Selenium', level: 80, category: 'QA' },
    { name: 'Test Strategy', level: 90, category: 'QA' },
    { name: 'Agile/Scrum', level: 85, category: 'Methodology' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div className="skills-grid" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <motion.span
                    className="skill-level"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="certifications" variants={itemVariants}>
          <h3>Certifications</h3>
          <div className="cert-list">
            <div className="cert-item">
              <span className="cert-badge">📱</span>
              <span>Appium Mobile Automation Android & iOS + Framework + CI/CD</span>
            </div>
            <div className="cert-item">
              <span className="cert-badge">🌐</span>
              <span>Cypress - Modern Automation Testing From Scratch + Frameworks</span>
            </div>
            <div className="cert-item">
              <span className="cert-badge">☕</span>
              <span>Java 1 Associate</span>
            </div>
            <div className="cert-item">
              <span className="cert-badge">💻</span>
              <span>European Computer Driving Licence</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
