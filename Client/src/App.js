// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Overview from "./Components/Overview";
import Connectivity from "./Components/Connectivity";
import Amenities from "./Components/Amenities";
import FloorPlans from "./Components/FloorPlans";
import Developers from "./Components/Developers";
import SliderSection from "./Components/SliderSection";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Navbar />

      <main className="app-main">
        <Hero />
        <Overview />
        <Connectivity />
        <Amenities />
        <FloorPlans />
        <Developers />
        <SliderSection />
        <AboutUs />
        <Contactus />
      </main>

      <Footer />
    </>
  );
}

export default App;
