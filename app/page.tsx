export default function Home() {
  return (
    <main
      style={{
        background: "#090909",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          color: "#7B2EFF",
        }}
      >
        AsterFlix
      </h1>

      <p>Seu universo de entretenimento.</p>

      <button
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          background: "#7B2EFF",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontSize: "18px",
        }}
      >
        Assistir Agora
      </button>
    </main>
  );
}