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
      title: 'Quality-Driven',
      description: 'Passionate about delivering exceptional software quality through comprehensive testing strategies'
    },
    {
      icon: <FaCode />,
      title: 'Automation Expert',
      description: 'Skilled in Appium, Cypress, and modern test automation frameworks'
    },
    {
      icon: <FaUsers />,
      title: 'Team Player',
      description: 'Active volunteer and contributor to tech communities'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Focused',
      description: 'Staying ahead with AI in testing and cutting-edge QA practices'
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
              I'm a dedicated QA Engineer based in Bucharest, Romania, currently working at Lucanet.
              With a strong foundation from University POLITEHNICA of Bucharest, I specialize in ensuring
              software excellence through innovative testing solutions.
            </p>
            <p>
              My expertise spans mobile automation (Appium), modern web testing (Cypress), and building
              robust test frameworks integrated with CI/CD pipelines. I'm passionate about leveraging
              AI and cutting-edge technologies to revolutionize the testing landscape.
            </p>
            <p>
              Beyond my professional work, I'm an active member of the tech community, having volunteered
              with the Electronics Students League and continuously engaging with the latest developments
              in quality assurance and test automation.
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
