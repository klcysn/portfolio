import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">Portfolio Page</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <img src="https://counter11.stat.ovh/private/freecounterstat.php?c=unhgx5kjnkr9qlx9l6ammqnt26hd2ql4" alt="Visitor Counter"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar
