import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.css";

export const Header = () => {
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
          <Link className="username" to="/login">
            <div className="header-button-in" to="/register">
              Login
            </div>
          </Link>
          <Link to="/register">
            <Button>Sign up</Button>
          </Link>
        </div>
      </header>
      <hr className="hr-line" />
    </>
  );
};
