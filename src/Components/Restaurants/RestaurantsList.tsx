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
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";

import { RestaurantTypes, ClickFavoriteType } from "../../../utils/types";
import Link from "next/link";

interface RestaurantSliderProps {
  trendingRestaurants: RestaurantTypes[];
  clickFavorite: ClickFavoriteType;
}

const RestaurantsList: React.FC<RestaurantSliderProps> = ({
  trendingRestaurants,
  clickFavorite,
}) => {
  return (
    <div className="">
      <div className="">
        <div className=" relative">
          <div className="grid grid-cols-4 gap-8">
            {trendingRestaurants.map((restaurant, index) => (
              <div key={index}>
                <div className="swiper-no-swiping rounded-2xl p-3 border border-deepGray  min-h-[300px] relative">
                  <button
                    onClick={() => clickFavorite(restaurant.id)}
                    className="absolute top-5 right-5 z-[100] text-lightGolden text-3xl "
                  >
                    <HiOutlineHeart
                      className={`${
                        restaurant.isFavorite
                          ? "fill-deepGolden"
                          : "fill-transparent"
                      } `}
                    />
                  </button>
                  <div className="h-[175px] overflow-hidden relative">
                    <Image
                      src={`/images/${restaurant.image}`}
                      alt="restaurant"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="pt-5 grid grid-cols-2 items-center">
                    <div>
                      <h1 className="text-lg font-bold">{restaurant.name}</h1>
                      <p className="text-sm font-light ">
                        {restaurant.availableSeats} seats available
                      </p>
                    </div>
                    <div className="text-end">
                      {restaurant.isReserved ? (
                        <button className="w-24 py-1.5 text-sm text-mediumGray  bg-mediumDark2  rounded-full">
                          Reserved
                        </button>
                      ) : (
                        <Link href={`/reservation?id=${restaurant.id}`}>
                          <button className="w-24 py-1.5 text-sm text-deepDark hover:text-mediumGray bg-deepGolden hover:bg-mediumDark2  rounded-full">
                            Reserve
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsList;
