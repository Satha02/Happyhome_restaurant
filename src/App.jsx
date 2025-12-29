import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import OpeningHours from "./components/OpeningHours";
import OfferBanner from "./components/OfferBanner";


function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

     

      {/* ABOUT */}
      <About />

      {/* OFFER */}
      <OfferBanner />

      {/* MENU */}
      <Menu />

      {/* OPENING HOURS */}
      <OpeningHours />

      {/* FOOTER / CONTACT */}
      <Footer />
    </>
  );
}

export default App;
