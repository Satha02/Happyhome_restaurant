import { useState } from "react";
import "./Menu.css";
import bg44 from "../assets/bg55.jpg";

// Menu images (ALL)
import menu1 from "../assets/3.png";
import menu2 from "../assets/4.png";
import menu3 from "../assets/5.png";
import menu4 from "../assets/6.png";
import menu4 from "../assets/7.png";
import menu4 from "../assets/1.png";
import menu4 from "../assets/2.png";




// Food images
import vegImg from "../assets/vrc.jpg";
import biriyaniImg from "../assets/biriyani.jpg";
import noodlesImg from "../assets/eggnood.jpg";
import juiceImg from "../assets/juice.jpg";
import cl1 from "../assets/cl1.jpg";
import cm1 from "../assets/cm2.jpg";
import vr1 from "../assets/vr1.jpg";
import vrc1 from "../assets/vrc1.jpg";
import erc2 from "../assets/erc2.jpg";
import crc1 from "../assets/crc1.jpg";
import cfr1 from "../assets/cfr1.jpg";
import vk1 from "../assets/vk1.png";
import ck1 from "../assets/ck1.jpg";
import cn1 from "../assets/cn1.jpg";
import vn1 from "../assets/vn1.jpg";
import cd1 from "../assets/cd1.jpg";
import bbq from "../assets/bbq.jpg";
import Lj from "../assets/Lj.jpg";






export default function Menu() {
  /* ================= STATES ================= */
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewImg, setPreviewImg] = useState(null);

  /* ================= CATEGORIES ================= */
  const categories = [
    "All",
    "Rice & Curry",
    "Fried Rice",
    "Kottu",
    "Noodles",
    "Devil",
    "BBQ",
    "Biryani",
    "Juice",
    "Milkshake",
  ];

  /* ================= MENU ITEMS ================= */
  const menuItems = [
    { name: "Veg Rice & Curry", price: "Rs. 400", img: vrc1, type: "veg", category: "Rice & Curry" },
    { name: "Egg Rice & Curry", price: "Rs. 500", img: erc2 , type: "nonveg", category: "Rice & Curry" },
    { name: "Chicken Rice & Curry", price: "Rs. 700", img: crc1, type: "nonveg", category: "Rice & Curry" },

    { name: "Veg Fried Rice", price: "Rs. 450", img: vr1, type: "veg", category: "Fried Rice" },
    { name: "Chicken Fried Rice", price: "Rs. 800", img: cfr1, type: "nonveg", category: "Fried Rice" },

    { name: "Veg Kottu", price: "Rs. 450", img: vk1, type: "veg", category: "Kottu" },
    { name: "Chicken Kottu", price: "Rs. 800", img: ck1, type: "nonveg", category: "Kottu" },

    { name: "Veg Noodles", price: "Rs. 450", img: vn1, type: "veg", category: "Noodles" },
    { name: "Chicken Noodles", price: "Rs. 800", img: cn1, type: "nonveg", category: "Noodles" },

    { name: "Chicken Devil", price: "Rs. 850", img: cd1, type: "nonveg", category: "Devil" },

    { name: "BBQ Chicken Full", price: "Rs. 2000", img: bbq, type: "nonveg", category: "BBQ" },
     { name: "BBQ Chicken", price: "Rs. 890", img: bbq, type: "nonveg", category: "Shawarma" },


    { name: "Fresh Lime Juice", price: "Rs. 250", img: Lj, type: "veg", category: "Juice" },
    { name: "Milkshake", price: "Rs. 350", img: cm1, type: "veg", category: "Milkshake" },

    {
      name: "Chicken Biriyani (Sunday Special)",
      price: "Rs. 850",
      img: biriyaniImg,
      type: "nonveg",
      category: "Biryani",
      special: true,
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="menu"
      className="menu-section"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
          url(${bg44})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CATEGORY FILTER */}
      <div className="menu-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU GRID */}
      <div className="menu-grid">
        {/* ALL → MENU CARDS */}
        {activeCategory === "All" ? (
          <>
            {[menu1, menu2,menu3,menu4].map((img, i) => (
              <div className="menu-card menu-image-card" key={i}>
                <img
                  src={img}
                  alt="Menu Card"
                  className="menu-full-img"
                  onClick={() => setPreviewImg(img)}
                />
              </div>
            ))}
          </>
        ) : (
          filteredItems.map((item, index) => (
            <div className="menu-card" key={index}>
              {item.special && (
                <span className="special-badge">🔥 Sunday Special</span>
              )}

              {!["Drinks", "Milkshake"].includes(item.category) && (
                <span className={`food-type ${item.type}`}>
                  {item.type === "veg" ? "🟢" : "🔴"}
                </span>
              )}

              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>

      {/* 🔍 IMAGE PREVIEW MODAL */}
      {previewImg && (
        <div className="image-modal" onClick={() => setPreviewImg(null)}>
          <img src={previewImg} alt="Preview" />
          <span className="close-btn">✕</span>
        </div>
      )}
    </section>
  );
}
