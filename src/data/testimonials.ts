import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I've struggled with meal planning for years. NutriPlan has completely changed my relationship with food. I've lost 15 pounds and have so much more energy throughout the day!",
    rating: 5,
    program: "Weight Loss Meal Plan"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "As a busy professional, I never had time to plan healthy meals. The meal prep guides and simple recipes fit perfectly into my schedule. I've gained 10 pounds of muscle following the muscle building plan!",
    rating: 5,
    program: "Muscle Building Plan"
  },
  {
    id: "3",
    name: "Emily Chen",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "The diabetic-friendly meal plan has been a game-changer for managing my blood sugar. The recipes are delicious and I never feel like I'm missing out. My latest A1C test showed significant improvement!",
    rating: 5,
    program: "Diabetic-Friendly Plan"
  }
];

export const getTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};