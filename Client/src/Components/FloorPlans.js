import fp1 from "../Assets/fp1.png";
import fp2 from "../Assets/fp2.png";
import fp3 from "../Assets/fp3.png";
import fp4 from "../Assets/fp4.png";
import "./FloorPlans.css";

const FloorPlans = () => {
  return (
    <section
      id="floorplans"
      className="container py-2"
      style={{ minHeight: "100vh" }}
    >
      <h2
        className="section-heading mb-5"
        style={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "Manrope",
          color: "purple",
        }}
      >
        Floor Plans
      </h2>

      <div
        className="row"
        style={{
          backgroundColor: "#b9b9b9c2",
          padding: "20px",
        }}
      >
        <div className="col-12 col-sm-12 col-lg-3 py-2">
          <div className="card shadow-sm h-100">
            <img
              src={fp1}
              alt="floor1"
              className="card-img-top"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-3 py-2">
          <div className="card shadow-sm h-100">
            <img
              src={fp2}
              alt="floor2"
              className="card-img-top"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-3 py-2">
          <div className="card shadow-sm h-100">
            <img
              src={fp3}
              alt="floor3"
              className="card-img-top"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-3 py-2">
          <div className="card shadow-sm h-100">
            <img
              src={fp4}
              alt="floor4"
              className="card-img-top"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
