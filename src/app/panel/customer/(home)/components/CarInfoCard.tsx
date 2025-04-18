"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const CarInfoCard = () => {
  return (
    <div>
      <Splide
        className="w-full h-[300px] mt-16"
        options={{
          direction: "rtl",
          type: "loop",
          perPage: 1,
          pagination: false,
          arrows: true,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="px-10">
              <span className="text-center text-2xl mb-8 font-bold block">
                دنا پلاس توربو
              </span>
              <Image
                width={1000}
                height={1000}
                src={"/assets/img/cars/dena.png"}
                className="w-[90%] block mx-auto h-auto"
                alt={""}
              />
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows splide__arrows--ltr">
          <button
            className="splide__arrow splide__arrow--prev"
            type="button"
            aria-label="Previous slide"
            aria-controls="splide01-track"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="59"
                height="59"
                rx="29.5"
                stroke="#686868"
                strokeDasharray="2 2"
              />
              <path
                d="M32.4301 23.9302L38.5001 30.0002L32.4301 36.0702"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5 30H38.33"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="splide__arrow splide__arrow--next"
            type="button"
            aria-label="Next slide"
            aria-controls="splide01-track"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="59"
                height="59"
                rx="29.5"
                stroke="#686868"
                strokeDasharray="2 2"
              />
              <path
                d="M32.4301 23.9302L38.5001 30.0002L32.4301 36.0702"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5 30H38.33"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default CarInfoCard;
