import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/api/users/register", {
        name,
        email,
        password,
      });
      if (response.data.success) {
        setUser(response.data.user);
        nav("/");
      } else {
        setMessage(response.data.message);
        nav("/");
      }
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  useEffect(() => {
    if (user) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/api/users/${user._id}`);
          setUser(response.data.user);
        } catch (error) {
          setMessage("Something went wrong");
        }
      };
      fetchUser();
    }
  }, [user]);

  return (
    <div className="w3l-mockup-form" style={{
      backgroundImage: "url(http://localhost:3001/image2.png)",
      backgroundSize: 'cover'}}>
      <div className="container">
        <div className="workinghny-form-grid">
          <div className="main-mockup">
            <div className="alert-close">
              <span className="fa fa-close" />
            </div>
            {/* <div className="w3l-mockup-form" style={{ 
              backgroundImage: "image2.png",
              backgroundSize: 'cover',
              backgroundPosition: 'center'}}>
            </div> */}
            <div className="w3l_form align-self">
             
            </div>
            <div className="content-wthree">
              <h2>Register Now</h2>
              <p>Please Create the Account. </p>
              {message && <div className="alert alert-danger">{message}</div>}
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  className="name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="confirm-password"
                  name="confirm-password"
                  placeholder="Enter Your Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />
                <button name="submit" className="btn" type="submit">
                  Register
                </button>
              </form>
              <div className="social-icons">
                <p>
                  Have an account!{" "}
                  <a href="/">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;