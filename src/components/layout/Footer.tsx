import React from 'react';
import { Link } from 'react-router-dom';
import { Salad, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Salad className="h-7 w-7 text-primary-400" />
              <span className="text-xl font-display font-bold">NutriPlan</span>
            </div>
            <p className="text-gray-300 mb-6">
              Personalized nutrition plans and healthy recipes to help you achieve your health goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition">Home</Link></li>
              <li><Link to="/calculator" className="text-gray-300 hover:text-primary-400 transition">Calorie Calculator</Link></li>
              <li><Link to="/recipes" className="text-gray-300 hover:text-primary-400 transition">Recipes</Link></li>
              <li><Link to="/meal-plans" className="text-gray-300 hover:text-primary-400 transition">Meal Plans</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition">Nutrition Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition">Cookbook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get weekly recipes and nutrition tips.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NutriPlan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;