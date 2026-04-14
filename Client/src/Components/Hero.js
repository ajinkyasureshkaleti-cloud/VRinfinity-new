import heroImg from "../Assets/heroImage.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="row align-items-center w-100 m-0 h-100">
        {/* Left Side */}
        <div className="col-md-6 p-0 h-100">
          <img src={heroImg} alt="hero" className="w-100 hero-img" />
        </div>

        {/* Right Side */}
        <div className="col-12 col-md-6">
          <h1
            className="mb-4 Right-Title"
            style={{ textAlign: "center", color: "gold" }}
          >
            Luxury Apartments
          </h1>

          <div
            className="offer-container"
            style={{
              borderTop: "1px solid green",
              borderBottom: "1px solid green",
              padding: "10px",
            }}
          >
            <div className="offer-card">
              <h4 style={{ color: "gold" }}>Smart Design</h4>
              <p style={{ color: "darkgreen" }}>Starting from 1 BHK - ₹49L</p>
            </div>

            <div className="offer-card">
              <h4 style={{ color: "gold" }}>Premium Living</h4>
              <p style={{ color: "darkgreen" }}>Starting 2 BHK - ₹75L</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
