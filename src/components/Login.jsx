import React from 'react';
import './Login.css';

export default function Login({ onLogin, onBackToSignup }) {
  return (
    <div className="login-outer-center">
      <div className="login-card-center">
        <div className="login-left-logo">
          <img src="/niti.png" alt="NITI Aayog" className="center-logo" />
        </div>
        <div className="login-form-main">
          <div className="logo-section">
            <img src="/ndap.png" alt="NDAP" className="logo" />
          </div>
          <h1>Welcome to NDAP!</h1>
          <p className="subtitle">
            Access and analyze curated government datasets to drive evidence-based decision-making.
          </p>

          <div className="form-section">
            <h2>Login</h2>
            <form onSubmit={e => { e.preventDefault(); console.log("Login submitted!"); onLogin(); }}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="primary-btn" type="submit">Login</button>
            </form>
            <p className="signup-prompt">
              Don't have an account?{' '}
              <span onClick={onBackToSignup} className="auth-link" style={{ cursor: 'pointer', color: '#007bff' }}>
                Create Account
              </span>
              &nbsp;&nbsp;Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
