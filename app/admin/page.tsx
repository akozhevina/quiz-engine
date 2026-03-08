"use client"

import { useState, useEffect } from "react"

export default function Admin() {
  const [games, setGames] = useState([])
  const [name, setName] = useState("")

  async function loadGames() {
    const res = await fetch("/api/games")
    const data = await res.json()
    setGames(data)
  }

  useEffect(() => {
    loadGames()
  }, [])

  async function createGame() {
    await fetch("/api/games", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    setName("")
    loadGames()
  }

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Админка квиза</h1>

      <h2>Создать игру</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название игры"
        style={{ padding: 10, fontSize: 16 }}
      />

      <button
        onClick={createGame}
        style={{
          padding: 10,
          marginLeft: 10,
          background: "green",
          color: "white"
        }}
      >
        Создать
      </button>

      <h2 style={{ marginTop: 40 }}>Игры</h2>

      {games.map((g: any) => (
        <div key={g.id} style={{ marginTop: 10 }}>
          {g.name}
        </div>
      ))}
    </main>
  )
}