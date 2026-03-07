export default function Admin() {
  return (
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>Админка квиза</h1>

      <h2>Создать игру</h2>

      <button style={{
        padding:20,
        fontSize:18,
        background:"green",
        color:"white"
      }}>
        Новая игра
      </button>

      <h2 style={{marginTop:40}}>Игры</h2>

      <p>Пока игр нет</p>
    </main>
  )
}