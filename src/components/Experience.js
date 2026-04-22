import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
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
      title: 'Senior QA Automation Engineer',
      company: 'Lucanet',
      location: 'Bucharest, Romania',
      period: 'Jul 2024 - Present',
      description: 'Architected and implemented a comprehensive automation framework using TypeScript and Playwright.',
      highlights: [
        'Built scalable testing infrastructure for enterprise applications',
        'Used Cursor and Claude Code to accelerate development and improve test code quality',
        'Embedded QA practices across development, testing, and deployment phases',
        'Modernized test infrastructure and optimized parallel execution to reduce feedback cycles'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Senior QA Automation Engineer',
      company: '3Pillar Global',
      location: 'Bucharest, Romania',
      period: 'Apr 2023 - Jul 2024',
      description: 'Elevated the efficiency and reliability of automation testing across multiple projects.',
      highlights: [
        'Expanded automation test coverage for critical functionality',
        'Maintained and improved automation projects for sustained quality',
        'Monitored test executions and proactively fixed failing tests',
        'Created Jenkins jobs to run automation on every build'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'QA Automation Engineer',
      company: 'Orion Innovation',
      location: 'Bucharest, Romania',
      period: 'Oct 2021 - Apr 2023',
      description: 'Established API and UI automation frameworks from scratch.',
      highlights: [
        'Built frameworks using Java, REST Assured, Cucumber, Selenium, and Appium',
        'Designed automated tests for Android and iOS applications',
        'Improved test coverage, monitoring, and reporting for automation projects',
        'Contributed to Jenkins job creation to run tests on each build',
        'Built an e-commerce automation framework using Cypress and JavaScript'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'QA Automation Engineer',
      company: 'Deloitte Digital Romania',
      location: 'Bucharest, Romania',
      period: 'Jan 2021 - Oct 2021',
      description: 'Worked on e-commerce and national healthcare platforms for a UK-based client.',
      highlights: [
        'Delivered quality through a blend of manual and automation testing',
        'Performed debugging and root cause analysis',
        'Customized automation frameworks to align with project specifics',
        'Used Java, JavaScript, Selenium, Cypress, RestAssured, and Postman'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'QA Test Automation Engineer',
      company: 'Aurachain',
      location: 'Bucharest, Romania',
      period: 'Oct 2019 - Dec 2020',
      description: 'Automated test cases and improved Java-based automation frameworks.',
      highlights: [
        'Integrated tests into CircleCI for nightly execution',
        'Performed API testing with Postman for REST, JSON, and SOAP APIs',
        'Collaborated with DevOps to include automation in CI/CD pipelines',
        'Provided technical guidance and partnered with manual testers'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Intern QA Tester',
      company: 'Hewlett Packard Enterprise',
      location: 'Bucharest, Romania',
      period: 'Jun 2019 - Sep 2019',
      description: 'Contributed to testing and automation for a Java-based project.',
      highlights: [
        'Used Jenkins to automate scenarios and ensure coverage',
        'Developed end-to-end solution tests for infrastructure products',
        'Debugged and triaged test and product failures'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Junior Software Engineer',
      company: 'Accenture',
      location: 'Bucharest, Romania',
      period: 'Jul 2018 - Sep 2018',
      description: 'Supported internal systems with capacity, security, and Azure deployments.',
      highlights: [
        'Deployed applications and environments using Microsoft Azure and PowerShell',
        'Collaborated with developers and operations to establish support capability',
        'Worked with Agile processes and DevOps tools like Jira, Confluence, Git, and Azure DevOps'
      ]
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Game Tester',
      company: 'Electronic Arts (EA)',
      location: 'Bucharest, Romania',
      period: 'Jun 2017 - Aug 2017',
      description: 'Ensured the quality of gaming experiences by managing and resolving bugs.',
      highlights: [
        'Managed bugs to improve overall gaming experience',
        'Performed root cause analysis of issues',
        'Executed test cases for functionality, compatibility, usability, and regression'
      ]
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: "Master's degree, Information and Computer Systems Engineering",
      company: 'University POLITEHNICA of Bucharest',
      location: 'Bucharest, Romania',
      period: '2020 - 2022',
      description: 'Graduate studies in information and computer systems engineering.'
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: "Bachelor's degree, Electronics, Telecomunication and Technology",
      company: 'University POLITEHNICA of Bucharest',
      location: 'Bucharest, Romania',
      period: '2016 - 2020',
      description: 'Undergraduate studies in electronics and telecommunications.'
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Graduation Diploma, Mathematics and Computer Science',
      company: 'National College "Alexandru Lahovari"',
      location: 'Bucharest, Romania',
      period: '2012 - 2016',
      description: 'Mathematics and computer science curriculum.'
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
