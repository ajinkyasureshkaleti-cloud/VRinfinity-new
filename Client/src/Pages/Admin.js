import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config/api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("BASE URL:", BASE_URL);

      const res = await axios.post(`${BASE_URL}/api/admin/login`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("RESPONSE:", res.data);

      if (res.data.success) {
        localStorage.setItem("admin", "true");
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.log("FULL ERROR:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ textAlign: "center" }}>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            style={input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            style={input}
            required
          />

          <button type="submit" style={button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #4b6cb7, #182848)",
};

const card = {
  width: "380px",
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#4b6cb7",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
