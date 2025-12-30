import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import OpeningHours from "./components/OpeningHours";
import OfferBanner from "./components/OfferBanner";
import ReviewsSlider from "./components/ReviewsSlider";



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

      
      <ReviewsSlider/>
      {/* FOOTER / CONTACT */}
      <Footer />
    </>
  );
}

export default App;
