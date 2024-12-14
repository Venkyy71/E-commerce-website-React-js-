import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className="loginsignup-fields">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span className="loginsignup-link">Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="terms-checkbox" required />
          <label htmlFor="terms-checkbox">
            By continuing, I agree to the <a href="/terms">Terms of Use</a> & <a href="/privacy">Privacy Policy</a>.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
