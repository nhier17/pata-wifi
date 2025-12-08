import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const filePath = path.join(process.cwd(), "data", "stories.json");

    await fs.writeFile(filePath, JSON.stringify(body, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Save error:", error);
    return NextResponse.json({ success: false, error: String(error) });
  }
}
