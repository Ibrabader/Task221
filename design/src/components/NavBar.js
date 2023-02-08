import React from "react";
import './NavBar.css'
import logo from "./assets/tapflow.svg";
import searchIcon from './assets/icons8-search.svg';
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top " >
      <div className="container-fluid">
          <img className="logo" src={logo}></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto  me-auto mt-1 " id="main">
            <form className="form-field d-flex ms-auto me-4" role="search">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>  
            <img src={searchIcon} ></img>
             
             
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
