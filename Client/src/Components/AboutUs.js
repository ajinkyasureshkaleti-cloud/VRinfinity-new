import au1 from "../Assets/au1.png";
import au2 from "../Assets/au2.png";
import au3 from "../Assets/au3.png";
import brochure from "../Assets/brochure.pdf";

const AboutUs = () => (
  <section id="aboutus" className="py-2">
    <h2
      className="section-heading"
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Manrope",
        color: "purple",
      }}
    >
      About Us
    </h2>
    <div className="row">
      <div
        className="col-md-5 offset-md-1 position-relative"
        style={{ height: "400px" }}
      >
        <img
          src={au3}
          alt="img1"
          style={{
            width: "30%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />

        <img
          src={au2}
          alt="img2"
          style={{
            width: "30%",
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        />

        <img
          src={au1}
          alt="img3"
          style={{
            width: "70%",
            position: "absolute",
            top: "0",
            left: "15%",
            // boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            border: "10px solid white",
            borderRadius: "50%",
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
        <p
          className="Overview-inner-title"
          style={{ height: "100%", width: "500px", overflowY: "auto" }}
        ></p>
        With a passion for excellence and a vision to exceed our customers'
        expectations every time, we at VRinfinity have delivered exemplary
        projects over decades ahead of their time in planning, scale, and form.
        <br />
        <br />
        VRinfinity, headquartered in Mumbai, has been one of the most prolific
        real estate developers across all asset classes in Mumbai since 1956. We
        have been pioneers of the multi-dimensional real estate developer
        concept in India. We are among the best real estate developers in India.
        K Raheja offers in-house expertise that spans every aspect of the real
        estate equation. We are a close-knit, vertically integrated real estate
        development company. Our mantra of Global Expertise, Local Focus, and
        Trusted Partners has earned us an impeccable reputation of trust and
        dependability.
        <br />
        <br />
        <center>
          <a
            href={brochure}
            download
            className="btn btn-primary mt-4"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8",
              display: "inline-block",
            }}
          >
            Download Brochure
          </a>
        </center>
      </div>
    </div>
  </section>
);
export default AboutUs;
