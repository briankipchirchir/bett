import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Using global styles for simplicity

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  // Mock user data
  const mockUser = {
    number: "0782141376",
    password: "123456",
    name: "John Doe",
    phone: "123-456-7890",
    balance: 150.75,
  };

  const [formData, setFormData] = useState({ number: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      formData.number === mockUser.number &&
      formData.password === mockUser.password
    ) {
      setUser(mockUser); // Pass user to app state
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
        <h1>BetNare</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          name="number"
          placeholder="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
