import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'QA Engineer',
      company: 'Lucanet',
      location: 'Bucharest, Romania',
      period: 'Present',
      description: 'Leading quality assurance initiatives and implementing cutting-edge testing solutions to ensure software excellence.',
      highlights: [
        'Developed comprehensive test automation frameworks',
        'Implemented CI/CD integration for automated testing',
        'Mentored team members on best QA practices',
        'Drove quality improvements across multiple projects'
      ]
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'University Education',
      company: 'University POLITEHNICA of Bucharest',
      location: 'Bucharest, Romania',
      period: '2020 - 2022',
      description: 'Focused on computer science and software engineering principles.',
      highlights: [
        'Strong foundation in software development',
        'Specialized in quality assurance methodologies',
        'Participated in tech projects and initiatives'
      ]
    },
    {
      type: 'volunteer',
      icon: <FaHandsHelping />,
      title: 'Volunteer',
      company: 'Electronics Students League (LSE)',
      location: 'Bucharest, Romania',
      period: 'Oct 2016 - Feb 2020',
      description: 'Active contributor to student tech community and educational initiatives.',
      highlights: [
        'Organized technical workshops and events',
        'Mentored fellow students in programming',
        'Contributed to community tech projects'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Experience & Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4>{exp.company}</h4>
                <p className="location">{exp.location}</p>
                <p className="description">{exp.description}</p>
                {exp.highlights && (
                  <ul className="highlights">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.3 + i * 0.1 }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
