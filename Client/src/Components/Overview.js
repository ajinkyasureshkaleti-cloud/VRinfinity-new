import img1 from "../Assets/building1.png";
import img2 from "../Assets/building2.png";
import img3 from "../Assets/building3.png";
import "./Overview.css";

const Overview = () => (
  <section id="overview" className="py-2" style={{ minHeight: "100vh" }}>
    <h2
      className="section-heading"
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Manrope",
        color: "purple",
      }}
    >
      Overview
    </h2>
    <div className="row">
      <div
        className="col-md-5 offset-md-1 position-relative"
        style={{ height: "400px" }}
      >
        <img
          src={img1}
          alt="img1"
          style={{
            width: "60%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />

        <img
          src={img2}
          alt="img2"
          style={{
            width: "60%",
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        />

        <img
          src={img3}
          alt="img3"
          style={{
            width: "40%",
            position: "absolute",
            top: "30%",
            left: "30%",
            // boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            border: "10px solid white",
          }}
        />
      </div>
      <div
        className="col-md-5"
        style={{
          height: "100%",
          overflowY: "auto",
          paddingRight: "10px",
        }}
      >
        <h5 className="Overview-inner-title mt-2">
          Premium 1,2,3 & 4 BHK Flats in Goregaon-Malad
        </h5>
        <br />
        <p
          style={{
            overflowY: "auto",
            fontFamily: "Space Grotesk",
            textAlign: "justify",
          }}
        >
          Explore the world of VRinfinity, a luxurious residential paradise in
          Goregaon-Malad East. The crowning jewels of this gated community
          complex are the 20-storey Premium Tower ‘T’ with 1 BHK flats and the
          31-storey high-rise Tower ‘S’ with 2,3 & 4 BHK flats. These
          ready-possession homes feature elegant and spacious interiors with
          premium finishes, while also offering scenic views. Thoughtfully
          curated project amenities such as the extravagant clubhouse,
          resort-style swimming pool, and the Podium Dream Garden will elevate
          your lifestyle to a whole new level. The seamless connectivity via the
          metro, local railway, and major roadways makes daily commutes a
          breeze. Blending comfort and convenience with unparalleled luxury,
          VRinfinity is the ultimate destination to find your dream home in the
          heart of Suburban Mumbai!
        </p>
      </div>
    </div>
  </section>
);
export default Overview;
