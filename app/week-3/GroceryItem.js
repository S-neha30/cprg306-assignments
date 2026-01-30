export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-gray-300 rounded-md p-4 bg-white">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
