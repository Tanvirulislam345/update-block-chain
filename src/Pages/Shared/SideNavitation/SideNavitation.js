import React from "react";
import { Link } from "react-router-dom";

const SideNavitation = () => {
  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas pl-0 me-3 mt-3"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#FFFFFF", color: '#C4C5D4'}}
    >
      <ul className="nav flex-column sticky-top pl-0  p-3 mt-3 ">
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold "></i>{" "}
            <span className="ml-3">Your NFT</span>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Your NFT</span>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Your NFT</span>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Your NFT</span>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="#">
            <i className="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Your NFT</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavitation;
