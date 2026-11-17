import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

type DatabaseRow = Record<string, unknown>;

let sqlClient: NeonQueryFunction<false, false> | null = null;

export function getDatabase(): NeonQueryFunction<false, false> {
  if (sqlClient) {
    return sqlClient;
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL mungon. Vendosni connection string-un e Neon PostgreSQL në environment variables.",
    );
  }

  sqlClient = neon(databaseUrl);
  return sqlClient;
}

export async function executeQuery<Row extends DatabaseRow = DatabaseRow>(
  query: string,
  params: readonly unknown[] = [],
): Promise<Row[]> {
  const sql = getDatabase();
  const rows = await sql.query(query, [...params]);

  return rows as unknown as Row[];
}
