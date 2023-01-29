import React from "react";
import youtube from "./youtube.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="rights">
          <h5>2023 © Всі права захищені.</h5>
        </div>
        <div className="menu-footer">
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/" className="footer-link">
                Головна
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Про клуб
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Турніри
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Послуги
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Дитячий теніс
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Галерея
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Ціни
              </a>
            </li>
            <li className="footer-item">
              <a href="/" className="footer-link">
                Контакти
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="/" className="social-item">
            <img src={youtube} alt="" className="social-link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
