import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "stories.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  return NextResponse.json(JSON.parse(jsonData));
}
