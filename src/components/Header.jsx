import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import redlogo from "../assets/img/logo-skyvite.png";
import * as bootstrap from "bootstrap";

export default function Header() {
  const location = useLocation();

  // Auto-close navbar on route change (mobile)
  useEffect(() => {
    const navCollapse = document.getElementById("navbarNav");
    if (navCollapse) {
      const bsCollapse =
        bootstrap.Collapse.getInstance(navCollapse) ||
        new bootstrap.Collapse(navCollapse, { toggle: false });
      bsCollapse.hide();
    }
  }, [location]);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <div className="topbar">
        <p className="m-0 text-center">
          We are just launching our new product : Skyvite HRMS
        </p>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* LEFT → LOGO */}
          <Link className="navbar-brand" to="/">
            <img src={redlogo} alt="SkyVite Logo" className="logo-image" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* COLLAPSE AREA */}
          <div className="collapse navbar-collapse" id="navbarNav">

            {/* CENTER → MENU LINKS */}
            <ul className="navbar-nav mx-lg-auto text-lg-center">
              <li className="nav-item">
                <NavLink className={navClass} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navClass} to="/products">Our Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navClass} to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navClass} to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navClass} to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* RIGHT → LOGIN / SIGNUP */}
            <div className="d-flex gap-3 mt-3 mt-lg-0 btngroup">
              <Link to="/login" className="loginbtn">Login</Link>
              <Link to="/signup" className="signupbtn">Sign Up</Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}