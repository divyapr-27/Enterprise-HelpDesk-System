import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/");
    } 
    catch (error) {
  console.log(error.response);
  console.log(error.response?.data);
  alert(JSON.stringify(error.response?.data));
}
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card p-4 shadow">

            <h2 className="text-center mb-4">
              Register
            </h2>

            <input
              className="form-control mb-3"
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
            />

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
              className="btn btn-success"
              onClick={handleRegister}
            >
              Register
            </button>

            <p className="mt-3 text-center">
              Already have an account?
              <Link to="/"> Login</Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;