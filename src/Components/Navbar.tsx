import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="">
      <div className="container border py-5 flex items-center justify-between">
        <div className="relative w-[345px] h-[50px] ">
          <Image
            src="/images/logo.svg"
            placeholder="empty"
            fill={true}
            alt="Picture of the author"
          />
        </div>

        <div className="flex space-x-4 items-center">
          <div>
            <Link
              href={"/"}
              className="px-2 text-lightGray hover:text-deepGolden"
            >
              My Reservation
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="text-deepGolden flex items-center gap-2  px-2"
            >
              <FaRegUser className="text-lg " />
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
