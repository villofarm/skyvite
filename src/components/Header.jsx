import { Link } from "react-router-dom";
import logo from "../assets/img/skyvite-logo.png";

export default function Header() {
  return (
    <div>
      <div>
        <div className="topbar">
          <p className="m-0 text-center">We are just launching Our new product : Skyvite HRMS</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo as brand link */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo} // Use imported image
            alt="SkyVite Logo"
            className="d-inline-block align-top me-2 logo-image"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="btngroup">
            <Link to="/login" className="">
              Login
            </Link>
            <Link to="/signup" className="">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
