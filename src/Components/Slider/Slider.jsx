// import React, { useRef, useState } from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slider.css";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

import arrowleft from "./images/arrow-left.svg";
import arrowright from "./images/arrow-right.svg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="title-arrow-block">
        <h1 className="slider-title">Тренерський склад</h1>
        <div className="arrows">
          <a href="/" className="arrow-left">
            <img src={arrowleft} alt="arrowleft" />
          </a>
          <a href="/" className="arrow-right">
            <img src={arrowright} alt="arrowright" />
          </a>
        </div>
      </div>
      <div className="slider-box">
        <Swiper
          slidesPerView={6}
          spaceBetween={54}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="swiper"
        >
          <SwiperSlide>
            <div className="slider-link">
              <img src={img1} alt="img1" />
              <h1>Pulvinar aliquam</h1>
              <p>Arcu elit massa amet turpis vel consequat pellentesque sit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-link">
              <img src={img2} alt="img2" />
              <h1>Pretium odio</h1>
              <p>
                Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo
                lorem morbi quis.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-link">
              <img src={img3} alt="img3" />
              <h1>Aliquet Sectur</h1>
              <p>Id sapien sed nibh fermentum massa posuere ipsum. Diam in.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-link">
              <img src={img4} alt="img4" />
              <h1>Blandit augue</h1>
              <p>
                Scelerisque accumsan pretium justo, vitae elit. Dolor semper
                morbi sit auctor vel diam eros.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-link">
              <img src={img5} alt="img5" />
              <h1>Lorem lacus</h1>
              <p>
                Adipiscing amet, viverra dignissim egestas. Sed nibh egestas
                venenatis faucibus.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-link">
              <img src={img6} alt="img6" />
              <h1>Sed erat</h1>
              <p>Quis ullamcorper pretium lacus risus tellus dolor etiam. </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
