import React from 'react';
import './Login.css';

const Login = ({ switchToSignup }) => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo-section">
          <img src="/niti.png" alt="NITI Aayog" className="logo" />
          <img src="/ndap.png" alt="NDAP" className="logo" />
        </div>

        <h1>Welcome to NDAP!</h1>
        <p className="subtitle">
          Access and analyze curated government datasets to drive evidence-based decision-making.
        </p>

        <div className="form-section">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          
          <button className="primary-btn">Login</button>
          
          <p className="signup-prompt">
            Don't have an account?{' '}
            <span onClick={switchToSignup} className="auth-link" style={{ cursor: 'pointer', color: '#007bff' }}>
              Create Account
            </span>
            &nbsp;&nbsp;Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
