import Image from "next/image";
import React, { useState } from "react";
import UpDownArrow from "../SVG/UpDownArrow";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BsCheckLg } from "react-icons/bs";

const ReservationForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  const [smoking, setSmoking] = useState<boolean>(false);

  return (
    <div>
      <div className="container ">
        <div className="border p-10 rounded-3xl grid grid-cols-2 gap-5">
          <div className=" relative">
            <Image
              src={"/images/reservation.png"}
              alt="reservation banner"
              width={800}
              height={630}
              className="rounded-3xl"
            />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold ">Make Reservation</h1>

            <div>
              <form action="">
                {/* ========== number of people =========== */}
                <div className="w-full h-fit relative">
                  <input
                    type="number"
                    placeholder="Number of people"
                    min={0}
                    className="w-full py-4 px-4 bg-mediumDark text-sm placeholder:text-lightGray rounded-xl outline-none focus:outline-lightGolden"
                  />
                  <div className="absolute top-3.5 right-2  pointer-events-none">
                    <UpDownArrow />
                  </div>
                </div>

                {/* ========== date picker =========== */}
                <div className="w-full h-fit relative mt-3">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className=" w-full py-4 px-4 bg-mediumDark text-sm placeholder:text-lightGray rounded-xl outline-none focus:outline-lightGolden"
                  />
                  <div className="absolute top-3.5 right-2  pointer-events-none">
                    <FaCalendarAlt className="text-lg m-1 text-mediumGray" />
                  </div>
                </div>

                {/* ========== time picker =========== */}
                <div className="w-full h-fit relative mt-3">
                  <DatePicker
                    id="timePicker"
                    selected={startTime}
                    onChange={(date: Date | null) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className=" w-full py-4 px-4 bg-mediumDark text-sm placeholder:text-lightGray rounded-xl outline-none focus:outline-lightGolden"
                  />
                  <div className="absolute top-3.5 right-2  pointer-events-none">
                    <FaRegClock className="text-lg m-1 text-mediumGray" />
                  </div>
                </div>

                {/* ========== spent hour =========== */}
                <div className="w-full h-fit relative mt-3">
                  <input
                    type="number"
                    placeholder="Spent Hour"
                    min={0}
                    className="w-full py-4 px-4 bg-mediumDark text-sm placeholder:text-lightGray rounded-xl outline-none focus:outline-lightGolden"
                  />
                  <div className="absolute top-3.5 right-2  pointer-events-none">
                    <UpDownArrow />
                  </div>
                </div>

                {/* ============ terms & condition ========== */}
                <div
                  onClick={() => setTermsAndConditions(!termsAndConditions)}
                  className="flex items-center gap-3 mb-4 cursor-pointer select-none"
                >
                  <div
                    className={`${
                      termsAndConditions ? "bg-deepGolden" : "bg-deepDark"
                    } h-6 w-6  border-2 border-deepGolden  rounded-full flex items-center justify-center`}
                  >
                    {termsAndConditions && (
                      <BsCheckLg className="text-deepGray text-xl" />
                    )}
                  </div>

                  <p className="text-sm text-mediumGray">
                    I accept{" "}
                    <span className="underline">Terms and Conditions</span>
                  </p>
                </div>

                {/* ============ terms & condition ========== */}
                <div
                  onClick={() => setSmoking(!smoking)}
                  className="flex items-center gap-3 mb-4 cursor-pointer select-none"
                >
                  <div
                    className={`${
                      smoking ? "bg-deepGolden" : "bg-deepDark"
                    } h-6 w-6  border-2 border-deepGolden  rounded-full flex items-center justify-center`}
                  >
                    {smoking && <BsCheckLg className="text-deepGray text-xl" />}
                  </div>

                  <p className="text-sm text-mediumGray">
                    I Prefer smoking zone
                  </p>
                </div>

                {/* ==== confirm ======== */}
                <div>
                  <button className="px-5 py-3 text-sm text-deepDark hover:text-lightGray bg-deepGolden hover:bg-mediumDark2  rounded-full">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
