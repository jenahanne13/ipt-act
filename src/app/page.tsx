"use client";

import { useEffect, useState } from "react";

interface User {
  id: number | null;
  name: string | null;
  age: string | null;
  email: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = (await response.json()) as User[];
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    void fetchUsers();
  }, []);

  return (
    <main className="bg-white p-4">
      <h1 className="mb-2 text-xl font-bold">Users</h1>
      <pre className="rounded bg-gray-100 p-2">
        {JSON.stringify(users, null, 2)}
      </pre>
    </main>
  );
}
