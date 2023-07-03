import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import bgClr from "../../assets/images/bg-liner2.png";


import "./style.scss";
import slideimg  from "../../assets/images/image.png"
// import required modules
import { Pagination } from "swiper";
import H2 from "../../UI/h2/index.jsx"
import { Companies } from "../../database/api";

export default function App() {

  return (
    <>
      <section id="company">
        <div className="com-bg">
          <img src={bgClr} alt="rasm" />
        </div>
        <div className="container">
          <H2 h2title="Companies" h2class="com-title text-center " />
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              Companies.map((item) => {
                return (
                  <SwiperSlide>
                    <div className="slide">
                      <img src={item.com_img} alt="slide-img" />
                    </div>
                    <div className="slide">
                      <img src={item.com_img} alt="slide-img" />
                    </div>
                    <div className="slide">
                      <img src={item.com_img} alt="slide-img" />
                    </div>
                  </SwiperSlide>
                );
              })
            }

            {/* <SwiperSlide>
              <div className="slide">
                <img src={slideimg} alt="slide-img" />
              </div>
              <div className="slide">
                <img src={slideimg} alt="slide-img" />
              </div>
              <div className="slide">
                <img src={slideimg} alt="slide-img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <img src={slideimg} alt="slide-img" />
              </div>
              <div className="slide">
                <img src={slideimg} alt="slide-img" />
              </div>
              <div className="slide">
                <img src={slideimg} alt="slide-img" />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
