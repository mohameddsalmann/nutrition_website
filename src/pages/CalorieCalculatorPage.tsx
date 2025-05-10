import React, { useState, useEffect } from 'react';
import { Calculator, Info, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
}

const CalorieCalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: 'male',
    age: 30,
    weight: 70,
    height: 170,
    activityLevel: 'moderate',
    goal: 'maintain',
  });

  const [calories, setCalories] = useState<number | null>(null);
  const [macros, setMacros] = useState<{protein: number, carbs: number, fat: number} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'weight' || name === 'height' 
        ? parseInt(value) 
        : value
    }));
  };

  const calculateTDEE = () => {
    // BMR calculation using Mifflin-St Jeor Equation
    let bmr;
    if (formData.gender === 'male') {
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
    } else {
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;
    }

    // Activity multiplier
    let activityMultiplier;
    switch (formData.activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'veryActive':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    let tdee = Math.round(bmr * activityMultiplier);
    
    // Adjust for goal
    let goalCalories;
    switch (formData.goal) {
      case 'lose':
        goalCalories = tdee - 500; // 500 calorie deficit
        break;
      case 'gain':
        goalCalories = tdee + 500; // 500 calorie surplus
        break;
      default:
        goalCalories = tdee; // Maintain weight
    }

    // Calculate macros (simple version)
    // Protein: 30%, Carbs: 40%, Fat: 30%
    const protein = Math.round((goalCalories * 0.3) / 4); // 4 calories per gram of protein
    const carbs = Math.round((goalCalories * 0.4) / 4); // 4 calories per gram of carbs
    const fat = Math.round((goalCalories * 0.3) / 9); // 9 calories per gram of fat

    setCalories(goalCalories);
    setMacros({ protein, carbs, fat });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateTDEE();
  };

  // Recalculate when form data changes
  useEffect(() => {
    if (calories !== null) {
      calculateTDEE();
    }
  }, [formData]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Daily Calorie Calculator</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your recommended daily calorie intake based on your age, weight, height, and activity level.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Gender</label>
                    <div className="flex gap-4">
                      {['male', 'female'].map((gender) => (
                        <label key={gender} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${
                            formData.gender === gender 
                              ? 'border-primary-500 bg-primary-500' 
                              : 'border-gray-300'
                          }`}>
                            {formData.gender === gender && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span className="capitalize">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                      Age (years)
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="15"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      min="30"
                      max="250"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="height" className="block text-gray-700 font-medium mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      min="100"
                      max="250"
                      value={formData.height}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="activityLevel" className="block text-gray-700 font-medium mb-2">
                      Activity Level
                    </label>
                    <select
                      id="activityLevel"
                      name="activityLevel"
                      value={formData.activityLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="sedentary">Sedentary (little or no exercise)</option>
                      <option value="light">Light (exercise 1-3 days/week)</option>
                      <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                      <option value="active">Active (exercise 6-7 days/week)</option>
                      <option value="veryActive">Very Active (hard exercise daily)</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="goal" className="block text-gray-700 font-medium mb-2">
                      Goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="lose">Lose Weight</option>
                      <option value="maintain">Maintain Weight</option>
                      <option value="gain">Gain Weight</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center"
                  >
                    Calculate <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>

              <div className="md:w-1/2 bg-primary-50 p-8">
                {calories ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Results</h2>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                      <p className="text-gray-500 text-sm mb-1">Daily Calorie Needs</p>
                      <p className="text-4xl font-bold text-primary-600">{calories} <span className="text-lg font-normal">cal</span></p>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Recommended Macros</h3>
                    
                    {macros && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-gray-500 text-sm mb-1">Protein</p>
                          <p className="text-xl font-bold text-gray-800">{macros.protein}g</p>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-gray-500 text-sm mb-1">Carbs</p>
                          <p className="text-xl font-bold text-gray-800">{macros.carbs}g</p>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-gray-500 text-sm mb-1">Fat</p>
                          <p className="text-xl font-bold text-gray-800">{macros.fat}g</p>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
                            <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <div className="flex">
                        <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <p className="text-blue-700 text-sm">
                          These calculations provide an estimate based on the Mifflin-St Jeor equation. 
                          Individual needs may vary. Consult with a healthcare provider for personalized advice.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Calculator className="h-16 w-16 text-primary-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Your Results</h3>
                    <p className="text-gray-500 text-center">
                      Fill out the form and click calculate to see your personalized calorie recommendations.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">How We Calculate Your Calories</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                Our calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate methods to estimate your Basal Metabolic Rate (BMR). This is then adjusted based on your activity level to determine your Total Daily Energy Expenditure (TDEE).
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">For men:</span> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">For women:</span> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
              </p>
              <p className="text-gray-700">
                Your TDEE is then calculated by multiplying your BMR by an activity factor. This gives you the approximate number of calories you need to maintain your current weight. For weight loss, we recommend a moderate deficit of 500 calories per day, which should result in about 1 pound (0.45 kg) of weight loss per week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculatorPage;