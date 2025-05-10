import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChevronLeft, Bookmark, Share, Printer } from 'lucide-react';
import { getRecipeById } from '../data/recipes';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = getRecipeById(id || '');

  if (!recipe) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/recipes" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link 
            to="/recipes" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Recipes
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start">
                <div>
                  <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                    {recipe.category}
                  </span>
                  <h1 className="text-3xl font-bold mt-3 mb-2">{recipe.title}</h1>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                    <Bookmark className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                    <Share className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                    <Printer className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mt-2 mb-4">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium">{recipe.rating}</span>
                <span className="text-gray-500 ml-1">({recipe.reviewCount} reviews)</span>
              </div>

              <p className="text-gray-700 mb-6">{recipe.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-xs mb-1">Time</p>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary-500 mr-1" />
                    <p className="font-medium">{totalTime} min</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-xs mb-1">Servings</p>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-primary-500 mr-1" />
                    <p className="font-medium">{recipe.servings}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-xs mb-1">Calories</p>
                  <p className="font-medium">{recipe.calories}/serving</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500 text-xs mb-1">Difficulty</p>
                  <p className="font-medium capitalize">{recipe.difficulty}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3">Nutrition (per serving)</h3>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Protein</span>
                      <span className="text-sm font-medium">{recipe.protein}g</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(recipe.protein / (recipe.protein + recipe.carbs + recipe.fat)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="text-sm font-medium">{recipe.carbs}g</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(recipe.carbs / (recipe.protein + recipe.carbs + recipe.fat)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Fat</span>
                      <span className="text-sm font-medium">{recipe.fat}g</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${(recipe.fat / (recipe.protein + recipe.carbs + recipe.fat)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                {recipe.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 border-t">
            <div className="md:flex md:space-x-10">
              <div className="md:w-2/5 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-primary-500 mr-3 mt-0.5"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-3/5">
                <h2 className="text-2xl font-bold mb-6">Instructions</h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white font-semibold mr-4 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;