import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiBook, FiBriefcase, FiAward } from 'react-icons/fi';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "SPPU, Pune",
      field: "Mechanical Engineering",
      year: "",
      grade: "8 CGPA"
    }
  ];

  const experience = [];

  const projects = [
    {
      name: "FooDiv - Restaurant Delivery Application",
      description: "Full-stack restaurant delivery application with role-based access control",
      technologies: "React 19, Redux Toolkit, Tailwind CSS 4, Firebase REST API, React Router DOM, Vite",
      responsibilities: [
        "Developed separate admin and customer workflows using role-based access control",
        "Integrated Firebase Authentication and Firestore via REST APIs without SDKs",
        "Built dynamic shopping cart with quantity controls and real-time price updates",
        "Designed real-time recipe search with instant filtering by name and ingredients",
        "Created responsive, mobile-first UI optimized for performance and usability",
        "Developed admin dashboard with full CRUD operations for categories and recipes"
      ]
    },
    {
      name: "Expense Tracker - MERN Stack Application",
      description: "Full-stack expense tracking with JWT authentication and premium membership",
      technologies: "MongoDB, Express.js, React 18, Node.js, Redux Toolkit, Tailwind CSS, JWT, Cashfree, Vite",
      responsibilities: [
        "Developed full-stack application with JWT-based authentication and secure sessions",
        "Implemented CRUD operations with category management and server-side pagination",
        "Built premium membership (₹499/year) with Cashfree payment gateway integration",
        "Created expense analytics and CSV report generation for premium users",
        "Implemented secure password reset with token generation and bcrypt encryption",
        "Used Redux Toolkit for state management and React Router v6 for protected routes"
      ]
    },
    {
      name: "Charity Donation Platform",
      description: "Full-featured charity platform with role-based authentication",
      technologies: "Node.js, Express, PostgreSQL, JWT, HTML5, CSS3",
      responsibilities: [
        "Designed role-based authentication system (Admin, Charity, Donor)",
        "Implemented charity registration and approval workflow",
        "Integrated secure payment processing with Cashfree gateway",
        "Built comprehensive analytics dashboard for insights",
        "Developed responsive UI with modern design principles"
      ]
    }
  ];

  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Socket.io"],
    "Database": ["MongoDB", "PostgreSQL", "Sequelize ORM", "Database Design"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "npm/yarn", "Heroku"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-start justify-center bg-dark-800/50 pt-20 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Resume
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              My professional journey, skills, and achievements
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto mb-8"></div>
            
            {/* Download Button */}
            <motion.a
              href="/Shubham_Raut.pdf"
              download="Shubham_Raut_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2 mx-auto inline-flex"
            >
              <FiDownload />
              Download Resume PDF
            </motion.a>
          </motion.div>

          {/* Resume Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Personal Info */}
              <motion.div variants={itemVariants} className="glass rounded-xl p-6 glow-on-hover">
                <div className="flex items-center gap-3 mb-4">
                  <FiUser className="text-primary-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Personal Info</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white ml-2">Shubham Raut</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white ml-2">Pune, India</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white ml-2">rshubham928@gmail.com</span>
                  </div>

                </div>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants} className="glass rounded-xl p-6 glow-on-hover">
                <div className="flex items-center gap-3 mb-4">
                  <FiAward className="text-primary-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Skills</h3>
                </div>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-primary-400 font-semibold mb-2 text-sm">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-dark-700/50 text-gray-300 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education */}
              <motion.div variants={itemVariants} className="glass rounded-xl p-6 glow-on-hover">
                <div className="flex items-center gap-3 mb-6">
                  <FiBook className="text-primary-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-primary-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.field}</p>
                    <div className="flex justify-between items-center mt-2">
                      {edu.year && <span className="text-gray-500 text-sm">{edu.year}</span>}
                      <span className="text-green-400 text-sm font-medium">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Experience - Only show if there's experience data */}
              {experience.length > 0 && (
                <motion.div variants={itemVariants} className="glass rounded-xl p-6 glow-on-hover">
                  <div className="flex items-center gap-3 mb-6">
                    <FiBriefcase className="text-primary-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Experience</h3>
                  </div>
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-pink-500 pl-4 mb-6">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-pink-400 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-400 text-sm flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Projects */}
              <motion.div variants={itemVariants} className="glass rounded-xl p-6 glow-on-hover">
                <div className="flex items-center gap-3 mb-6">
                  <FiAward className="text-primary-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Key Projects</h3>
                </div>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                      <p className="text-blue-400 font-medium text-sm mb-2">{project.description}</p>
                      <p className="text-gray-500 text-xs mb-3">
                        <span className="font-medium">Technologies:</span> {project.technologies}
                      </p>
                      <ul className="space-y-1">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-400 text-sm flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
