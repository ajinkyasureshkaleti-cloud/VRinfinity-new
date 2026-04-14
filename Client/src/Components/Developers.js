import img1 from "../Assets/underConst.png";
import img2 from "../Assets/underConst2.png";
import img3 from "../Assets/underConst3.png";

const Developers = () => {
  return (
    <section id="developers" className="container py-2">
      <h2
        className="section-heading mb-5"
        style={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "Manrope",
          color: "purple",
        }}
      >
        Developers
      </h2>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card shadow">
            <div className="img-wrapper">
              <img src={img1} className="card-img-top" alt="project1" />
            </div>

            <div className="card-body text-center">
              <h5>Skyline Residency</h5>
              <span className="badge bg-warning text-dark mb-2">
                Under Construction
              </span>
              <p className="small text-muted">
                Luxury 2 & 3 BHK premium project in prime location.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow">
            <div className="img-wrapper">
              <img src={img2} className="card-img-top" alt="project2" />
            </div>

            <div className="card-body text-center">
              <h5>Green Valley Heights</h5>
              <span className="badge bg-warning text-dark mb-2">
                Under Construction
              </span>
              <p className="small text-muted">
                Modern lifestyle apartments with world-class amenities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow">
            <div className="img-wrapper">
              <img src={img3} className="card-img-top" alt="project3" />
            </div>

            <div className="card-body text-center">
              <h5>Ocean Breeze Tower</h5>
              <span className="badge bg-warning text-dark mb-2">
                Under Construction
              </span>
              <p className="small text-muted">
                Sea view luxury apartments with premium lifestyle features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
