"use client";

import { useState } from "react";
import GroceryItem from "./GroceryItem";

export default function GroceryItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <span className="font-semibold text-white mr-2">Sort By:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded mr-2 ${
            sortBy === "name"
              ? "bg-orange-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category"
              ? "bg-orange-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <GroceryItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}