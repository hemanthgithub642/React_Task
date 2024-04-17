import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", { email, password });
      if (response.data.success) {
        // setUser(response.data.user);
        // setLoggedIn(true);
      } else {
        setMessage(response.data.message);
        nav("/Home");
      }
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="w3l-mockup-form">
      <div className="container">
        <div className="workinghny-form-grid">
          <div className="main-mockup">
            <div className="alert-close">
              <span className="fa fa-close" />
            </div>
            <div className="w3l_form align-self">
              <div className="left_grid_info">
                <img src="./images/image.svg" alt="" />
              </div>
            </div>
            <div className="content-wthree">
              <h2>Login Now</h2>
              <p>Please Login Here. </p>
              {message && <div className="alert alert-danger">{message}</div>}
              <form onSubmit={submitHandler}>
                <input
                  type="email"
                  className="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login">
                  Login
                </button>
              </form>
              <p>
                Don't have an account?{" "}
                <a href="/register">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;