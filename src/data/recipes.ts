import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Mediterranean Quinoa Bowl",
    description: "A nutritious quinoa bowl packed with Mediterranean flavors and fresh vegetables.",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    calories: 420,
    protein: 15,
    carbs: 58,
    fat: 16,
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, finely diced",
      "1/2 cup kalamata olives, pitted and sliced",
      "1/2 cup feta cheese, crumbled",
      "2 tbsp extra virgin olive oil",
      "1 lemon, juiced",
      "2 tbsp fresh parsley, chopped",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a medium saucepan, combine quinoa and vegetable broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed.",
      "While quinoa is cooking, prepare all vegetables and combine in a large bowl.",
      "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.",
      "Once quinoa is cooked, let it cool slightly, then add to the bowl with vegetables.",
      "Pour dressing over the quinoa mixture and toss to combine.",
      "Sprinkle with feta cheese and fresh parsley before serving."
    ],
    tags: ["vegetarian", "high-protein", "mediterranean", "healthy", "lunch"],
    category: "lunch",
    cuisine: "mediterranean",
    difficulty: "easy",
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: "2",
    title: "Grilled Chicken with Avocado Salsa",
    description: "Juicy grilled chicken breast topped with fresh avocado salsa. Perfect for a high-protein dinner.",
    imageUrl: "https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 380,
    protein: 35,
    carbs: 12,
    fat: 22,
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "2 tbsp olive oil",
      "2 tsp paprika",
      "1 tsp garlic powder",
      "1 tsp dried oregano",
      "2 avocados, diced",
      "1 cup cherry tomatoes, quartered",
      "1/4 cup red onion, finely diced",
      "1 jalapeño, seeded and minced",
      "1/4 cup cilantro, chopped",
      "2 limes, juiced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a bowl, mix olive oil, paprika, garlic powder, oregano, salt, and pepper.",
      "Brush the chicken breasts with the spice mixture.",
      "Preheat grill to medium-high heat and grill chicken for 6-7 minutes per side, or until internal temperature reaches 165°F (74°C).",
      "While chicken is cooking, prepare the avocado salsa by combining diced avocados, tomatoes, red onion, jalapeño, and cilantro in a bowl.",
      "Add lime juice, salt, and pepper to the salsa and gently toss.",
      "Let the grilled chicken rest for 5 minutes before serving.",
      "Top each chicken breast with avocado salsa before serving."
    ],
    tags: ["high-protein", "low-carb", "dinner", "gluten-free"],
    category: "dinner",
    cuisine: "mexican-inspired",
    difficulty: "medium",
    rating: 4.9,
    reviewCount: 87
  },
  {
    id: "3",
    title: "Berry Protein Smoothie Bowl",
    description: "A nutritious and Instagram-worthy smoothie bowl packed with berries, protein, and crunchy toppings.",
    imageUrl: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    calories: 320,
    protein: 24,
    carbs: 40,
    fat: 10,
    ingredients: [
      "1 cup mixed frozen berries",
      "1 frozen banana",
      "1 scoop vanilla protein powder",
      "1/4 cup Greek yogurt",
      "1/4 cup almond milk",
      "1 tbsp chia seeds",
      "1 tbsp honey or maple syrup (optional)",
      "Toppings: fresh berries, granola, sliced banana, coconut flakes"
    ],
    instructions: [
      "Add frozen berries, banana, protein powder, Greek yogurt, and almond milk to a blender.",
      "Blend until smooth and creamy. Add more almond milk if needed, but keep it thick enough to eat with a spoon.",
      "Pour into a bowl and top with fresh berries, granola, sliced banana, coconut flakes, and a sprinkle of chia seeds.",
      "Drizzle with honey or maple syrup if desired."
    ],
    tags: ["breakfast", "high-protein", "vegetarian", "quick"],
    category: "breakfast",
    cuisine: "american",
    difficulty: "easy",
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: "4",
    title: "Sheet Pan Salmon with Roasted Vegetables",
    description: "A simple yet delicious sheet pan dinner with omega-3 rich salmon and colorful roasted vegetables.",
    imageUrl: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    calories: 410,
    protein: 28,
    carbs: 22,
    fat: 24,
    ingredients: [
      "4 salmon fillets (about 6 oz each)",
      "2 cups broccoli florets",
      "2 bell peppers, sliced",
      "1 red onion, cut into wedges",
      "2 cups cherry tomatoes",
      "3 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 lemon, sliced",
      "2 tsp dried herbs (thyme, rosemary, or Italian seasoning)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a large baking sheet with parchment paper.",
      "Toss the broccoli, bell peppers, onion, and tomatoes with 2 tbsp olive oil, minced garlic, salt, and pepper.",
      "Spread the vegetables on the baking sheet and roast for 10 minutes.",
      "Meanwhile, pat the salmon fillets dry and season with salt, pepper, and dried herbs.",
      "Remove the baking sheet from the oven, push the vegetables to the sides, and place the salmon in the center.",
      "Drizzle the salmon with the remaining olive oil and top with lemon slices.",
      "Return to the oven and bake for an additional 12-15 minutes until the salmon is cooked through and flakes easily.",
      "Serve immediately, with each salmon fillet accompanied by a portion of roasted vegetables."
    ],
    tags: ["dinner", "high-protein", "sheet-pan", "gluten-free", "dairy-free"],
    category: "dinner",
    cuisine: "mediterranean",
    difficulty: "medium",
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: "5",
    title: "Green Detox Smoothie",
    description: "A refreshing green smoothie packed with nutrients to boost your energy and support detoxification.",
    imageUrl: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 180,
    protein: 5,
    carbs: 30,
    fat: 5,
    ingredients: [
      "2 cups spinach or kale",
      "1 green apple, cored and chopped",
      "1/2 cucumber, chopped",
      "1/2 avocado",
      "1 tbsp fresh ginger, grated",
      "1/2 lemon, juiced",
      "1 cup coconut water",
      "1/2 cup ice cubes",
      "1 tbsp chia seeds (optional)",
      "1 tsp honey or maple syrup (optional)"
    ],
    instructions: [
      "Add spinach, green apple, cucumber, avocado, ginger, lemon juice, and coconut water to a blender.",
      "Blend until smooth, adding more coconut water if needed.",
      "Add ice cubes and blend again until the smoothie is cold and well combined.",
      "Pour into a glass, sprinkle with chia seeds if using, and enjoy immediately."
    ],
    tags: ["breakfast", "detox", "vegan", "quick", "gluten-free"],
    category: "breakfast",
    cuisine: "american",
    difficulty: "easy",
    rating: 4.6,
    reviewCount: 78
  },
  {
    id: "6",
    title: "Vegetarian Buddha Bowl",
    description: "A nutritious and colorful bowl filled with roasted sweet potatoes, quinoa, and a variety of fresh vegetables.",
    imageUrl: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: 20,
    cookTime: 30,
    servings: 2,
    calories: 450,
    protein: 12,
    carbs: 65,
    fat: 18,
    ingredients: [
      "1 large sweet potato, cubed",
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 cup chickpeas, drained and rinsed",
      "2 cups kale, chopped",
      "1 avocado, sliced",
      "1/4 cup red cabbage, shredded",
      "1/4 cup carrots, grated",
      "2 tbsp olive oil",
      "1 tsp paprika",
      "1 tsp cumin",
      "2 tbsp tahini",
      "1 lemon, juiced",
      "1 tbsp maple syrup",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
      "Toss sweet potato cubes with 1 tbsp olive oil, paprika, cumin, salt, and pepper.",
      "Spread on the baking sheet and roast for 25-30 minutes until tender and slightly crispy.",
      "Meanwhile, cook quinoa in vegetable broth according to package instructions.",
      "In a small bowl, whisk together tahini, lemon juice, remaining olive oil, maple syrup, and a pinch of salt to make the dressing.",
      "Massage kale with a teaspoon of olive oil and a pinch of salt until softened.",
      "Assemble the bowls by dividing the quinoa, roasted sweet potatoes, chickpeas, kale, avocado, red cabbage, and carrots between two bowls.",
      "Drizzle with tahini dressing before serving."
    ],
    tags: ["vegetarian", "vegan", "bowl", "gluten-free", "lunch"],
    category: "lunch",
    cuisine: "fusion",
    difficulty: "medium",
    rating: 4.9,
    reviewCount: 104
  }
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedRecipes = (count: number = 3): Recipe[] => {
  return recipes.slice(0, count);
};