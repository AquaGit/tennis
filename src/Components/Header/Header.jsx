import React from "react";
import logo from "./logo.svg";
import youtube from "./youtube.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <a href="/" className="logo-item">
            <img src={logo} alt="logo" className="logo-img" />
          </a>
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <a href="/" className="menu-link">
              Головна
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Про клуб
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Турніри
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Послуги
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Дитячий теніс
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Галерея
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Ціни
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Контакти
            </a>
          </li>
        </ul>
        <div className="social">
          <a href="/" className="social-item">
            <img src={youtube} alt="" className="social-link" />
          </a>
        </div>
        {/* <span></span> */}
      </div>
    </header>
  );
};

export default Header;
