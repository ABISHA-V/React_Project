import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Login = () => {
 const [formData, setFormData] = useState({
    username: '',
    password: '',
 });

 const [error, setError] = useState('');

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formData.username)) {
      //setError('Invalid email address');
      return;
    }

    
    if (formData.password.length < 8) {
      //setError('Password must be at least 8 characters long');
      return;
    }

    
    if (formData.username === 'demo@example.com' && formData.password === 'password') {
      
      setError('');
      console.log('Login successful!');
    } else {
      
      setError('Invalid username or password');
    }
 };

 return (
    <div className="login-container">
      
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <h2>LOGIN</h2>
        <label>
          Email:
          <input
            type="email"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button>
        <Link to="/register">Login</Link>
        </button>
      </form>
    </div>
 );
}
export default Login;