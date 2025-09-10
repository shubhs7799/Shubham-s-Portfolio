import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen dark bg-dark-900 transition-colors duration-300">
      <ParticleBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="min-h-screen">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;
