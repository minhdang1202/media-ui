import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">MdSocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on MdSocial.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Password Again" className="registerInput" />

            <Link to="/">
              <button className="registerButton w100">Sign Up</button>
            </Link>
            <Link to="/login" className="registerToLoginButton">
              <button className="registerRegisterButton">
                Log into Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
