import { useState } from "react";
import axios from "axios";

const Contactus = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/enquiry`, form);
      alert("Submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });
    } catch (err) {
      console.log(err);
      alert("Error submitting form");
    }
  };

  return (
    <section id="contactus" className="container py-4">
      {/* CONTACT FORM */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-header text-center bg-white">
              <h4 style={{ fontFamily: "Manrope", color: "purple" }}>
                Get In Touch
              </h4>
              <small style={{ color: "purple" }}>
                We’d love to hear from you
              </small>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Email"
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Mobile Number"
                  required
                />

                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "25px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-10">
          <h3 className="text-center mb-4" style={{ color: "purple" }}>
            Frequently Asked Questions
          </h3>

          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q1"
                >
                  What is the starting price?
                </button>
              </h2>
              <div id="q1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  ₹49 Lakhs onwards for 1 BHK.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#q2"
                >
                  Is parking available?
                </button>
              </h2>
              <div id="q2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, dedicated parking is available.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#q3"
                >
                  Is the project ready?
                </button>
              </h2>
              <div id="q3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, it is ready for possession.
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
