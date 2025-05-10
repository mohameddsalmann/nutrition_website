export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  category: string;
  cuisine: string;
  difficulty: 'easy' | 'medium' | 'hard';
  rating: number;
  reviewCount: number;
}

export interface MealPlan {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  caloriesPerDay: number;
  mealsPerDay: number;
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  imageUrl: string;
  text: string;
  rating: number;
  program: string;
}