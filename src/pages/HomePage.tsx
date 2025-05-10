import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Utensils, Calculator, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturedRecipes from '../components/recipes/FeaturedRecipes';
import Testimonials from '../components/testimonials/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
                Personalized Nutrition Plans & Healthy Recipes
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Achieve your health goals with customized meal plans tailored to your body's needs and food preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/meal-plans" 
                  className="bg-white text-primary-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center justify-center"
                >
                  Get Your Free Meal Plan
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
                <Link 
                  to="/calculator" 
                  className="bg-primary-400 hover:bg-primary-300 text-white px-6 py-3 rounded-full font-medium transition flex items-center justify-center"
                >
                  Calculate Your Daily Calories
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthy meal preparation" 
                className="rounded-xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How NutriPlan Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get personalized nutrition guidance in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Calculator className="h-12 w-12 text-primary-500" />,
                title: "Calculate Your Needs",
                description: "Use our advanced calculator to determine your daily caloric and macronutrient needs based on your goals."
              },
              {
                icon: <Utensils className="h-12 w-12 text-primary-500" />,
                title: "Browse Recipes & Plans",
                description: "Explore our collection of delicious, healthy recipes and pre-made meal plans tailored to different dietary needs."
              },
              {
                icon: <Calendar className="h-12 w-12 text-primary-500" />,
                title: "Track Your Progress",
                description: "Follow your personalized plan and track your progress with our intuitive dashboard and logging tools."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <FeaturedRecipes />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="bg-accent-500 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform your nutrition habits?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of others who have improved their health with our personalized approach.
            </p>
            <Link 
              to="/calculator" 
              className="inline-block bg-white text-accent-600 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition text-lg"
            >
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;