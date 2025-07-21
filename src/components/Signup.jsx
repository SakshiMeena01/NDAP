import React from 'react';
import './Signup.css';

const Signup = ({ switchToLogin }) => (
  <div className="signup-background">
    <div className="signup-card">
      {/* Left Side (Welcome) */}
      <div className="signup-left">
        <div className="signup-logos">
          <img src="/niti.png" alt="NITI Aayog" className="niti-logo" />
          <img src="/ndap.png" alt="NDAP" className="ndap-logo" />
        </div>
        <h1>Welcome to NDAP!</h1>
        <p>
          Access and analyze curated government datasets from across sectors
          to drive evidence-based policy and decision-making.
        </p>
      </div>
      {/* Right Side (Form) */}
      <div className="signup-right">
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
          <span className="auth-link" onClick={switchToLogin}>Login</span>
        </p>

        <div className="social-buttons">
          <button className="google-btn">
            <img src="/google.png" className="icon" alt="Google" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
