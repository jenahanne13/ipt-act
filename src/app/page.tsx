"use client";

import { useEffect, useState } from "react";

// ✅ Correctly named interface
interface User {
  id: number | null;
  name: string | null;
  age: string  | null;
  email: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export default function HomePage() {
  // ✅ useState goes at the top
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <main className="bg-white p-4">
      <pre className="rounded bg-gray-100 p-2">
        {JSON.stringify(users, null, 2)}
      </pre>
    </main>
  );
}
