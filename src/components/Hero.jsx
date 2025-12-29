import { useEffect, useState } from "react";
import "./Hero.css";

import vegImg from "../assets/bbq111.jpg";
import biriyaniImg from "../assets/bgv1.jpg";
import kothuImg from "../assets/kothu1.jpg";
import prawnImg from "../assets/bg77.jpg";
import cbb from "../assets/bg222.jpg";

export default function Hero() {
  const images = [vegImg, biriyaniImg, kothuImg, prawnImg, cbb];
  const [current, setCurrent] = useState(0);

  // 🔁 Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // 🔽 Scroll to menu
  const goToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(${images[current]})
        `,
      }}
    >
      {/* 🔥 BLUR LAYER */}
      <div className="hero-blur"></div>

      {/* 🔥 CENTER CONTENT */}
      <div className="hero-content">
        <h1>
          Welcome to Happy Home
          <span className="cursor">|</span>
        </h1>

        <p>
          <strong>STAY SAFE & FEEL THE TASTE! ❤️</strong>
        </p>

        <div className="btn-wrapper">
          <button className="menu-btn" onClick={goToMenu}>
            View Menu
          </button>

          <a
            href="tel:0765433338"
            className="call-btn"
            title="Call Happy Home"
          >
            ☎
          </a>
        </div>
      </div>
    </section>
  );
}
