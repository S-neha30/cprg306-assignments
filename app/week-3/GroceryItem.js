export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center bg-white p-4 border rounded-lg shadow-sm">
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600 capitalize">
          Category: {category}
        </p>
      </div>
      <span className="font-semibold">x{quantity}</span>
    </li>
  );
}
