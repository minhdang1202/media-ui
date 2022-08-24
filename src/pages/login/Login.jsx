import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MdSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on MdSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <Link to="/">
              <button className="loginButton w100">Log In</button>
            </Link>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="registerToLoginButton">
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
