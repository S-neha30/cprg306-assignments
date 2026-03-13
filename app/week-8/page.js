"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import GroceryItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <GroceryItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}