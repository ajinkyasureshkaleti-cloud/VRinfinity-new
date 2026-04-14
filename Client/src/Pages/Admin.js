import { useState } from "react";
import axios from "axios";
import BASE_URL from "../congif/api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/admin/login`, {
        email,
        password,
      });

      console.log(res.data);

      if (res.data.success) {
        localStorage.setItem("admin", "true");
        alert("Login Successful");
        navigate("/admin/dashboard");
      }
    } catch (err) {
      alert("Invalid credentials");
      console.log(`error is: ${err}`);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4b6cb7, #182848)",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#4b6cb7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default AdminLogin;
