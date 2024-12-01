import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signIn', formData);
      setMessage(response.data.message);  // Success message
      localStorage.setItem('token', response.data.token);  // Store token
      navigate('/profile');  // Redirect to profile
    } catch (error) {
      setMessage(error.response?.data.message || "SignIn failed!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
      {message && <div>{message}</div>}  {/* Show message */}
    </div>
  );
}

export default SignIn;
