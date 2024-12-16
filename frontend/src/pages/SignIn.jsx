import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";

function SignIn() {
  const url = "http://localhost:8000/api/signIn";
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate('/profile');
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div className="signin-container">
      <MDBContainer fluid className="d-flex align-items-center justify-content-center">
        <MDBCard className="signin-card">
          <MDBCardBody>
            <h2 className="text-center mb-5">Welcome Back</h2>
            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                size="lg"
                placeholder="Email Address"
                onChange={handleChange}
                id="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                size="lg"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                id="password"
              />
              <MDBBtn className="w-100 mb-4" size="lg" type="submit">
                Sign In
              </MDBBtn>
              <div className="text-center">
                <p className="mb-0">Forgot your password? <a href="/reset-password">Reset</a></p>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default SignIn;
