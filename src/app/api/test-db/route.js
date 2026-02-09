import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT 1");

    return NextResponse.json({
      success: true,
      message: "Database connected successfully",
      data: rows
    });

  } catch (error) {
    console.error("DB ERROR:", error);

    return NextResponse.json({
      success: false,
      message: "Database connection failed",
      error: error.message
    }, { status: 500 });
  }
}
