export default function GroceryItem({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="p-4 mb-3 bg-slate-100 rounded-lg shadow cursor-pointer hover:bg-slate-200"
    >
      <h2 className="text-lg font-bold text-black">{name}</h2>
      <p className="text-gray-700">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}