"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { RestaurantTypes, ClickFavoriteType } from "../../../utils/types";
import LoadingScreen from "../LoadingScreen";
import Link from "next/link";
import RestaurantsList from "./RestaurantsList";

const inter = Inter({ subsets: ["latin"] });
import { IoMdArrowDropdown } from "react-icons/io";

const AllRestaurants = () => {
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
      }, 700)
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
            All Restaurants
          </h1>
          <div className="flex gap-3">
            <div className=" relative">
              <select
                name="locations"
                className="bg-mediumDark2 px-3 py-2 rounded-full text-sm w-32 cursor-pointer outline-0 appearance-none "
              >
                <option value="">Location</option>
                <option value="Banani" className="cursor-pointer">
                  Banani
                </option>
                <option value="Gulshan 1">Gulshan 1</option>
                <option value="Gulshan 2">Gulshan 2</option>
                <option value="Mirpur">Mirpur</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Uttara">Uttara</option>
              </select>
              <span className="absolute top-2 right-2 pointer-events-none">
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </div>
            <div className=" relative">
              <select
                name="locations"
                className="bg-mediumDark2 px-3 py-2 rounded-full text-sm w-32 cursor-pointer outline-0 appearance-none "
              >
                <option value="">Location</option>
                <option value="Banani" className="cursor-pointer">
                  Banani
                </option>
                <option value="Gulshan 1">Gulshan 1</option>
                <option value="Gulshan 2">Gulshan 2</option>
                <option value="Mirpur">Mirpur</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Uttara">Uttara</option>
              </select>
              <span className="absolute top-2 right-2 pointer-events-none">
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </div>
            <div className=" relative">
              <select
                name="locations"
                className="bg-mediumDark2 px-3 py-2 rounded-full text-sm w-32 cursor-pointer outline-0 appearance-none "
              >
                <option value="">Sort By</option>
                <option value="Banani" className="cursor-pointer">
                  Banani
                </option>
                <option value="Gulshan 1">Gulshan 1</option>
                <option value="Gulshan 2">Gulshan 2</option>
                <option value="Mirpur">Mirpur</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Uttara">Uttara</option>
              </select>
              <span className="absolute top-2 right-2 pointer-events-none">
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </div>
          </div>
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

export default AllRestaurants;
