import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <Link className="navbar-brand" to={'/'}>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/about'}>{props.abouttext}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/contact'}>Contact us</Link>
          </li>

        </ul>
        {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
      </div>
      <div className="d-flex">
        <div className="bg-primary mx-2 rounded colorthemes" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('primary')}></div>
        <div className="bg-success mx-2 rounded colorthemes" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('success')}></div>
        <div className="bg-danger mx-2 rounded colorthemes" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('danger')}></div>
        <div className="bg-warning mx-2 rounded colorthemes" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('warning')}></div>
      </div>

      <span>
        <button type="button" className="btn btn-primary" onClick={props.setTheme}>Custom Theme</button>
      </span>
      <span className='mx-2'>
        <input type="color" name="color" id="colorSelector" />
      </span>


      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={() => props.toggleMode(null)} id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>

    </div>
    </nav >
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here",
  abouttext: "About"
}