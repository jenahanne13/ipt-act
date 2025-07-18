import { NextResponse } from "next/server";
import { users } from "~/server/db/schema";
import { db } from "~/server/db"; 

export async function GET() {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}
