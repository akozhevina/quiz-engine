import { NextResponse } from "next/server"
import { Low } from "lowdb"
import { JSONFile } from "lowdb/node"

type Data = {
  games: any[]
}

const adapter = new JSONFile<Data>("data/db.json")
const db = new Low<Data>(adapter, { games: [] })

export async function GET() {
  await db.read()
  return NextResponse.json(db.data.games)
}

export async function POST(req: Request) {
  const body = await req.json()

  await db.read()

  const newGame = {
    id: Date.now(),
    name: body.name,
    teams: [],
    categories: []
  }

  db.data.games.push(newGame)

  await db.write()

  return NextResponse.json(newGame)
}