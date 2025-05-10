import React, { useState } from 'react';
import { Clock, Users, Filter, X, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { mealPlans } from '../data/mealPlans';
import { MealPlan } from '../types';

const MealPlansPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['weight-loss', 'muscle-gain', 'vegan', 'diabetic', 'heart-healthy', 'keto'];
  const durations = [7, 14, 21, 30];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleDuration = (duration: number) => {
    if (selectedDurations.includes(duration)) {
      setSelectedDurations(selectedDurations.filter(d => d !== duration));
    } else {
      setSelectedDurations([...selectedDurations, duration]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
  };

  const getFilteredPlans = (): MealPlan[] => {
    let filtered = [...mealPlans];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(plan => selectedCategories.includes(plan.category));
    }

    if (selectedDurations.length > 0) {
      filtered = filtered.filter(plan => selectedDurations.includes(plan.duration));
    }

    return filtered;
  };

  const filteredPlans = getFilteredPlans();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Meal Plans for Every Goal</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover professionally designed meal plans customized to different health goals and dietary preferences
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-8">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Browse Meal Plans</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              {(selectedCategories.length > 0 || selectedDurations.length > 0) && (
                <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCategories.length + selectedDurations.length}
                </span>
              )}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Filter Meal Plans</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear all filters
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategories.includes(category)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.split('-').join(' ')}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Duration (days)</h4>
                  <div className="flex flex-wrap gap-2">
                    {durations.map(duration => (
                      <button
                        key={duration}
                        onClick={() => toggleDuration(duration)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedDurations.includes(duration)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {duration} days
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Meal Plans Grid */}
        {filteredPlans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="relative">
                  <img 
                    src={plan.imageUrl} 
                    alt={plan.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium">
                    {plan.duration}-Day Plan
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                      {plan.category.split('-').join(' ')}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{plan.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500" />
                      <span><span className="font-medium">{plan.mealsPerDay}</span> meals per day</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>~<span className="font-medium">{plan.caloriesPerDay}</span> calories per day</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500" />
                      <span><span className="font-medium">{plan.difficulty}</span> to prepare</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition">
                    View Plan Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">No meal plans found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* How It Works Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">How Our Meal Plans Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professionally crafted meal plans designed to fit your lifestyle and health goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Choose Your Plan",
                description: "Browse our selection of specialized meal plans designed for different health goals and dietary preferences."
              },
              {
                title: "2. Customize",
                description: "Adjust portions, swap ingredients, or modify recipes to suit your taste preferences and dietary restrictions."
              },
              {
                title: "3. Shop & Prep",
                description: "Use our auto-generated grocery lists to shop efficiently, then follow the simple meal prep instructions."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 font-bold text-xl rounded-full flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlansPage;