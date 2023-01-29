import React from "react";
import "./Advantages.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="img-list">
        <h2>5 літніх грунтових кортів</h2>
        <img src={img1} alt="img1" />
      </div>

      <div className="img-list">
        <h2>Зал з покриттям 'штучна трава'</h2>
        <img src={img2} alt="img2" />
      </div>

      <div className="img-list">
        <h2>Зал з покриттям 'хард'</h2>
        <img src={img3} alt="img3" />
      </div>
    </div>
  );
};

export default Advantages;
