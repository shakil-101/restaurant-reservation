"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const RestaurantSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="">
      <div className="">
        <div className=" relative">
          <div className=" h-8  w-full absolute top-0 bottom-0 my-auto mx-0 z-[100]">
            <button
              ref={prevRef}
              className="text-deepGolden p-1 rounded-full absolute top-0 -left-10"
            >
              <MdArrowForwardIos className="text-2xl rotate-180" />
            </button>
            <button
              ref={nextRef}
              className="text-deepGolden p-1 rounded-full absolute top-0 -right-10 "
            >
              <MdArrowForwardIos className="text-2xl " />
            </button>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            onInit={(swiper) => {
              if (
                prevRef.current &&
                nextRef.current &&
                swiper.params.navigation
              ) {
                (swiper.params.navigation as any).prevEl = prevRef.current;
                (swiper.params.navigation as any).nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            modules={[Navigation]}
            className="trending-restaurants"
          >
            <SwiperSlide>
              <div className="rounded-2xl p-3 border border-deepGray shadow-xl min-h-[300px]">
                <div className="h-[175px] overflow-hidden relative">
                  <Image
                    src={"/images/restaurant1.png"}
                    alt="restaurant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-lg font-bold">Lorem ipsum </h1>
                    <p className="text-sm font-light ">29 seats available</p>
                  </div>
                  <div className="text-end">
                    <button className="text-deepDark bg-deepGolden px-4 py-1.5 rounded-full">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl p-3 border border-deepGray min-h-[300px]">
                <div className="h-[175px]  overflow-hidden relative">
                  <Image
                    src={"/images/restaurant2.png"}
                    alt="restaurant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-lg font-bold">Lorem ipsum </h1>
                    <p className="text-sm font-light ">29 seats available</p>
                  </div>
                  <div className="text-end">
                    <button className="text-deepDark bg-deepGolden px-4 py-1.5 rounded-full">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl p-3 border border-deepGray min-h-[300px]">
                <div className="h-[175px]  overflow-hidden relative">
                  <Image
                    src={"/images/restaurant3.png"}
                    alt="restaurant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-lg font-bold">Lorem ipsum </h1>
                    <p className="text-sm font-light ">29 seats available</p>
                  </div>
                  <div className="text-end">
                    <button className="text-deepDark bg-deepGolden px-4 py-1.5 rounded-full">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl p-3 border border-deepGray min-h-[300px]">
                <div className="h-[175px]  overflow-hidden relative">
                  <Image
                    src={"/images/restaurant4.png"}
                    alt="restaurant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-lg font-bold">Lorem ipsum </h1>
                    <p className="text-sm font-light ">29 seats available</p>
                  </div>
                  <div className="text-end">
                    <button className="text-deepDark bg-deepGolden px-4 py-1.5 rounded-full">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl p-3 border border-deepGray min-h-[300px]">
                <div className="h-[175px]  overflow-hidden relative">
                  <Image
                    src={"/images/restaurant5.png"}
                    alt="restaurant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-lg font-bold">Lorem ipsum </h1>
                    <p className="text-sm font-light ">29 seats available</p>
                  </div>
                  <div className="text-end">
                    <button className="text-deepDark bg-deepGolden px-4 py-1.5 rounded-full">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl p-3 border border-deepGray min-h-[300px]">
                <div className="h-[175px]  overflow-hidden relative">
                  <Image
                    src={"/images/restaurant5.png"}
                    alt="restaurant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="pt-5 grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-lg font-bold">Lorem ipsum </h1>
                    <p className="text-sm font-light ">29 seats available</p>
                  </div>
                  <div className="text-end">
                    <button className="text-deepDark bg-deepGolden px-4 py-1.5 rounded-full">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSlider;
