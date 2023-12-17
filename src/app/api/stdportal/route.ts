import { sql, db } from '@vercel/postgres';
// import { StdTable, db } from '@/lib/drizle';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

    //! With Vercel Postgress Frist Method
    // const stdPortal = await sql`SELECT * FROM studentportal`;

    //! With Vercel Postgress Second Method
    const client =  await db.connect();
    const stdPortal = await client.query(`SELECT * FROM studentportal`)

    //! With Drizzle
    // const stdPortal = await db.select().from(StdTable);
    return NextResponse.json(stdPortal.rows[1]);
}