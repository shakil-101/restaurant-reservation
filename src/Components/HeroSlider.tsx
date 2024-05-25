"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

import styles from "../styles/SlickSlider.module.css";

const HeroSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className={styles.customDotsList}> {dots} </ul>
      </div>
      // <div
      //   style={{
      //     backgroundColor: "#ddd",
      //     borderRadius: "10px",
      //     padding: "10px",
      //   }}
      // >
      //   <ul style={{ margin: "0px" }}> {dots} </ul>
      // </div>
    ),
  };

  return (
    <div className="">
      <div className="container border ">
        <div className={styles.testClass}>Hello module css</div>
        <div className="rounded-3xl bg-green-300 ">
          <Slider {...settings}>
            <div className="h-[250px] rounded-3xl overflow-hidden">
              <Image
                src={"/images/hero1.svg"}
                alt="bhn hero slider"
                width="0"
                height="0"
                className="w-full h-auto"
              />
            </div>
            <div className="h-[250px] rounded-3xl  overflow-hidden">
              <Image
                src={"/images/hero2.svg"}
                alt="bhn hero slider"
                width="0"
                height="0"
                className="w-full h-auto "
              />
            </div>
            <div className="h-[250px] rounded-3xl  overflow-hidden ">
              <Image
                src={"/images/hero3.svg"}
                alt="bhn hero slider"
                width="0"
                height="0"
                className="w-full h-auto "
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
