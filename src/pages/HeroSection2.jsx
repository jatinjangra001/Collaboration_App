import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Slider from "../assets/image 8.svg";

const HeroSection2 = () => {
  return (
    <section
      style={{ background: "#4A508E" }}
      className="flex flex-col items-center justify-center mx-auto"
    >
      <h1 className="text-white text-4xl lg:text-4xl font-bold mt-4 mb-4 text-center">
        Your audience wants links
        <span className="block text-white text-xl text-center mt-2">
          Make it easy for them by linking products to every post and video
        </span>
      </h1>
      <div className="flex items-center justify-between px-4 mb-8 lg:mb-0 max-w-full overflow-x-auto">
        <ArrowBackIosNewOutlinedIcon className="h-4 w-4 text-white ml-4 lg:ml-0" />
        <div className="relative flex-grow">
          <img
            src={Slider}
            alt="Mobile App Preview"
            className="max-w-full h-auto mx-auto"
          />
        </div>
        <ArrowForwardIosOutlinedIcon className="h-4 w-4 text-white mr-4 lg:mr-0" />
      </div>
      <button className="mb-4 bg-white text-black py-2 px-6 rounded-full hover:bg-purple-700">
        Try for Free
      </button>
    </section>
  );
};

export default HeroSection2;
