import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="max-w-xl bg-gray-200 p-4 rounded-xl">
        <GroceryItemList />
      </div>
    </main>
  );
}
