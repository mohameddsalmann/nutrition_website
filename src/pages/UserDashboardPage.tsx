import React, { useState } from 'react';
import { Calendar, PieChart, TrendingUp, BookOpen, ShoppingCart, User, Edit, Save } from 'lucide-react';
import { getFeaturedRecipes } from '../data/recipes';

interface UserStats {
  calories: {
    target: number;
    consumed: number;
  };
  macros: {
    protein: { target: number; consumed: number };
    carbs: { target: number; consumed: number };
    fat: { target: number; consumed: number };
  };
  weight: {
    current: number;
    previous: number;
    goal: number;
  };
  water: {
    target: number;
    consumed: number;
  };
}

interface DailyFoodLog {
  id: string;
  name: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
}

const UserDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'mealPlan' | 'progress' | 'savedRecipes'>('overview');
  const [editingProfile, setEditingProfile] = useState(false);
  
  const savedRecipes = getFeaturedRecipes(4);

  // Mock user data
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    age: 32,
    weight: 75,
    height: 175,
    goal: 'weight-loss',
    dietRestrictions: ['dairy-free'],
    calorieTarget: 2200,
  });

  const [userStats, setUserStats] = useState<UserStats>({
    calories: {
      target: 2200,
      consumed: 1650,
    },
    macros: {
      protein: { target: 120, consumed: 95 },
      carbs: { target: 220, consumed: 175 },
      fat: { target: 75, consumed: 52 },
    },
    weight: {
      current: 75,
      previous: 77,
      goal: 70,
    },
    water: {
      target: 8,
      consumed: 6,
    }
  });

  const [foodLog, setFoodLog] = useState<DailyFoodLog[]>([
    {
      id: '1',
      name: 'Greek Yogurt with Berries',
      mealType: 'breakfast',
      calories: 320,
      protein: 22,
      carbs: 45,
      fat: 8,
      time: '07:30 AM',
    },
    {
      id: '2',
      name: 'Grilled Chicken Salad',
      mealType: 'lunch',
      calories: 450,
      protein: 35,
      carbs: 30,
      fat: 18,
      time: '12:30 PM',
    },
    {
      id: '3',
      name: 'Protein Shake',
      mealType: 'snack',
      calories: 180,
      protein: 25,
      carbs: 15,
      fat: 2,
      time: '03:30 PM',
    },
    {
      id: '4',
      name: 'Salmon with Roasted Vegetables',
      mealType: 'dinner',
      calories: 520,
      protein: 40,
      carbs: 35,
      fat: 25,
      time: '07:00 PM',
    },
  ]);

  // Handle profile edit
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: name === 'age' || name === 'weight' || name === 'height' || name === 'calorieTarget' 
        ? parseInt(value) 
        : value
    });
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <PieChart className="h-5 w-5 text-primary-500 mr-2" />
                  Calories
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Consumed</span>
                  <span className="font-semibold">{userStats.calories.consumed} / {userStats.calories.target}</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
                  <div 
                    className="bg-primary-500 h-3 rounded-full" 
                    style={{ width: `${(userStats.calories.consumed / userStats.calories.target) * 100}%` }}
                  ></div>
                </div>
                
                <h4 className="font-medium text-sm mb-2">Macronutrients</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Protein ({userStats.macros.protein.consumed}g / {userStats.macros.protein.target}g)</span>
                      <span className="font-medium">{Math.round((userStats.macros.protein.consumed / userStats.macros.protein.target) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(userStats.macros.protein.consumed / userStats.macros.protein.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Carbs ({userStats.macros.carbs.consumed}g / {userStats.macros.carbs.target}g)</span>
                      <span className="font-medium">{Math.round((userStats.macros.carbs.consumed / userStats.macros.carbs.target) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(userStats.macros.carbs.consumed / userStats.macros.carbs.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Fat ({userStats.macros.fat.consumed}g / {userStats.macros.fat.target}g)</span>
                      <span className="font-medium">{Math.round((userStats.macros.fat.consumed / userStats.macros.fat.target) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${(userStats.macros.fat.consumed / userStats.macros.fat.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary-500 mr-2" />
                  Weight Tracking
                </h3>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-gray-600 text-sm">Current</p>
                    <p className="text-2xl font-bold">{userStats.weight.current} kg</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Change</p>
                    <p className="text-lg font-medium text-green-500">
                      -{userStats.weight.previous - userStats.weight.current} kg
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">Goal</p>
                    <p className="text-2xl font-bold">{userStats.weight.goal} kg</p>
                  </div>
                </div>
                <div className="relative pt-6">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="absolute top-0 h-2 bg-primary-500 rounded-full" 
                      style={{ 
                        width: `${(1 - ((userStats.weight.current - userStats.weight.goal) / (userStats.weight.previous - userStats.weight.goal))) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Starting: {userStats.weight.previous} kg</span>
                    <span>Goal: {userStats.weight.goal} kg</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-primary-500 mr-2" />
                  Today's Plan
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">BREAKFAST</h4>
                    <p className="font-medium">Greek Yogurt Bowl with Berries</p>
                    <p className="text-sm text-gray-600">320 calories</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">LUNCH</h4>
                    <p className="font-medium">Mediterranean Quinoa Salad</p>
                    <p className="text-sm text-gray-600">450 calories</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">DINNER</h4>
                    <p className="font-medium">Baked Salmon with Roasted Vegetables</p>
                    <p className="text-sm text-gray-600">520 calories</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">SNACK</h4>
                    <p className="font-medium">Apple with Almond Butter</p>
                    <p className="text-sm text-gray-600">180 calories</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-xl mb-4">Today's Food Log</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Food</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Meal</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-600">Time</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-600">Calories</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-600">Protein</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-600">Carbs</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-600">Fat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodLog.map((food) => (
                      <tr key={food.id} className="border-t border-gray-200">
                        <td className="py-3 px-4">{food.name}</td>
                        <td className="py-3 px-4 capitalize">{food.mealType}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600">{food.time}</td>
                        <td className="py-3 px-4 text-center">{food.calories}</td>
                        <td className="py-3 px-4 text-center">{food.protein}g</td>
                        <td className="py-3 px-4 text-center">{food.carbs}g</td>
                        <td className="py-3 px-4 text-center">{food.fat}g</td>
                      </tr>
                    ))}
                    <tr className="border-t border-gray-200 bg-gray-50 font-semibold">
                      <td className="py-3 px-4" colSpan={3}>Total</td>
                      <td className="py-3 px-4 text-center">{foodLog.reduce((sum, food) => sum + food.calories, 0)}</td>
                      <td className="py-3 px-4 text-center">{foodLog.reduce((sum, food) => sum + food.protein, 0)}g</td>
                      <td className="py-3 px-4 text-center">{foodLog.reduce((sum, food) => sum + food.carbs, 0)}g</td>
                      <td className="py-3 px-4 text-center">{foodLog.reduce((sum, food) => sum + food.fat, 0)}g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg flex items-center">
                  <User className="h-5 w-5 text-primary-500 mr-2" />
                  Your Profile
                </h3>
                <button 
                  onClick={() => setEditingProfile(!editingProfile)}
                  className="flex items-center text-primary-600 hover:text-primary-700"
                >
                  {editingProfile ? (
                    <>
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </>
                  )}
                </button>
              </div>
              
              {editingProfile ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={userProfile.name}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={userProfile.email}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input 
                      type="number" 
                      name="age" 
                      value={userProfile.age}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                    <input 
                      type="number" 
                      name="weight" 
                      value={userProfile.weight}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                    <input 
                      type="number" 
                      name="height" 
                      value={userProfile.height}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Goal</label>
                    <select 
                      name="goal" 
                      value={userProfile.goal}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="weight-loss">Weight Loss</option>
                      <option value="maintain">Maintain Weight</option>
                      <option value="muscle-gain">Muscle Gain</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Daily Calorie Target</label>
                    <input 
                      type="number" 
                      name="calorieTarget" 
                      value={userProfile.calorieTarget}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{userProfile.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{userProfile.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-medium">{userProfile.age} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="font-medium">{userProfile.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Height</p>
                    <p className="font-medium">{userProfile.height} cm</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Goal</p>
                    <p className="font-medium capitalize">{userProfile.goal.replace('-', ' ')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Daily Calorie Target</p>
                    <p className="font-medium">{userProfile.calorieTarget} calories</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dietary Restrictions</p>
                    <p className="font-medium capitalize">
                      {userProfile.dietRestrictions.length > 0 
                        ? userProfile.dietRestrictions.map(r => r.replace('-', ' ')).join(', ') 
                        : 'None'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case 'savedRecipes':
        return (
          <div>
            <h3 className="font-bold text-xl mb-6">Your Saved Recipes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="relative">
                    <img 
                      src={recipe.imageUrl} 
                      alt={recipe.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm">
                      <Bookmark className="h-4 w-4 text-primary-500 fill-primary-500" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-1 line-clamp-1">{recipe.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                      </div>
                      <div>
                        <span className="font-medium">{recipe.calories} cal</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return (
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="font-bold text-xl mb-4">Coming Soon</h3>
            <p className="text-gray-600 mb-4">This feature is currently under development.</p>
            <button 
              onClick={() => setActiveTab('overview')}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
            >
              Back to Overview
            </button>
          </div>
        );
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold">My Dashboard</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Weekly Meal Plan</span>
            </button>
            <button className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Shopping List</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="flex">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-4 text-center transition ${
                activeTab === 'overview' 
                  ? 'bg-primary-500 text-white font-medium' 
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('mealPlan')}
              className={`flex-1 py-4 text-center transition ${
                activeTab === 'mealPlan' 
                  ? 'bg-primary-500 text-white font-medium' 
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              Meal Plan
            </button>
            <button 
              onClick={() => setActiveTab('progress')}
              className={`flex-1 py-4 text-center transition ${
                activeTab === 'progress' 
                  ? 'bg-primary-500 text-white font-medium' 
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              Progress
            </button>
            <button 
              onClick={() => setActiveTab('savedRecipes')}
              className={`flex-1 py-4 text-center transition ${
                activeTab === 'savedRecipes' 
                  ? 'bg-primary-500 text-white font-medium' 
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              Saved Recipes
            </button>
          </div>
        </div>

        {renderTab()}
      </div>
    </div>
  );
};

export default UserDashboardPage;