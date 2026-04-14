import mapImg from "../Assets/map.png";

const Connectivity = () => {
  return (
    <section id="connectivity" className="container py-2">
      <h2
        className="mb-1 section-heading"
        style={{
          textAlign: "center",
          padding: "20px 20px 0 20px",
          fontFamily: "Manrope",
          color: "purple",
        }}
      >
        Connectivity
      </h2>

      <div
        className="row align-items-center"
        style={{
          backgroundColor: "beige",
          borderRadius: "20px",
          padding: "40px",
        }}
      >
        {/* Left Side */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={mapImg}
            alt="connectivity"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side */}
        <div className="col-12 col-md-6">
          <div className="accordion" id="connectivityAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  🚇 Metro Connectivity
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#connectivityAccordion"
              >
                <div className="accordion-body">
                  Nearby Metro Station within 5 mins walking distance (700 mts)
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  🚉 Railway Access
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#connectivityAccordion"
              >
                <div className="accordion-body">
                  Goregaon Railway Station just 10 mins away (1km)
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  🛣️ Road Connectivity
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#connectivityAccordion"
              >
                <div className="accordion-body">
                  Easy access to Western Express Highway(500 mts)
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  🏫 Nearby Essentials
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#connectivityAccordion"
              >
                <div className="accordion-body">
                  IES School walkable 10 min 700mts Hospitals walkable 15 min
                  1.2 km Nearby grocery stores 3-5min 300-500 mts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
