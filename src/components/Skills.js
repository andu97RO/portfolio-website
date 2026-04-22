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
    { name: 'Cursor AI', level: 90, category: 'AI' },
    { name: 'Anthropic Claude', level: 88, category: 'AI' },
    { name: 'Playwright', level: 92, category: 'QA' },
    { name: 'Java', level: 86, category: 'Programming' },
    { name: 'JavaScript', level: 84, category: 'Programming' },
    { name: 'TypeScript', level: 82, category: 'Programming' },
    { name: 'Selenium', level: 85, category: 'QA' },
    { name: 'Cypress', level: 88, category: 'QA' },
    { name: 'REST Assured', level: 83, category: 'API Testing' },
    { name: 'Postman', level: 82, category: 'API Testing' },
    { name: 'Jenkins', level: 85, category: 'CI/CD' },
    { name: 'GitLab CI', level: 80, category: 'CI/CD' },
    { name: 'Azure DevOps', level: 80, category: 'CI/CD' },
    { name: 'CircleCI', level: 78, category: 'CI/CD' }
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
              <span>Appium Mobile Automation Android & IOS + Framework + CI/CD</span>
            </div>
            <div className="cert-item">
              <span className="cert-badge">🌐</span>
              <span>Cypress - Modern Automation Testing From Scratch + Frameworks</span>
            </div>
            <div className="cert-item">
              <span className="cert-badge">☕</span>
              <span>European Computer Driving Licence</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
