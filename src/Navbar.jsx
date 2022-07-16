import React from 'react'
import { NavLink } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './index.css'
export default function Navbar() {
  return (
    <div>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand"
          to="/">TechXR</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/signup">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                activeClassName="is-active"
                exact={true}
                to="/login">Log In</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
          </div>
        </div>
    </div>
  )
}
