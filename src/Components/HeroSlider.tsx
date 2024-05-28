import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="rounded-3xl overflow-hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="h-[250px] rounded-3xl overflow-hidden  px-1">
                <Image
                  src={"/images/hero1.svg"}
                  alt="bhn hero slider"
                  objectFit="cover"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[250px] rounded-3xl overflow-hidden  px-1">
                <Image
                  src={"/images/hero2.svg"}
                  alt="bhn hero slider"
                  objectFit="cover"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[250px] rounded-3xl overflow-hidden ">
                <Image
                  src={"/images/hero3.svg"}
                  alt="bhn hero slider"
                  objectFit="cover"
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
