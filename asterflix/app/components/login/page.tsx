import VideoBackground from "@/components/VideoBackground";

export default function Login() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <VideoBackground />

      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
        ASTERFLIX
      </h1>

      <p style={{ fontSize: "1.3rem", marginBottom: "30px" }}>
        Filmes, séries e muito mais. Sem limites.
      </p>

      <form action="#" method="POST" style={{ display: "flex", gap: "10px" }}>
        <input
          type="email"
          placeholder="Email"
          required
          style={{
            padding: "15px",
            width: "300px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "15px 25px",
            backgroundColor: "#7B2EFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Vamos lá
        </button>
      </form>
    </div>
  );
}