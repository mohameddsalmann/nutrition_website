import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, User, Salad } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Calorie Calculator', path: '/calculator' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Meal Plans', path: '/meal-plans' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Salad className="h-8 w-8 text-primary-500" />
          <span className="text-2xl font-display font-bold text-gray-800">NutriPlan</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-medium transition hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/dashboard" 
            className="flex items-center space-x-1 px-4 py-2 rounded-full text-white bg-primary-500 hover:bg-primary-600 transition"
          >
            <User className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="px-4 py-5 space-y-5 shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block font-medium ${
                    isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/dashboard"
              className="block w-full text-center py-2 rounded-full text-white bg-primary-500 hover:bg-primary-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;