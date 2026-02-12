import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Home = () => {
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi There! 👋
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
                I'm Shubham Raut
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-xl md:text-2xl text-gray-300 h-16 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'Full-Stack Developer',
                    2000,
                    'React.js Developer',
                    2000,
                    'Node.js Developer',
                    2000,
                    'JavaScript Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="typing-cursor"
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating innovative web solutions with modern technologies. 
              I love turning ideas into reality through clean, efficient code.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/Shubham_Raut.pdf"
                download="Shubham_Raut_Resume.pdf"
                className="btn-primary px-8 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform inline-flex"
              >
                <FiDownload />
                Download Resume
              </a>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/shubhs7799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 transition-all duration-300 glow-on-hover"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-raut-bb4537285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 transition-all duration-300 glow-on-hover"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Developer SVG */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative animate-float">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="url(#gradient1)"
                    opacity="0.1"
                  />
                  
                  {/* Developer Character */}
                  <g transform="translate(200, 200)">
                    {/* Head */}
                    <circle cx="0" cy="-60" r="25" fill="#FDBCB4" />
                    
                    {/* Hair */}
                    <path
                      d="M -25 -75 Q 0 -90 25 -75 Q 20 -85 0 -85 Q -20 -85 -25 -75"
                      fill="#4A5568"
                    />
                    
                    {/* Eyes */}
                    <circle cx="-8" cy="-65" r="2" fill="#2D3748" />
                    <circle cx="8" cy="-65" r="2" fill="#2D3748" />
                    
                    {/* Smile */}
                    <path
                      d="M -8 -50 Q 0 -45 8 -50"
                      stroke="#2D3748"
                      strokeWidth="2"
                      fill="none"
                    />
                    
                    {/* Body */}
                    <rect x="-20" y="-35" width="40" height="60" rx="20" fill="#4299E1" />
                    
                    {/* Arms */}
                    <rect x="-35" y="-25" width="15" height="40" rx="7" fill="#FDBCB4" />
                    <rect x="20" y="-25" width="15" height="40" rx="7" fill="#FDBCB4" />
                    
                    {/* Laptop */}
                    <rect x="-25" y="10" width="50" height="30" rx="3" fill="#2D3748" />
                    <rect x="-23" y="12" width="46" height="20" rx="2" fill="#1A202C" />
                    
                    {/* Code on screen */}
                    <rect x="-20" y="15" width="8" height="2" fill="#68D391" />
                    <rect x="-10" y="15" width="12" height="2" fill="#F6E05E" />
                    <rect x="-20" y="19" width="15" height="2" fill="#63B3ED" />
                    <rect x="-20" y="23" width="10" height="2" fill="#FC8181" />
                    <rect x="-8" y="23" width="18" height="2" fill="#B794F6" />
                    <rect x="-20" y="27" width="25" height="2" fill="#68D391" />
                    
                    {/* Legs */}
                    <rect x="-15" y="25" width="12" height="35" rx="6" fill="#2B6CB0" />
                    <rect x="3" y="25" width="12" height="35" rx="6" fill="#2B6CB0" />
                  </g>
                  
                  {/* Floating Code Elements */}
                  <g className="animate-pulse-slow">
                    <rect x="50" y="100" width="30" height="4" rx="2" fill="#a855f7" opacity="0.6" />
                    <text x="55" y="110" fill="#a855f7" fontSize="8" opacity="0.8">{'<div>'}</text>
                  </g>
                  
                  <g className="animate-bounce-slow">
                    <rect x="320" y="150" width="25" height="4" rx="2" fill="#ec4899" opacity="0.6" />
                    <text x="325" y="160" fill="#ec4899" fontSize="8" opacity="0.8">{'{ }'}</text>
                  </g>
                  
                  <g className="animate-pulse-slow" style={{ animationDelay: '1s' }}>
                    <rect x="80" y="280" width="35" height="4" rx="2" fill="#06b6d4" opacity="0.6" />
                    <text x="85" y="290" fill="#06b6d4" fontSize="8" opacity="0.8">{'const'}</text>
                  </g>
                  
                  <g className="animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                    <rect x="300" y="280" width="20" height="4" rx="2" fill="#10b981" opacity="0.6" />
                    <text x="305" y="290" fill="#10b981" fontSize="8" opacity="0.8">{'( )'}</text>
                  </g>
                  
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
