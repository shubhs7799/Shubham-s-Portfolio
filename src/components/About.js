import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiVisualstudiocode, 
  SiPostman, 
  SiGithub, 
  SiSlack,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'SQL', icon: FaDatabase, color: '#336791' },
  ];

  const tools = [
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Slack', icon: SiSlack, color: '#4A154B' },
  ];

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-800/50 pt-20">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-xl p-8 glow-on-hover">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello! I'm Shubham Raut
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate MERN Stack Developer from <span className="text-primary-400 font-semibold">Pune, India</span>. 
                  I love creating innovative web applications that solve real-world problems and provide 
                  exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My journey in web development started with a curiosity about how websites work, 
                  and it has evolved into a passion for building scalable, efficient, and beautiful 
                  web applications using modern technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Education & Goals */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-xl p-8 glow-on-hover">
                <h3 className="text-2xl font-bold text-white mb-6">Education & Goals</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="text-lg font-semibold text-primary-400">
                      Bachelor of Engineering
                    </h4>
                    <p className="text-gray-300">JSPM's Rajarshi Shahu College of Engineering, Pune</p>
                    <p className="text-sm text-gray-400">Mechanical Engineering</p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="text-lg font-semibold text-pink-400">
                      Career Goal
                    </h4>
                    <p className="text-gray-300">
                      Aspiring to become a Full-Stack MERN Developer and contribute to 
                      innovative projects that make a positive impact on users' lives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              My Skillset
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-6 text-center glow-on-hover group"
                >
                  <skill.icon 
                    size={40} 
                    className="mx-auto mb-3 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              Tools I Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-6 text-center glow-on-hover group"
                >
                  <tool.icon 
                    size={40} 
                    className="mx-auto mb-3 transition-colors duration-300"
                    style={{ color: tool.color }}
                  />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
