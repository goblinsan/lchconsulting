import React from 'react';
import styles from './css/navOverrides.css';

var mixStyle = "navbar navbar-default " + styles.navbarNomargin;
var mixBrand = "navbar-brand " + styles.brand;

class NavBar extends React.Component{
  render(){
    return (
      <nav className={mixStyle}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
            <a className={mixBrand} href="">LCH Consulting Associates</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#services_page">Services <span className="sr-only">(current)</span></a></li>
              <li><a href="#cem_page">CEM</a></li>
              <li><a href="#staff_page">Staff</a></li>
              <li><a href="#contact_page">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
