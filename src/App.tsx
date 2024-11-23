import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Header />
      <Introduction />
      <Skills />
      <Interests />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
