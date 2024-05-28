"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { RestaurantTypes, ClickFavoriteType } from "../../../utils/types";
import LoadingScreen from "../LoadingScreen";
import Link from "next/link";
import RestaurantsList from "./RestaurantsList";

const inter = Inter({ subsets: ["latin"] });

const YourRestaurants = () => {
  const [trendingRestaurants, setTrendingRestaurants] = useState([
    {
      id: 1,
      name: "lorem ipsum",
      availableSeats: 20,
      image: "restaurant1.png",
      isReserved: false,
      isFavorite: true,
    },
    {
      id: 2,
      name: "dorem ipsum",
      availableSeats: 30,
      image: "restaurant2.png",
      isReserved: true,
      isFavorite: false,
    },
    {
      id: 3,
      name: "corem ipsum",
      availableSeats: 12,
      image: "restaurant3.png",
      isReserved: false,
      isFavorite: false,
    },
    {
      id: 4,
      name: "morem ipsum",
      availableSeats: 32,
      image: "restaurant4.png",
      isReserved: true,
      isFavorite: true,
    },
    {
      id: 5,
      name: "lorem ipsum",
      availableSeats: 25,
      image: "restaurant5.png",
      isReserved: false,
      isFavorite: false,
    },
    {
      id: 6,
      name: "lorem ipsum",
      availableSeats: 24,
      image: "restaurant2.png",
      isReserved: false,
      isFavorite: false,
    },
    {
      id: 7,
      name: "lorem ipsum",
      availableSeats: 17,
      image: "restaurant1.png",
      isReserved: true,
      isFavorite: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const clickFavorite: ClickFavoriteType = async (id) => {
    setIsLoading(true);

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000)
    );

    setIsLoading(false);

    setTrendingRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id
          ? { ...restaurant, isFavorite: !restaurant.isFavorite }
          : restaurant
      )
    );
  };

  return (
    <div className="py-10">
      {isLoading && <LoadingScreen />}

      <div className="container ">
        <div className="flex items-center justify-between">
          <h1
            className={`${inter.className} text-3xl text-deepGolden font-bold`}
          >
            Your Restaurants
          </h1>
          <Link href={"/your-restaurants"} className="underline">
            View All
          </Link>
        </div>

        <div className="pt-10">
          <RestaurantsList
            trendingRestaurants={trendingRestaurants}
            clickFavorite={clickFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default YourRestaurants;
