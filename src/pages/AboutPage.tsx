import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            To empower people to achieve optimal health through personalized nutrition and delicious, wholesome meals.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our team" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                NutriPlan was founded in 2020 by a team of nutritionists, chefs, and health enthusiasts who shared a common frustration: despite an abundance of nutrition information online, people still struggled to create balanced meal plans that worked for their unique needs.
              </p>
              <p className="text-gray-700 mb-4">
                We set out to solve this problem by combining evidence-based nutrition science with delicious recipes and user-friendly technology. Our goal was to make personalized nutrition accessible to everyone, regardless of their cooking experience or dietary restrictions.
              </p>
              <p className="text-gray-700">
                Today, NutriPlan serves thousands of users worldwide, helping them achieve their health goals through customized meal plans and nutrition education. We're proud to be part of our users' health journeys and remain committed to our mission of making healthy eating simple, enjoyable, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-primary-500" />,
                title: "Evidence-Based Approach",
                description: "We base all our nutrition recommendations on solid scientific research and regularly update our content to reflect the latest findings."
              },
              {
                icon: <Award className="h-12 w-12 text-primary-500" />,
                title: "Quality & Taste",
                description: "We believe healthy food should be delicious. All our recipes are chef-developed and tested to ensure they're both nutritious and satisfying."
              },
              {
                icon: <Heart className="h-12 w-12 text-primary-500" />,
                title: "Personalization",
                description: "We recognize that nutrition is not one-size-fits-all. Our plans are designed to be customizable to diverse needs, preferences, and lifestyles."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The nutritionists, chefs, and tech experts bringing NutriPlan to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Emma Wilson",
                role: "Chief Nutritionist",
                image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "PhD in Nutrition Science with 15 years of clinical experience."
              },
              {
                name: "Chef Michael Chen",
                role: "Head of Recipe Development",
                image: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Culinary Institute graduate specialized in healthy cooking techniques."
              },
              {
                name: "Sara Patel",
                role: "Dietitian & Content Lead",
                image: "https://images.pexels.com/photos/3782164/pexels-photo-3782164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Registered Dietitian passionate about making nutrition science accessible."
              },
              {
                name: "James Thompson",
                role: "Tech Lead",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Software engineer with a background in health tech and AI."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to transform your nutrition habits?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of others who have improved their health with NutriPlan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/calculator" 
              className="px-8 py-3 bg-white text-accent-600 font-medium rounded-full hover:bg-gray-100 transition"
            >
              Calculate Your Needs
            </Link>
            <Link 
              to="/meal-plans" 
              className="px-8 py-3 bg-accent-600 text-white font-medium rounded-full hover:bg-accent-700 transition"
            >
              View Meal Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;