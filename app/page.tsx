export default function Page() {
  return (
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>🎉 Квиз работает</h1>

      <p>Это тестовая панель управления.</p>

      <a href="/admin">
        <button style={{
          padding:20,
          fontSize:20,
          marginTop:20,
          background:"#000",
          color:"#fff"
        }}>
          Открыть админку
        </button>
      </a>
    </main>
  )
}