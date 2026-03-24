"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6"
    >
      <input
        type="text"
        placeholder="Item name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-black"
      />

      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          onClick={decrement}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          -
        </button>

        <span className="text-black font-semibold">{quantity}</span>

        <button
          type="button"
          onClick={increment}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          +
        </button>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-black"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="household">Household</option>
        <option value="snacks">Snacks</option>
        <option value="beverages">Beverages</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}