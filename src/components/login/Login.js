import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useState(null);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="form-title">Sign in to your account</h2>
        <div className="input-container">
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={handleUsername}
          />
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <Link to="/">
          <button type="submit" className="s-button">
            Sign in
          </button>
        </Link>

        <p className="signup-link">
          Don't have an account?
          <Link to="/signup">
            <a href="" className="signup-link-text">
              Sign up
            </a>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
