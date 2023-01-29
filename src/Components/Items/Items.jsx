import React from "react";
import "./Items.css";

import ItemsSlider from './ItemsSlider/ItemsSlider'

const Items = () => {
  return (
    <div className="items-box">
      <div className="price-box">
        <div className="price-title">
          <h1>Ціни та абонементи</h1>
        </div>
        <div className="price-list">
          <div className="price-item">
            <a href="/" className="price-link">
              <h3>Зимовий сезон 2022-2023</h3>
            </a>
          </div>
          <div className="price-item">
            <a href="/" className="price-link">
              <h3>Абонементи</h3>
            </a>
          </div>
          <div className="price-item">
            <a href="/" className="price-link">
              <h3>Знижки</h3>
            </a>
          </div>
          <div className="price-item">
            <a href="/" className="price-link">
              <h3>Додаткові послуги</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="services-box">
        <div className="services-title">
            <h1>Послуги</h1>
        </div>
        <div className="services-slider">
            <ItemsSlider/>
        </div>
      </div>
    </div>
  );
};

export default Items;
