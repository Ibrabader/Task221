import React from "react";
import "./MainHeader.css";
import logo from "./assets/tapflow.svg";
import searchIcon from './assets/icons8-search.svg';
function MainHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
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
          <div className="collapse navbar-collapse ms-auto" id="main">
            <form className="form-field d-flex ms-auto" role="search">
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
    </>
  );
}

export default MainHeader;
