import { useState } from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false); //switch for navbar

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const offset = 80;

    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setOpen(false); // close menu after click
  };

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "80px",
        width: "100%",
        zIndex: "100",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img className="logo" src={logo} alt="logo" style={{ height: "40px" }} />

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "20px",
          cursor: "pointer",
          alignItems: "center",
          fontFamily: "ui-serif",
        }}
      > */}
      <div className={`nav-menu ${open ? "active" : ""}`}>
        <div
          className="close-btn"
          onClick={() => setOpen(false)}
          style={{ position: "absolute", right: "20px" }}
        >
          ✖
        </div>
        <div
          className="nav-item"
          onClick={() => (window.location.href = "/admin")}
        >
          {" "}
          Admin
        </div>
        <div className="nav-item" onClick={() => scrollTo("hero")}>
          {" "}
          Home
        </div>
        <div className="nav-item" onClick={() => scrollTo("overview")}>
          {" "}
          Overview
        </div>
        <div className="nav-item" onClick={() => scrollTo("connectivity")}>
          {" "}
          Connectives
        </div>
        <div className="nav-item" onClick={() => scrollTo("amenities")}>
          {" "}
          Amenities
        </div>
        <div className="nav-item" onClick={() => scrollTo("floorplans")}>
          {" "}
          Floor Plans
        </div>
        <div className="nav-item" onClick={() => scrollTo("developers")}>
          {" "}
          Developers
        </div>
        <div className="nav-item" onClick={() => scrollTo("contactus")}>
          {" "}
          Contact
        </div>
        <div className="nav-item" onClick={() => scrollTo("aboutus")}>
          {" "}
          About Us
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
