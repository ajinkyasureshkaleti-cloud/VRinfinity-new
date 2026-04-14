import { useEffect, useState } from "react";
import axios from "axios";
// import BASE_URL from "../config/api";

const AdminDashboard = () => {
  const [content, setContent] = useState({});
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const cmsRes = await axios.get(process.env.BASE_URL, `/api/content`);
    const enquiryRes = await axios.get(process.env.BASE_URL, `/api/enquiry`);

    setContent(cmsRes.data || {});
    setEnquiries(enquiryRes.data || []);
  };

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const updateCMS = async () => {
    await axios.post(process.env.BASE_URL, `/api/content/update`, content);
    alert("CMS Updated Successfully");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Admin CMS Panel</h2>

      <div className="card p-3 shadow-sm">
        <input
          className="form-control mb-2"
          name="heroTitle"
          placeholder="Hero Title"
          value={content.heroTitle || ""}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="heroDesc"
          placeholder="Hero Description"
          value={content.heroDesc || ""}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="overview"
          placeholder="Overview"
          value={content.overview || ""}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="connectivity"
          placeholder="Connectivity"
          value={content.connectivity || ""}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="aboutUs"
          placeholder="About Us"
          value={content.aboutUs || ""}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="constructionUpdates"
          placeholder="Construction Updates"
          value={content.constructionUpdates || ""}
          onChange={handleChange}
        />

        <button className="btn btn-primary" onClick={updateCMS}>
          Save CMS
        </button>
      </div>

      <h3 className="mt-5">Customer Enquiries</h3>

      <div className="table-responsive">
        <table className="table table-hover table-striped shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{new Date(e.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
