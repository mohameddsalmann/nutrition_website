import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedRecipes } from '../../data/recipes';

const FeaturedRecipes: React.FC = () => {
  const recipes = getFeaturedRecipes(3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Recipes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular healthy and delicious recipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div 
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Link to={`/recipes/${recipe.id}`} className="block">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={recipe.imageUrl} 
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium">
                    {recipe.calories} cal
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                      {recipe.category}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{recipe.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{recipe.prepTime + recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/recipes"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition"
          >
            View all recipes
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;