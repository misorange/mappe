import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-200">My Portfolio</h1>
        
        <nav>
          <ul className="flex space-x-6 text-gray-200">
            <li><a href="#introduction" className="hover:text-gray-400">Introduction</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#interests" className="hover:text-gray-400">Interests</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
