import "./Amenities.css";
import banquetImg from "../Assets/banquit.png";
import poolImg from "../Assets/pool.png";
import gymImg from "../Assets/gym.png";
import clubImg from "../Assets/clubhouse.png";

const Amenities = () => {
  return (
    <section
      id="amenities"
      className="container py-2"
      style={{ minHeight: "100vh" }}
    >
      <h2
        className="section-heading mb-4"
        style={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "Manrope",
          color: "purple",
        }}
      >
        Amenities
      </h2>

      <div className="row g-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <div
            className="amenity-card"
            style={{ backgroundImage: `url(${gymImg})` }}
          >
            <div className="overlay">
              <h5>GYM</h5>
              <p>Fully equipped modern fitness center</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div
            className="amenity-card"
            style={{ backgroundImage: `url(${poolImg})` }}
          >
            <div className="overlay">
              <h5>SWIMMING POOL</h5>
              <p>Luxury pool with kids & relaxation zone</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div
            className="amenity-card"
            style={{ backgroundImage: `url(${banquetImg})` }}
          >
            <div className="overlay">
              <h5>BANQUET HALL</h5>
              <p>Premium space for events & celebrations</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div
            className="amenity-card"
            style={{ backgroundImage: `url(${clubImg})` }}
          >
            <div className="overlay">
              <h5>Clubhouse</h5>
              <p>Luxury indoor games & lounge area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
