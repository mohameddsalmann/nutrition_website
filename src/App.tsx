import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CalorieCalculatorPage from './pages/CalorieCalculatorPage';
import RecipesPage from './pages/RecipesPage';
import MealPlansPage from './pages/MealPlansPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AboutPage from './pages/AboutPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AIChat from './components/chat/AIChat';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalorieCalculatorPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage />} />
            <Route path="/meal-plans" element={<MealPlansPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<UserDashboardPage />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}

export default App;