import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes") // Ensure this URL points to your backend
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRecipes(response.data); 
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-4xl font-serif">Recipes</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#A05252] text-white placeholder-white pl-4 pr-10 py-2 rounded-full w-64 focus:outline-none"
            />
            <span className="absolute top-2/4 transform -translate-y-2/4 right-4 text-white">
              🔍
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Recipes Count Styled */}
        <div className="flex items-center justify-between bg-white shadow-lg p-4 rounded-md mb-6 border border-gray-300">
          <div>
            <h2 className="text-3xl font-bold text-red-900">200 Recipes</h2>
            <p className="text-gray-600 text-sm">
              A collection of traditional and modern recipes for everyone.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200">
              Breakfast
            </button>
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200">
              Lunch
            </button>
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200">
              Dinner
            </button>
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200">
              Dessert
            </button>
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200">
              Fast Food
            </button>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-red-900">{recipe.title}</h3>
                <p className="text-gray-600 mt-2 text-sm line-clamp-3">{recipe.description}</p>
                <p className="text-gray-500 mt-4 text-sm">{recipe.date}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-yellow-500 font-bold">★ {recipe.rating}</span>
                  <Link
                    to={`/recipe/${encodeURIComponent(recipe.title)}`}
                    className="text-red-700 hover:underline"
                  >
                    Reference
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RecipePage;