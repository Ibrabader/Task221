import React from "react";
import "./LandingPage.css";
import vector from "./assets/Vector.svg";
import facebookLogo from "./assets/Vector (1).svg";
import Youtube from "./assets/Vector (2).svg";
import tiktok from "./assets/Vector (3).svg";
import twitter from "./assets/Vector (4).svg";
import insta from "./assets/icons8-instagram.svg";
import FileInput from "./DragDrop";

function LandingPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  
        "
          >
            <div className="side-Menu d-flex flex-column align-items-center align-items-sm-center px-3 pt-2 text-white min-vh-100  ">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none "
              ></a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center  "
                id="menu"
              >
                <li className=" d-none d-sm-inline  nav-item mt-3 ">
                  <a className=" active nav-link px-0 align-items-center   ">
                    <div className="d-flex align-items-center align-items-sm-center ">
                      {" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                        className=" ms-4 d-none d-sm-inline"
                      >
                        <path
                          d="M12.25 1.75V3.25H9.25V1.75H12.25ZM4.75 1.75V6.25H1.75V1.75H4.75ZM12.25 7.75V12.25H9.25V7.75H12.25ZM4.75 10.75V12.25H1.75V10.75H4.75ZM13.75 0.25H7.75V4.75H13.75V0.25ZM6.25 0.25H0.25V7.75H6.25V0.25ZM13.75 6.25H7.75V13.75H13.75V6.25ZM6.25 9.25H0.25V13.75H6.25V9.25Z"
                          fill="#F77A27"
                        />
                      </svg>
                      <span className="ms-4 d-none d-sm-inline">Profile</span>
                    </div>
                  </a>
                </li>
                <li className=" d-none d-sm-inline  nav-item mt-3 ">
                  <a className="  nav-link px-0 align-items-center   ">
                    <div className="d-flex align-items-center align-items-sm-center ">
                      {" "}
                      <img
                        className=" ms-4 d-none d-sm-inline"
                        src={vector}
                      ></img>
                      <span class="ms-4 d-none d-sm-inline">Settings</span>
                    </div>
                  </a>
                </li>
                <li className=" d-none d-sm-inline  nav-item mt-3 ">
                  <a className="  nav-link px-0 align-items-center   ">
                    <div className="d-flex align-items-center align-items-sm-center ">
                      {" "}
                      <img
                        className=" ms-4 d-none d-sm-inline"
                        src={vector}
                      ></img>
                      <span className="ms-4 d-none d-sm-inline">Friends</span>
                    </div>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={vector}
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className=" d-xl-none d-md-none "
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Pofile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Friends
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-auto col-md-9 col-xl-9 px-sm-9 px-0 py-3">
            {" "}
            <div className="row ms-1">
              <h4 className="mb-5">Welcome To The Profile</h4>
              <section className="" >
                <h6>Section 1 </h6>
                <p className="fw-lighter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sit amet venenatis libero, mattis accumsan diam.
                  Aliquam erat volutpat. Phasellus sed arcu ac ex ullamcorper
                  interdum a tristique diam. Pellentesque mi leo, varius in
                  iaculis ut, viverra eget nunc. Proin laoreet, diam eget
                  egestas porttitor, sapien eros dignissim purus, ac mattis
                  lorem sem vitae nunc. Donec pretium metus eget lacus varius
                  laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Mauris sit amet venenatis libero, mattis accumsan diam.
                  Aliquam erat volutpat. Phasellus sed arcu ac ex ullamcorper
                  interdum a tristique diam. Pellentesque mi leo, varius in
                  iaculis ut, viverra eget nunc. Proin laoreet, diam eget
                  egestas porttitor, sapien eros dignissim purus, ac mattis
                  lorem sem vitae nunc. Donec pretium metus eget lacus varius
                  laoreet.{" "}
                </p>

                <div className="mt-4">
                  <h6>Information </h6>
                  <div className="d-flex">
                    <div className=" country-list ps-2 pt-1 me-3">
                      <label>Country</label>
                      <br></br>
                      <select className="text-muted">
                        <option className="fw-lighter">Saudi Arabia</option>
                        <option className="fw-lighter">Saudi Arabia</option>
                      </select>
                    </div>
                    <div className=" country-list ps-2 pt-1 me-3">
                      <label>Country</label>
                      <br></br>
                      <select className="text-muted">
                        <option className="fw-lighter">Saudi Arabia</option>
                        <option className="fw-lighter">Saudi Arabia</option>
                      </select>
                    </div>
                    <div className=" country-list ps-2 pt-1 me-3">
                      <label>Country</label>
                      <br></br>
                      <select className="text-muted">
                        <option className="fw-lighter">Saudi Arabia</option>
                        <option className="fw-lighter">Saudi Arabia</option>
                      </select>
                    </div>
                  </div>
                  <div className=" hobby-list mt-3">
                    <label>Hobbies</label>
                    <div className="d-flex mt-1">
                      <span className="d-flex justify-content-center  me-3">
                        <option className="text-center" href="#">
                          Swimming
                        </option>
                      </span>
                      <span className="d-flex justify-content-center  me-3">
                        <option>Swimming</option>
                      </span>
                      <span className="d-flex justify-content-center  me-3">
                        <option className="text-center" href="#">
                          Swimming
                        </option>
                      </span>
                    </div>
                  </div>
                </div>
                  <button id="edit" className=" mt-5">Edit</button>
              </section>
              <section className=" mt-5">
                <h6>Section 2</h6>
                <div className=" row d-flex ">
                  <div className=" col-md-6 col-lg-6 d-flex col-xs-12 fw-light  ">
                    {" "}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sit amet venenatis libero, mattis accumsan diam.
                      Aliquam erat volutpat. Phasellus sed arcu ac ex
                      ullamcorper interdum a tristique diam. Pellentesque mi
                      leo, varius in iaculis ut, viverra eget nunc. Proin
                      laoreet, diam eget egestas porttitor, sapien eros
                      dignissim purus, ac mattis lorem sem vitae nunc. Donec
                      pretium metus eget lacus varius laoreet.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6 social">
                    <img
                      className="ms-5 mt-3 border rounded-4 border-1 border-dark"
                      style={{ width: "60px", height: "60px" }}
                      src={insta}
                    ></img>
                    <img
                      className="ms-5 mt-3 p-1 border rounded-4 border-1 border-dark"
                      style={{ width: "60px", height: "60px" }}
                      src={tiktok}
                    ></img>
                    <img
                      className="ms-5 mt-3 p-1 border rounded-4 border-1 border-dark"
                      style={{ width: "60px", height: "60px" }}
                      src={twitter}
                    ></img>

                    <img
                      className="ms-5 mt-3 p-1 border rounded-4 border-1 border-dark"
                      style={{ width: "60px", height: "60px" }}
                      src={Youtube}
                    ></img>

                    <img
                      className="ms-5 mt-3  p-1 border rounded-4 border-1 border-dark "
                      style={{ width: "60px", height: "60px" }}
                      src={facebookLogo}
                    ></img>
                  </div>
                </div>
              </section>
              <div className="mt-5">
              <FileInput/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
