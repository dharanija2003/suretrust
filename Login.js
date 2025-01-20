import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <h1>Welcome to Sure Trust</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
}

export default Login;
