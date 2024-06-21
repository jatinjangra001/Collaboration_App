import React, { useState, useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import Slider4 from "../assets/image 8.svg";
import "../App.css";

const slides = [
  {
    image: Slider1,
    text: "Link products to every post and video",
  },
  {
    image: Slider2,
    text: "Boost engagement with direct links",
  },
  {
    image: Slider3,
    text: "Increase conversion rates effectively",
  },
  {
    image: Slider4,
    text: "Increase your montly earning ",
  },
];

const HeroSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setIsSliding(false);
    }, 500); // Match this duration with your CSS animation duration
  };

  const handleNextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsSliding(false);
    }, 500); // Match this duration with your CSS animation duration
  };

  return (
    <section
      style={{ background: "#4A508E" }}
      className="flex flex-col items-center justify-center mx-auto"
    >
      <h1 className="text-white text-4xl lg:text-4xl font-bold mt-4 mb-4 text-center">
        Your audience wants links
        <span className="block text-white text-xl text-center mt-2">
          {slides[currentIndex].text}
        </span>
      </h1>
      <div className="flex items-center justify-between px-4 mb-8 lg:mb-0 max-w-full overflow-hidden">
        <ArrowBackIosNewOutlinedIcon
          className="h-4 w-4 text-white ml-4 lg:ml-0 cursor-pointer"
          onClick={handlePrevSlide}
        />
        <div className="relative flex-grow flex items-center justify-center">
          <div className={`slider-container ${isSliding ? "sliding" : ""}`}>
            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt="Slide"
                  className="slide"
                  style={{
                    width: "auto",
                    height: "30rem",
                    objectFit: "contain",
                    transition: "opacity 0.5s ease-in-out",
                    opacity: index === currentIndex ? 1 : 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <ArrowForwardIosOutlinedIcon
          className="h-4 w-4 text-white mr-4 lg:mr-0 cursor-pointer"
          onClick={handleNextSlide}
        />
      </div>
      <button className="mt-4 mb-4 bg-white text-black py-2 px-6 rounded-full hover:bg-purple-700">
        Try for Free
      </button>
    </section>
  );
};

export default HeroSection2;
