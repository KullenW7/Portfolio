import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <style>{`
        .custom-collapse {
          transition: max-height 0.4s ease-in-out;
          overflow: hidden;
          max-height: 0;
        }

        .custom-collapse.show {
          max-height: 300px;
        }

        .navbar-nav .nav-item {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .custom-collapse.show .nav-item {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-link {
          position: relative;
          display: inline-block;
          color: #fff !important;
          padding-bottom: 4px;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: #ffc107; /* Custom color */
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #ffc107 !important;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          transition: all 0.4s ease;
          background-image: none;
          position: relative;
          width: 24px;
          height: 2px;
          background-color: #fff;
        }

        .navbar-toggler-icon::before,
        .navbar-toggler-icon::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transition: transform 0.4s ease;
        }

        .navbar-toggler-icon::before {
          top: -8px;
        }

        .navbar-toggler-icon::after {
          top: 8px;
        }

        .navbar-toggler.open .navbar-toggler-icon {
          background-color: transparent;
        }

        .navbar-toggler.open .navbar-toggler-icon::before {
          transform: translateY(8px) rotate(45deg);
        }

        .navbar-toggler.open .navbar-toggler-icon::after {
          transform: translateY(-8px) rotate(-45deg);
        }

        .navbar-toggler:focus {
          box-shadow: none;
          outline: none;
        }
      `}</style>

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ padding: "0.5rem 1.5rem" }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontWeight: "bold", fontSize: "1.25rem" }}
            onClick={() => setMenuOpen(false)}
          >
            My Portfolio
          </Link>

          <button
            className={`navbar-toggler p-1 ${menuOpen ? "open" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            style={{
              width: "40px",
              height: "40px",
              padding: "0.25rem",
              flex: "none",
              minWidth: "unset",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end custom-collapse ${
              menuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {["About", "Projects", "Contact"].map((label, i) => {
                const path = `/${label.toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <li
                    className="nav-item"
                    key={label}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <Link
                      to={path}
                      className={`nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
