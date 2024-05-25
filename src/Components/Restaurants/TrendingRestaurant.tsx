"use client";
import React from "react";
import { Inter } from "next/font/google";
import RestaurantSlider from "./RestaurantSlider";

const inter = Inter({ subsets: ["latin"] });

const TrendingRestaurant = () => {
  return (
    <div className="py-10">
      <div className="container border">
        <h1
          className={`${inter.className} text-3xl text-deepGolden font-bold pb-10 `}
        >
          Trending Restaurants
        </h1>

        <div>
          <RestaurantSlider />
        </div>
      </div>
    </div>
  );
};

export default TrendingRestaurant;
