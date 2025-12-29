import bg33 from "../assets/bg33.jpg";

export default function OfferBanner() {
  return (
    <section
      style={{
        /* 🔥 BACKGROUND IMAGE */
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
          url(${bg33})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        padding: "70px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* 🔥 OFFER CARD */}
      <div
        className="offer-card"
        style={{
          maxWidth: "650px",
          width: "100%",
          background: "rgba(0,0,0,0.7)", // glass look
          backdropFilter: "blur(6px)",
          borderRadius: "22px",
          padding: "35px 30px",
          position: "relative",
          border: "1px solid rgba(255,165,0,0.4)",
         
          animation: "fadeUp 1s ease forwards",
        }}
      >
        {/* 🔥 TOP BADGE */}
        <div
          style={{
            position: "absolute",
            top: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "orange",
            color: "black",
            padding: "6px 20px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "bold",
           
          }}
        >
          SUNDAY ONLY
        </div>

        {/* 🔥 TITLE */}
        <h3
          style={{
            color: "orange",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "12px",
            marginTop: "10px",
          }}
        >
          🍛 Sunday Special Biriyani
        </h3>

        {/* 🔥 SUBTITLE */}
        <p
          style={{
            color: "#ffb300",
            textAlign: "center",
            fontSize: "15px",
            marginBottom: "22px",
          }}
        >
          Freshly cooked • Hot served • Limited quantity
        </p>

        {/* 🔥 DIVIDER */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, orange, transparent)",
            margin: "22px 0",
          }}
        />

        {/* 🔥 TIME DETAILS */}
        <p
          style={{
            color: "#fff",
            opacity: 0.9,
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          📅 Available every Sunday
          <br />
          ⏰ 11:00 AM – 3:00 PM & 5:00 PM – 10:00 PM
        </p>

        {/* 🔥 ANIMATION */}
        <style>
          {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
