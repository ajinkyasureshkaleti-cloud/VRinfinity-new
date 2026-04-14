import img1 from "../Assets/building1.png";
import img2 from "../Assets/building2.png";
import img3 from "../Assets/building3.png";

const SliderSection = () => {
  return (
    <div
      style={{
        padding: "40px",
        alignContent: "center",
        marginTop: "20px",
      }}
    >
      <div className="container mt-5">
        <h2
          className="text-center mb-4 section-heading"
          style={{ fontFamily: "Manrope", color: "purple" }}
        >
          Project Gallery
        </h2>

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img3}
                className="d-block w-100"
                alt="..."
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>New Launched : Vighnahar Tower 1 at Thane West</h2>
                <p>Ready to move benefits for quick buyers</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img1}
                className="d-block w-100"
                alt="..."
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>New Launched : Vighnahar Tower 2 at Thane West</h2>
                <p>Ready to move benefits for quick buyers</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100"
                alt="..."
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>New Launched : Vighnahar Tower 3 at Thane West</h2>
                <p>Ready to move benefits for quick buyers</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
