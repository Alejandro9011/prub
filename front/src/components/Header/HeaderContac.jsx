import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.css";

export const HeaderContact = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-logo">
          <Link className="Logo" to="/">
            <span className="header-logo-violet">Universal</span>
            <span className="header-logo-black">Home</span>
          </Link>
        </div>
        <div className="purple-circle"></div>
        <div className="header-navbar">
        </div>
      </header>
      <hr className="hr-line" />
    </>
  );
};
