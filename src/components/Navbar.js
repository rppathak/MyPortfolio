import React from 'react'
import '../App.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Home
              </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Projects
              </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar