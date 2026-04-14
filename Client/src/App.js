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

import AdminLogin from "./Pages/Admin";
import AdminDashboard from "./Pages/AdminDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
