import React from "react";
import "./About.css";
import img from "./img.jpg";

const About = () => {
  return (
    <div className="about-box">
      <div className="about">
        <div className="about-wrapper">
          <div className="about-img">
            <img src={img} alt="about" />
          </div>
          <div className="about-text">
            <div className="about-title">
              <h1>Спортивний клуб</h1>
            </div>
            <div className="about-text-p">
              <p>
                Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit
                turpis. Ultricies erat pretium risus quam tincidunt non viverra
                porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit
                mauris vitae amet aliquet ultrices mauris pellentesque. Non
                ipsum commodo, sit mi sit netus aenean nisl. Donec sit
                pellentesque enim, vestibulum. Condimentum hac adipiscing purus
                in augue nisi. Convallis ut nisi.
              </p>
            </div>
            <div className="about-main-title">
              <h1>Ornare orci ut dictum nulla fames.</h1>
            </div>
            <div className="about-main-ul">
              <ul className="about-ul">
                <li className="about-ul-item">
                  <span></span>
                  Euismod diam, vel venenatis bibendum sodales sem hendrerit
                  vulputate sagittis.
                </li>
                <li className="about-ul-item">
                  <span></span>
                  Nisl senectus sed malesuada donec. Interdum malesuada bibendum
                  imperdiet elementum auctor vitae in.{" "}
                </li>
                <li className="about-ul-item">
                  <span></span>
                  Quam purus ornare dictum pharetra. Sed viverra tellus
                  sollicitudin urna, sagittis.{" "}
                </li>
                <li className="about-ul-item">
                  <span></span>
                  Scelerisque urna senectus commodo, nam. Donec nibh tempus
                  imperdiet nisi, tincidunt mus egestas nisl nullam.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
