import { useEffect, useState } from "react";
import hhImage from "../assets/hh.jpeg";
import orangeBg from "../assets/bg22.jpg"; // 🔥 ADD your orange photo

export default function About() {
  const text = "About Us";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => {
        setTypedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 200);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setTypedText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, 80);
    } else if (index === text.length && !isDeleting) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <section
      id="about"
      style={{
        padding: "110px 20px",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(${orangeBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* 🔥 INNER CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "50px 35px",
          borderRadius: "26px",
          background: "rgba(0,0,0,0.75)",
        
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT TEXT */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h2
              style={{
                fontSize: "2.6rem",
                color: "orange",
                marginBottom: "18px",
                minHeight: "48px",
              }}
            >
              {typedText}
              <span className="cursor">|</span>
            </h2>

            <p style={{ lineHeight: "1.9", color: "#ffcc80" }}>
              We serve delicious food with love ❤️.
              <br /><br />
              Happy Home was started with a simple idea – to serve delicious food
              that feels like home. Inspired by traditional recipes and modern
              tastes, our menu is designed to satisfy every food lover.
              <br /><br />
              We take pride in preparing our meals fresh every day using
              high-quality ingredients and authentic spices. Our signature
              dishes, especially our biriyani and rice & curry, have become
              favourites among our customers.
              <br /><br />
              More than just a restaurant, Happy Home is a place to relax, enjoy,
              and share good moments over great food. Your happiness is our
              success, and we welcome you to experience flavours made with love.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={hhImage}
              alt="Happy Home"
              style={{
                width: "100%",
                maxWidth: "360px",
                borderRadius: "22px",
                background: "white",
                padding: "18px",
             
              }}
            />
          </div>
        </div>
      </div>

      {/* Cursor animation */}
      <style>
        {`
          .cursor {
            margin-left: 4px;
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
