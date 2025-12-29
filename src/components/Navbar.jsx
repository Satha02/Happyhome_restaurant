import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/hh.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 🔥 Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  // 🔥 Detect active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "menu", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav">
      {/* 🔥 Logo */}
      <div
        className="logo-box"
        onClick={() => scrollToSection("home")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Happy Home Logo" className="logo-img" />
        <h2>Happy Home</h2>
      </div>

      {/* 🔥 Hamburger (mobile) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* 🔥 Navigation */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>

        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>

        <li
          className={activeSection === "menu" ? "active" : ""}
          onClick={() => scrollToSection("menu")}
        >
          Menu
        </li>

        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
