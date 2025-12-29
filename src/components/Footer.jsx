export default function Footer() {
  const phoneNumber = "94765433338";
  const message =
    "Hi Happy Home 👋, I would like to give feedback / ask about your food 😊";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const infoRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "12px",
    color: "#ffb300",
    fontSize: "15px",
  };

  const iconStyle = {
    fontSize: "22px",
    color: "orange",
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#000",
        color: "orange",
        padding: "100px 20px 45px",
      }}
    >
      {/* 🔥 CONTACT CARD */}
      <div
        className="footer-card"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          background: "linear-gradient(145deg, #0b0b0b, #161616)",
          padding: "40px",
          borderRadius: "26px",
          boxShadow: "0 0 45px rgba(255,165,0,0.18)",
          animation: "fadeUp 1s ease forwards",
        }}
      >
        {/* 📍 MAP */}
        <div
          style={{
            width: "100%",
            height: "320px",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 0 25px rgba(0,0,0,0.8)",
          }}
        >
          <iframe
            title="Happy Home Restaurant Location"
            src="https://www.google.com/maps?q=Happy%20Home%20Restaurant%20Vaddukkoddai&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* ☎️ CONTACT DETAILS */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "22px" }}>Contact Us</h2>

          {/* Location */}
          <div style={infoRow}>
            <span className="material-icons" style={iconStyle}>
              location_on
            </span>
            <span>Happy Home, Jaffna, Sri Lanka</span>
          </div>

          {/* Phone */}
          <div style={infoRow}>
            <span className="material-icons" style={iconStyle}>
              call
            </span>
            <span>076 543 3338</span>
          </div>

          {/* Email */}
          <div style={{ ...infoRow, marginBottom: "24px" }}>
            <span className="material-icons" style={iconStyle}>
              email
            </span>
            <span>happyhome@gmail.com</span>
          </div>

          {/* 💬 WHATSAPP BUTTON */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                background: "linear-gradient(135deg, #25D366, #1ebe57)",
                color: "black",
                padding: "13px 32px",
                borderRadius: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
                boxShadow: "0 0 30px rgba(37,211,102,0.55)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(37,211,102,0.9)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(37,211,102,0.55)";
              }}
            >
              💬 Message us on WhatsApp
            </button>
          </a>
        </div>
      </div>

      {/* 🔻 COPYRIGHT */}
      <p
        style={{
          marginTop: "40px",
          fontSize: "12px",
          color: "#fdfdfdff",
          textAlign: "center",
          lineHeight: "1.6",
        }}
      >
        © 2025 Happy Home Restaurant. All rights reserved.
        <br />
        <span style={{ fontSize: "12px", color: "#fdfdfdff" }}>
          Developed by <b>Sathananthan</b> 
        </span>
      </p>

      {/* 🔥 Animation + Mobile Fix */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .footer-card {
              grid-template-columns: 1fr !important;
              padding: 30px !important;
            }
          }
        `}
      </style>
    </footer>
  );
}
