import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Header({title="Your Title Here",searchbar=true}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Link</Link>
              </li> */}
             
            </ul>
            {searchbar?
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>:"no search bar"}
          </div>
        </div>
      </nav>
  )
}

// Header.defaultProps={
//   title:"Your Title Here",
//   searchbar:true
// }

// Header.propTypes={
//   title:PropTypes.string,
 
// }