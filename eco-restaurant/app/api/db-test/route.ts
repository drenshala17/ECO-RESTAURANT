import { executeQuery } from "@/lib/db";
import { NextResponse } from "next/server";

type ServerTimeRow = {
  server_time: unknown;
};

export async function GET() {
  try {
    const rows = await executeQuery<ServerTimeRow>(
      "SELECT NOW() AS server_time",
    );

    return NextResponse.json({
      success: true,
      serverTime: rows[0]?.server_time ?? null,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error:
          "Lidhja me Neon PostgreSQL dështoi. Kontrolloni konfigurimin e DATABASE_URL dhe disponueshmërinë e databazës.",
      },
      { status: 500 },
    );
  }
}
