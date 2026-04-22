import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const highlights = [
    {
      icon: <FaRocket />,
      title: 'AI Tools',
      description: 'Claude Code, Cursor'
    },
    {
      icon: <FaCode />,
      title: 'Languages',
      description: 'Java, JavaScript, TypeScript'
    },
    {
      icon: <FaUsers />,
      title: 'Test Automation',
      description: 'Playwright, Selenium, Cypress'
    },
    {
      icon: <FaLightbulb />,
      title: 'CI/CD + Strategy',
      description: 'Jenkins, GitLab CI, Azure DevOps, CircleCI, test strategy'
    }
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p className="lead">
              I'm a QA Automation Engineer with 6 years of hands-on experience designing and scaling
              robust test automation frameworks for web and API applications. Based in Bucharest, Romania,
              I focus on building reliable, maintainable, and CI-friendly automation solutions that help
              teams ship faster without sacrificing quality.
            </p>
            <p>
              I design scalable automation frameworks from scratch or refactor legacy ones, integrate
              automated tests into CI/CD pipelines, and improve test reliability, execution time, and
              maintainability. I advocate for best practices in test automation and quality engineering.
            </p>
            <p>
              I work closely with developers, product owners, and DevOps teams to ensure clear
              communication, shared ownership of quality, and continuous improvement. Always open to
              discussing QA Automation, quality strategy, or new opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div className="highlights-grid" variants={containerVariants}>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 255, 135, 0.2)"
              }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
