import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "db.json");

    const file = await readFile(filePath, "utf-8");
    const data = JSON.parse(file);

    return NextResponse.json(data.projects);
  } catch (error) {
    console.error("Failed to load projects:", error);

    return NextResponse.json(
      {
        message: "Failed to load projects",
      },
      {
        status: 500,
      },
    );
  }
}
