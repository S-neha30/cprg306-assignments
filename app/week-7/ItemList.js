"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
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
    <div className="mt-6">
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}