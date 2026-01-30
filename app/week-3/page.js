import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>

      <div className="max-w-xl mx-auto">
        <GroceryItemList />
      </div>
    </main>
  );
}
