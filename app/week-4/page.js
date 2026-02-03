import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
