import { MealPlan } from '../types';

export const mealPlans: MealPlan[] = [
  {
    id: "1",
    title: "Weight Loss Meal Plan",
    description: "A calorie-controlled meal plan designed to support healthy weight loss while maintaining energy levels.",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "weight-loss",
    tags: ["low-calorie", "high-protein", "balanced"],
    duration: 7,
    difficulty: "medium",
    caloriesPerDay: 1500,
    mealsPerDay: 3,
    rating: 4.7,
    reviewCount: 253
  },
  {
    id: "2",
    title: "Muscle Building Plan",
    description: "High protein meal plan designed to support muscle growth and recovery after workouts.",
    imageUrl: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "muscle-gain",
    tags: ["high-protein", "bulking", "performance"],
    duration: 14,
    difficulty: "medium",
    caloriesPerDay: 2800,
    mealsPerDay: 5,
    rating: 4.8,
    reviewCount: 187
  },
  {
    id: "3",
    title: "Vegan 7-Day Reset",
    description: "A plant-based meal plan rich in fruits, vegetables, legumes, and whole grains to energize your body.",
    imageUrl: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "vegan",
    tags: ["plant-based", "dairy-free", "detox"],
    duration: 7,
    difficulty: "easy",
    caloriesPerDay: 1800,
    mealsPerDay: 3,
    rating: 4.6,
    reviewCount: 142
  },
  {
    id: "4",
    title: "Diabetic-Friendly Plan",
    description: "A balanced meal plan with controlled carbohydrates to help maintain stable blood sugar levels.",
    imageUrl: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "diabetic",
    tags: ["low-glycemic", "balanced", "health-conscious"],
    duration: 14,
    difficulty: "medium",
    caloriesPerDay: 1700,
    mealsPerDay: 5,
    rating: 4.9,
    reviewCount: 98
  },
  {
    id: "5",
    title: "Heart-Healthy Mediterranean",
    description: "Based on the Mediterranean diet, this plan focuses on heart-healthy fats, lean proteins, and whole grains.",
    imageUrl: "https://images.pexels.com/photos/4553030/pexels-photo-4553030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "heart-healthy",
    tags: ["mediterranean", "omega-3", "anti-inflammatory"],
    duration: 21,
    difficulty: "easy",
    caloriesPerDay: 2000,
    mealsPerDay: 3,
    rating: 4.8,
    reviewCount: 176
  },
  {
    id: "6",
    title: "Keto Jump Start",
    description: "A low-carb, high-fat meal plan designed to help your body enter ketosis for accelerated fat burning.",
    imageUrl: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "keto",
    tags: ["low-carb", "high-fat", "ketogenic"],
    duration: 14,
    difficulty: "hard",
    caloriesPerDay: 1800,
    mealsPerDay: 3,
    rating: 4.5,
    reviewCount: 215
  }
];

export const getMealPlanById = (id: string): MealPlan | undefined => {
  return mealPlans.find(plan => plan.id === id);
};

export const getMealPlansByCategory = (category: string): MealPlan[] => {
  return mealPlans.filter(plan => plan.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedMealPlans = (count: number = 3): MealPlan[] => {
  return mealPlans.slice(0, count);
};