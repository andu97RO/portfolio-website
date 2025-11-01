import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Mobile Test Automation Framework',
      category: 'automation',
      description: 'Comprehensive Appium-based framework for Android and iOS mobile app testing with CI/CD integration.',
      technologies: ['Appium', 'Java', 'TestNG', 'Jenkins', 'CI/CD'],
      highlights: [
        'Cross-platform mobile testing',
        'Page Object Model architecture',
        'Integrated with Jenkins pipeline',
        'Detailed reporting with screenshots'
      ]
    },
    {
      title: 'Cypress E2E Testing Suite',
      category: 'automation',
      description: 'Modern web application testing framework with comprehensive coverage and real-time reporting.',
      technologies: ['Cypress', 'JavaScript', 'Mocha', 'GitHub Actions'],
      highlights: [
        'Fast, reliable test execution',
        'Visual regression testing',
        'API testing integration',
        'Custom commands and utilities'
      ]
    },
    {
      title: 'API Test Automation',
      category: 'automation',
      description: 'RESTful API testing framework with automated validation and performance testing capabilities.',
      technologies: ['RestAssured', 'Java', 'Maven', 'Newman'],
      highlights: [
        'Comprehensive API coverage',
        'Schema validation',
        'Performance benchmarking',
        'Automated contract testing'
      ]
    },
    {
      title: 'Quality Metrics Dashboard',
      category: 'tools',
      description: 'Real-time dashboard for tracking QA metrics, test coverage, and defect trends.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      highlights: [
        'Real-time metrics visualization',
        'Customizable reports',
        'Integration with test tools',
        'Trend analysis and insights'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Test Automation' },
    { id: 'tools', label: 'QA Tools' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

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
      transition: { duration: 0.5 }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Showcasing my expertise in test automation and quality assurance
          </p>
        </motion.div>

        <motion.div className="filter-buttons" variants={itemVariants}>
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="projects-grid"
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 255, 135, 0.3)"
                }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <motion.a
                      href="#projects"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href="#projects"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
