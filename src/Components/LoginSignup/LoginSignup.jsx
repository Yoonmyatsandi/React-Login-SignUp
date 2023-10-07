import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";

export default function LoginSignup() {
  const [click, setClick] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (click === "Sign Up" && !name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleFormSubmit = (e) => {
    console.log("handleFormSubmit function called");
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      const successMessage = `${
        click === "Sign Up" ? "Registered" : "Logged in"
      } successfully!`;
      alert(successMessage);
      setIsAuthenticated(true);
      console.log("isAuthenticated:", true);
    } else {
      alert("Form validation failed. Please check your inputs.");
    }
  };

  return (
    <div className="container">
      <div className="wave"></div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="header">
        <div className="signup">{click}</div>
      </div>

      <div className="input-info">
        {click === "Sign Up" && (
          <div className="inputs">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="error">{nameError}</div>
          </div>
        )}

        <div className="inputs">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error">{emailError}</div>
        </div>

        {(click === "Login" || click === "Sign Up") && (
          <div className="inputs">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={`error ${passwordError ? "password-error" : ""}`}>
              {passwordError && (
                <span>Password must be at least 6 characters</span>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleFormSubmit}>
          <div className="submit">
            {(click === "Login" || click === "Sign Up") && (
              <button className="submit-btn" type="submit">
                {click === "Login" ? "Login" : "Sign Up"}
              </button>
            )}
          </div>
        </form>

        <div
          className="toggle-mode"
          onClick={() => setClick(click === "Login" ? "Sign Up" : "Login")}
        >
          {click === "Login" ? (
            <span className="login-text">
              Don't have an account? <u>Sign Up</u>
            </span>
          ) : (
            <span className="signup-text">
              Already have an account? <u>Login</u>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
