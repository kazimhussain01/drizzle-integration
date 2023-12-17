// import { sql, db } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { userTable, db } from '@/lib/drizzle';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
    //! With Drizzle
    const user = await db.select().from(userTable);

    // ! With Vercel Postgress Frist Method
    // const client = await db.connect()
    // const user = await client.query(`SELECT * FROM users;`)

    //! Vercel Postgress 2nd Method
    // const user = await sql`SELECT * FROM users;`;
    return NextResponse.json(user);
}

//! POST Methos with Drizzle ORM
export async function POST(request: Request) {
    const body = await request.json()

    await db.insert(userTable).values(body);

    return NextResponse.json("Hello Request")
}
