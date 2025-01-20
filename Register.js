import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <h1>Register for Sure Trust</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>College Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Branch:</label>
          <select>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="it">IT</option>
            <option value="csse">CSSE</option>
            <option value="ai">AI</option>
            <option value="aiMl">AI/ML</option>
            <option value="mech">MECH</option>
          </select>
        </div>
        <div>
          <label>State:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" required />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login Here</Link>
      </p>
    </div>
  );
}

export default Register;
