const Contactus = () => {
  return (
    <section id="contactus" className="container py-2">
      <div className="row justify-content-center">
        <div className="col-6 col-md-6 col-lg-6">
          <div className="card contact-card shadow-lg border-0">
            <div className="card-header text-white text-center">
              <h4
                className="section-heading mb-0"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontFamily: "Manrope",
                  color: "purple",
                }}
              >
                Get In Touch
              </h4>
              <small style={{ color: "purple" }}>
                We’d love to hear from you
              </small>
            </div>

            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter your full name"
                    style={{
                      borderRadius: "25px",
                      padding: "12px",
                      color: "grey",
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Enter your email"
                    style={{
                      borderRadius: "25px",
                      padding: "12px",
                      color: "grey",
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control custom-input"
                    placeholder="Enter your mobile number"
                    style={{
                      borderRadius: "25px",
                      padding: "12px",
                      color: "grey",
                    }}
                    required
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-submit btn-lg disabled"
                    style={{
                      borderRadius: "25px",
                      padding: "12px",
                      color: "white",
                      backgroundColor: "green",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-12 col-lg-12">
          <h3
            className="section-heading mb-4 text-center"
            style={{ fontFamily: "Manrope", color: "purple" }}
          >
            Frequently Asked Questions
          </h3>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What is the starting price of flats?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  The starting price is ₹49 Lakhs for 1 BHK apartments.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Is parking available?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, dedicated covered parking is available for residents.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Is the project ready to move?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, the project is ready for possession.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
