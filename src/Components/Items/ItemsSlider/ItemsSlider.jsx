import React from "react";
import "./ItemsSlider.css";

import img from "./slide1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const ItemsSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <a href="/">
            <img src={img} alt="slider" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img src={img} alt="slider" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img src={img} alt="slider" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ItemsSlider;
