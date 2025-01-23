import { trendingMenu } from "@/constant";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(trendingMenu);
}
