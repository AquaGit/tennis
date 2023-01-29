import React from "react";
import "./FirstScreen.css";
import play from "./play-icon.svg";
import open from "./open-icon.svg";

const FirstScreen = () => {
  return (
    <div className="first-screen">
      <div className="container">
        <div className="first-main">
          <div className="title">
            <h1 className="title-item">
              Львівський тенісний клуб іменні Н.Р. Лютого
            </h1>
          </div>
          <div className="play">
            <div className="play-item">
              <a href="/123" className="play-link">
                <img src={play} alt="play" />
              </a>
              <a href="/123" className="play-link2">
                <h3 className="play-title">Подивіться відео про наш клуб</h3>
              </a>
            </div>
          </div>
          <div className="block-list">

            <div className="block-item">
              <h4>Послуги</h4>
              <div className="block-line">
                <p>Оренда карту</p>
                <a href="/" className="block-link">
                  <img src={open} alt="open" />
                </a>
              </div>
            </div>

            <div className="block-item">
              <h4>Послуги</h4>
              <div className="block-line">
              <p>Дитячий теніс</p>
              <a href="/" className="block-link">
                <img src={open} alt="open" />
              </a>
              </div>
            </div>

            <div className="block-item">
              <h4>Послуги</h4>
              <div className="block-line">
              <p>Збори команд</p>
                <a href="/" className="block-link">
                  <img src={open} alt="open" />
                </a>
              </div>
            </div>
            <div className="block-item">
              <h4>Турніри</h4>
              <div className="block-line">
              <p>Розклад</p>
              <a href="/" className="block-link">
                <img src={open} alt="open" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
