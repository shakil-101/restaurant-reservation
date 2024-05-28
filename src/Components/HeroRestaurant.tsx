"use client";

import React from "react";

import Image from "next/image";

import styles from "../styles/hero.module.css";

const HeroRestaurant = () => {
  return (
    <div className=" py-10 border">
      <div className="container  ">
        <div className="h-[250px] rounded-3xl overflow-hidden relative">
          <Image
            src={"/images/hero.svg"}
            alt="bhn hero slider"
            objectFit="cover"
            fill
            className={`${styles.landingImg} w-full h-full object-cover rounded-2xl absolute top-0 left-0`}
          />

          <div
            className={`${styles.landingText} text-white w-full h-full bg-deepDark/30 flex items-center `}
          >
            <div className="flex items-center gap-5 px-14 py-5">
              <div className="w-[135px] h-[135px] relative rounded-2xl overflow-hidden">
                <Image
                  src={"/images/RestLogo.svg"}
                  alt="bhn hero slider"
                  fill
                  objectFit={"contain"}
                  className={`rounded-2xl`}
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold pb-3">
                  Gloria Jeans Restaurant
                </h1>
                <p className="font-light">
                  <span className="font-bold">35</span> Seats Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRestaurant;
