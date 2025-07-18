import React from 'react';
import './Signup.css';

const Signup = ({ switchToLogin }) => {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        
        {/* Left Side */}
        <div className="left-section">
          <div className="logo-section">
            <img src="/niti.png" alt="NITI Aayog" className="logo" />
            <img src="/ndap.png" alt="NDAP" className="logo" />
          </div>
          <h1 style={{ color: '#ffffff' }}>Welcome to NDAP!</h1>
          <p>
            Access and analyze curated government datasets from across sectors
            to drive evidence-based policy and decision-making.
          </p>
        </div>

        {/* Right Side */}
        <div className="right-section">
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <p className="radio-label">What best describes you?</p>
          <div className="radio-options">
            <label><input type="radio" name="role" /> Government</label>
            <label><input type="radio" name="role" /> Student</label>
            <label><input type="radio" name="role" /> Others</label>
          </div>

          <button className="primary-btn">Create Account</button>

          <p className="login-link">
            Already have an account?{' '}
            <span className="auth-link" onClick={switchToLogin}>
              Login
            </span>
          </p>

          <div className="social-buttons">
            <button className="facebook-btn">
              <img src="/facebook.png" className="icon" alt="Facebook" />
              Sign up with Facebook
            </button>
            <button className="google-btn">
              <img src="/google.png" className="icon" alt="Google" />
              Sign up with Google
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;  
