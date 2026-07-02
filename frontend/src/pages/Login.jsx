import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("/auth/login", form);

      localStorage.setItem("token", response.data.token);
localStorage.setItem("name", response.data.user.fullName);
localStorage.setItem("email", response.data.user.email);
localStorage.setItem("role", response.data.user.role);
      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="login-card">

            <h2 className="text-center mb-4">
              Enterprise HelpDesk
            </h2>

            <input
              className="form-control mb-3"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            <button
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/register">Register</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;