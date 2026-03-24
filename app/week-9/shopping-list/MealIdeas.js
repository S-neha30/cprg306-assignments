"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Meal Ideas</h2>

      {ingredient ? (
        <>
          <p className="mb-4 text-gray-700">
            Here are some meal ideas using{" "}
            <span className="font-semibold">{ingredient}</span>:
          </p>

          <ul className="space-y-2">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="p-3 bg-orange-100 rounded text-black"
              >
                {meal.strMeal}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-500">Select an item to see meal ideas.</p>
      )}
    </div>
  );
}