import React from 'react'
import "./NavBar.scss"
import {useHistory} from "react-router-dom"

const NavBar = () => {
  const history = useHistory()
  const handleRoute = (event:React.MouseEvent<HTMLAnchorElement>) => history.push(event.currentTarget.id)
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
            <a className="navbar-brand" id="/" onClick={handleRoute}>Portfolio Page</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" id="/" onClick={handleRoute} aria-current="page">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="/about" onClick={handleRoute} aria-current="page" >About Me</a>
              </li>
            </ul>
          </div>
            <img src="https://counter11.stat.ovh/private/freecounterstat.php?c=unhgx5kjnkr9qlx9l6ammqnt26hd2ql4" className="counter" alt="Visitor Counter"/>
        </div>
      </nav>
    );
}

export default NavBar
