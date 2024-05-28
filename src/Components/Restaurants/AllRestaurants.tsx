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
      locations: ["Mirpur"],
      cuisins: ["Pizza", "Kebab"],
    },
    {
      id: 2,
      name: "dorem ipsum",
      availableSeats: 30,
      image: "restaurant2.png",
      isReserved: true,
      isFavorite: false,
      locations: ["Dhanmondi", "Mirpur"],
      cuisins: ["Biriyani", "Kebab"],
    },
    {
      id: 3,
      name: "corem ipsum",
      availableSeats: 12,
      image: "restaurant3.png",
      isReserved: false,
      isFavorite: false,
      locations: ["Uttara", "Dhanmondi"],
      cuisins: ["Chicken", "Pizza"],
    },
    {
      id: 4,
      name: "morem ipsum",
      availableSeats: 32,
      image: "restaurant4.png",
      isReserved: true,
      isFavorite: true,
      locations: ["Gulshan 2", "Gulshan 1"],
      cuisins: ["Burger", "Pizza"],
    },
    {
      id: 5,
      name: "lorem ipsum",
      availableSeats: 25,
      image: "restaurant5.png",
      isReserved: false,
      isFavorite: false,
      locations: ["Uttara", "Gulshan 1"],
      cuisins: ["Pizza", "Biriyani", "Kebab"],
    },
    {
      id: 6,
      name: "lorem ipsum",
      availableSeats: 24,
      image: "restaurant2.png",
      isReserved: false,
      isFavorite: false,
      locations: ["Uttara", "Mirpur"],
      cuisins: ["Chicken", "Biriyani", "Kebab"],
    },
    {
      id: 7,
      name: "lorem ipsum",
      availableSeats: 17,
      image: "restaurant1.png",
      isReserved: true,
      isFavorite: true,
      locations: ["Gulshan 2", "Gulshan 1"],
      cuisins: ["Chicken", "Burger"],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCuisin, setSelectedCuisin] = useState("");

  const clickCuisinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCuisin(event.target.value);
    console.log(event.target.value);
  };
  const clickLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
    console.log(event.target.value);
  };

  const filteredRestaurants = trendingRestaurants.filter((restaurant) => {
    const matchesLocation = selectedLocation
      ? restaurant.locations.includes(selectedLocation)
      : true;
    const matchesCuisin = selectedCuisin
      ? restaurant.cuisins.includes(selectedCuisin)
      : true;
    return matchesLocation && matchesCuisin;
  });

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
                onChange={clickCuisinChange}
                name="cuisins"
                className="bg-mediumDark2 px-3 py-2 rounded-full text-sm w-32 cursor-pointer outline-0 appearance-none "
              >
                <option value="">Cuisin</option>

                <option value="Kebab">Kebab</option>
                <option value="Biriyani">Biriyani</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Chicken">Chicken</option>
              </select>
              <span className="absolute top-2 right-2 pointer-events-none">
                <IoMdArrowDropdown className="text-xl" />
              </span>
            </div>
            <div className=" relative">
              <select
                onChange={clickLocationChange}
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
          </div>
        </div>

        <div className="pt-10 min-h-[350px]">
          <RestaurantsList
            trendingRestaurants={filteredRestaurants}
            clickFavorite={clickFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default AllRestaurants;
