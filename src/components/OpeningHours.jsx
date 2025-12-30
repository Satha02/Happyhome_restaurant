import bg77 from "../assets/bg77.jpg";
import chef from "../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

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
        padding: "100px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* WRAPPER */}
      <div className="opening-wrapper">
        {/* CONTENT CARD */}
        <div className="opening-card">
          <h2 className="opening-title">Opening Hours</h2>

          <p className="opening-day">
            <FontAwesomeIcon icon={faCalendarDays} />
            Monday – Sunday
          </p>

          <p className="opening-time">
            <FontAwesomeIcon icon={faClock} />
            11:00 AM – 3:30 PM
          </p>

          <p className="opening-time">
            <FontAwesomeIcon icon={faClock} />
            5:00 PM – 10:30 PM
          </p>
        </div>

        {/* CHEF IMAGE */}
        <img
          src={chef}
          alt="Chef illustration"
          className="opening-chef"
        />
      </div>

      {/* STYLES */}
      <style>
        {`
          .opening-wrapper {
            position: relative;
            max-width: 900px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .opening-card {
            max-width: 520px;
            width: 100%;
            background: rgba(0,0,0,0.65);
            backdrop-filter: blur(6px);
            border-radius: 22px;
            padding: 40px 30px;
            text-align: center;
            border: 1px solid rgba(255,165,0,0.4);
            box-shadow: 0 0 35px rgba(255,165,0,0.25);
            z-index: 2;
          }

          .opening-title {
            color: orange;
            font-size: 2.2rem;
            margin-bottom: 20px;
            letter-spacing: 1px;
          }

          .opening-day {
            color: #ffb300;
            margin-bottom: 14px;
            font-size: 1.05rem;
          }

          .opening-time {
            color: #fff;
            font-weight: 600;
            margin-bottom: 8px;
            font-size: 1.1rem;
          }

          .opening-day svg,
          .opening-time svg {
            margin-right: 8px;
          }

          /* DESKTOP */
          .opening-chef {
            position: absolute;
            right: -160px;
            bottom: -20px;
            height: 340px;
            filter: drop-shadow(0 0 25px rgba(255,165,0,0.35));
            z-index: 1;
          }

          /* MOBILE – PERFECT CENTER */
          @media (max-width: 900px) {
            .opening-wrapper {
              flex-direction: column;
              align-items: center;
            }

            .opening-chef {
              position: static;
              height: 220px;
              margin-top: 25px;

              /* 👇 THIS IS THE KEY */
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}
      </style>
    </section>
  );
}
