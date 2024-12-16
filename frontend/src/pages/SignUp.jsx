import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const url = "http://localhost:8000/api/users";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
        navigate("/SignIn");
      })
      .catch((error) => {
        alert(error.response.data.msg);
        console.error("There was an error!", error);
      });
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center sign-up-container"
    >
      <MDBCard className="form-container">
        <MDBCardBody className="p-5">
          <h2 className="text-uppercase text-center mb-4">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
              id="userName"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              placeholder="Enter email"
              onChange={handleChange}
              id="email"
            />
            <MDBInput
              label="Your Age"
              wrapperClass="mb-4"
              size="lg"
              placeholder="Enter age"
              type="text"
              onChange={handleChange}
              id="age"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Password"
              size="lg"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              id="password"
            />
            <MDBBtn
              className="mb-4 w-100 submit-btn"
              size="lg"
              type="submit"
            >
              Register
            </MDBBtn>
            <div className="text-center sign-in-link">
              <p>
                Already have an account? <Link to="/signIn">Sign in</Link>
              </p>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
