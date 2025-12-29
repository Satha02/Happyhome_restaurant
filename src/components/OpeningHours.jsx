import bg77 from "../assets/bg77.jpg";

export default function OpeningHours() {
  return (
    <section
      id="hours"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
          url(${bg77})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "90px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* CONTENT CARD */}
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(6px)",
          borderRadius: "22px",
          padding: "40px 30px",
          textAlign: "center",
          border: "1px solid rgba(255,165,0,0.4)",
          boxShadow: "0 0 35px rgba(255,165,0,0.25)",
        }}
      >
        <h2
          style={{
            color: "orange",
            fontSize: "2.2rem",
            marginBottom: "14px",
          }}
        >
          ⏰ Opening Hours
        </h2>

        <p style={{ color: "#ffb300", marginBottom: "12px" }}>
          Monday – Sunday
        </p>

        <p style={{ color: "#fff", fontWeight: "bold", marginBottom: "6px" }}>
          11:00 AM – 3:30 PM
        </p>

        <p style={{ color: "#fff", fontWeight: "bold" }}>
          5:00 PM – 10:30 PM
        </p>
      </div>
    </section>
  );
}
