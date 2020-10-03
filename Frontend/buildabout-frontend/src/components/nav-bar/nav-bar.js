import React from "react";
import "./nav-bar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="first-custom-nav-button"></div>
      <div className="second-custom-nav-button"></div>
      <div className="third-custom-nav-button"></div>
      <div className="help-button">
        <div className="inner-help-button"></div>
      </div>
    </div>
  );
}

export default NavBar;
