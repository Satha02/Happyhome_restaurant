import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import orangeBg from "../assets/bg22.jpg";

const reviews = [
  {
    name: "Kokullan Kolan",
    text: "Warm & Homely Dining in Vaddukoddai. Visited Happy Home Restaurant recently and it felt like a comforting culinary hug.",
    rating: 5,
  },
  {
    name: "Moditha Kodikara Arachchi",
    text: "Great place for dining. Tasty food, good service and very reasonable prices. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dinuka Madushan",
    text: "Highly recommend for lunch & dinner when travelling to Casuarina Beach & Karainagar.",
    rating: 5,
  },
];

export default function ReviewsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]); // ✅ ESLint-safe

  return (
    <section
      id="reviews"
      className="review-section"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)),
          url(${orangeBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        scrollMarginTop: "80px",
      }}
    >
      <h3 className="review-title">What Our Customers Say</h3>

      <p className="review-sub">
        Rated <strong>4.4 ★</strong> by 90+ customers on Google
      </p>

      <div className="review-card">
        <p className="review-text">“{reviews[index].text}”</p>

        <div className="review-stars">
          {Array.from({ length: reviews[index].rating }).map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} />
          ))}
        </div>

        <p className="review-name">– {reviews[index].name}</p>
      </div>

      <a
        href="https://www.google.com/search?q=happy+home+restaurant+reviews"
        target="_blank"
        rel="noreferrer"
        className="review-btn"
      >
        View all reviews on Google
      </a>

      <style>
        {`
          .review-section {
            padding: 90px 20px;
            text-align: center;
          }

          .review-title {
            color: orange;
            font-size: 2.1rem;
            margin-bottom: 10px;
          }

          .review-sub {
            color: #ddd;
            margin-bottom: 35px;
          }

          .review-card {
            max-width: 520px;
            margin: auto;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(6px);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 0 30px rgba(255,165,0,0.25);
            animation: fade 0.8s ease;
          }

          .review-text {
            color: #fff;
            font-size: 1.1rem;
            margin-bottom: 18px;
            line-height: 1.6;
          }

          .review-stars {
            color: gold;
            margin-bottom: 10px;
          }

          .review-name {
            color: #ffb300;
            font-weight: 600;
          }

          .review-btn {
            display: inline-block;
            margin-top: 30px;
            color: orange;
            border: 1px solid orange;
            padding: 10px 24px;
            border-radius: 20px;
            text-decoration: none;
            transition: 0.3s;
          }

          .review-btn:hover {
            background: orange;
            color: black;
          }

          @keyframes fade {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
