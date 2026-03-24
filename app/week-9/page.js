"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Week 9</h1>

      <Link href="/week-9/shopping-list">
        Go to Shopping List
      </Link>
    </main>
  );
}