export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-lg font-semibold">{name}</p>

      <p className="text-sm text-gray-600">
        Quantity: <span className="font-medium">{quantity}</span>
      </p>

      <p className="text-sm text-gray-600">
        Category: <span className="font-medium capitalize">{category}</span>
      </p>
    </li>
  );
}
