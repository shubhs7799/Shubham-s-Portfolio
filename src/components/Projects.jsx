import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript, 
  SiPostgresql,
  SiSocketdotio,
  SiSequelize,
  SiJsonwebtokens
} from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FooDiv - Restaurant Delivery Application",
      description: "A full-stack restaurant delivery application with separate admin and customer workflows using role-based access control. Features Firebase Authentication and Firestore integration via REST APIs.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Database', icon: FaDatabase, color: '#FF6C37' }
      ],
      features: [
        "Role-based Access Control (Admin & Customer)",
        "Firebase Authentication & Firestore via REST APIs",
        "Dynamic Shopping Cart with Real-time Updates",
        "Real-time Recipe Search & Filtering",
        "Responsive Mobile-first UI Design",
        "Admin Dashboard with CRUD Operations",
        "Order Status Management System",
        "Optimized Performance & Usability"
      ],
      githubUrl: "https://github.com/shubhs7799/manage-foodiv.git",
      liveUrl: "https://manage-foodiv.vercel.app",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Expense Tracker - MERN Stack Application",
      description: "A full-stack expense tracking application with JWT-based authentication, premium membership functionality, and comprehensive expense analytics with CSV report generation.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'JWT', icon: SiJsonwebtokens, color: '#000000' }
      ],
      features: [
        "JWT-based Authentication & Secure Sessions",
        "CRUD Operations with Category Management",
        "Premium Membership (₹499/year) via Cashfree",
        "Expense Analytics & CSV Report Generation",
        "Secure Password Reset with Token Expiration",
        "Redux Toolkit State Management",
        "Protected Routes with Middleware Authorization",
        "Server-side Pagination & Filtering"
      ],
      githubUrl: "https://github.com/shubhs7799/Expense-Tracker---Node.js-Project.git",
      liveUrl: null,
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Charity Donation Platform",
      description: "A full-featured charity donation platform with role-based authentication, charity management, secure payment processing, and comprehensive analytics dashboard.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'JWT', icon: SiJsonwebtokens, color: '#000000' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' }
      ],
      features: [
        "Role-based Authentication (Admin, Charity, Donor)",
        "Charity Registration & Approval System",
        "Cashfree Payment Gateway Integration",
        "Analytics Dashboard & Reporting",
        "Email Notifications System",
        "Responsive UI Design",
        "Security & Input Validation",
        "Donation Processing & Tracking"
      ],
      githubUrl: "https://github.com/shubhs7799/Charity-Donation-Platform.git",
      liveUrl: null,
      category: "Full-Stack"
    },
    {
      id: 4,
      title: "Group Chat App",
      description: "A real-time group chat application similar to WhatsApp, built with Socket.io for instant messaging, MongoDB for data persistence, and responsive design.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' }
      ],
      features: [
        "Real-time Messaging with Socket.io",
        "Group Chat Functionality",
        "User Authentication & Management",
        "Message History & Persistence",
        "Responsive Design",
        "WhatsApp-like Interface",
        "Online/Offline Status",
        "Message Timestamps"
      ],
      githubUrl: "https://github.com/shubhs7799/Group_Chat_App.git",
      liveUrl: null,
      category: "Full-Stack"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
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
              My Recent Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden glow-on-hover group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-900/20 to-pink-900/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCode size={60} className="text-primary-400/30" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-800/80 rounded-full text-white hover:text-primary-400 transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-dark-800/80 rounded-full text-white hover:text-primary-400 transition-colors"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-1 px-2 py-1 bg-dark-700/50 rounded-md text-xs"
                      >
                        <tech.icon size={12} style={{ color: tech.color }} />
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-primary-500/30 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-all duration-300 text-sm"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 btn-primary rounded-lg text-white text-sm"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/shubhs7799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 btn-primary rounded-lg text-white font-semibold hover:scale-105 transition-transform"
            >
              <FiGithub size={20} />
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
