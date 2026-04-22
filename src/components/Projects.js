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
      title: 'AppPulse',
      category: 'all',
      description: 'macOS app update monitor — checks installed apps against Homebrew Cask and GitHub Releases.',
      technologies: ['HTML'],
      highlights: [
        'Public GitHub repository',
        'Updated Apr 22, 2026'
      ],
      repoUrl: 'https://github.com/andu97RO/AppPulse',
      liveUrl: ''
    },
    {
      title: 'portfolio-website',
      category: 'all',
      description: 'Personal portfolio website built with React.',
      technologies: ['JavaScript'],
      highlights: [
        'Public GitHub repository',
        'Updated Apr 22, 2026'
      ],
      repoUrl: 'https://github.com/andu97RO/portfolio-website',
      liveUrl: 'https://portfolio-website-tawny-zeta-97.vercel.app'
    },
    {
      title: 'football-friends',
      category: 'all',
      description: 'TypeScript project.',
      technologies: ['TypeScript'],
      highlights: [
        'Public GitHub repository',
        'Updated Jan 22, 2026'
      ],
      repoUrl: 'https://github.com/andu97RO/football-friends',
      liveUrl: ''
    },
    {
      title: 'solana-developers-program',
      category: 'all',
      description: 'Solana developer program exercises and projects.',
      technologies: ['TypeScript'],
      highlights: [
        'Public GitHub repository',
        'Updated Oct 25, 2024'
      ],
      repoUrl: 'https://github.com/andu97RO/solana-developers-program',
      liveUrl: ''
    },
    {
      title: 'licenta-facultate',
      category: 'all',
      description: 'Bachelor\'s degree thesis project.',
      technologies: ['HTML'],
      highlights: [
        'Public GitHub repository',
        'Updated Jun 30, 2020'
      ],
      repoUrl: 'https://github.com/andu97RO/licenta-facultate',
      liveUrl: ''
    }
  ];

  const categories = [
    { id: 'all', label: 'All Repositories' }
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
          <h2 className="section-title">GitHub Repositories</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A selection of my public repositories
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
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
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
