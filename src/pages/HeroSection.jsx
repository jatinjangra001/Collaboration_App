import React from "react";
import MobileAppPreview from "../assets/hero image.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col mx-auto max-w-7xl lg:flex-row items-center justify-between py-12 px-4 relative bg-transparent">
      {/* Left Side */}
      <div className="flex-1 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Welcome To India’s First{" "}
          <span className="text-purple-600">Creator's Marketplace</span>
        </h1>
        <p className="text-lg mb-6">Create your first E-Store @ Zero Cost</p>
        <p className="text-gray-600 mb-8">
          Empower your creativity with Creatanory. Showcase, sell, and connect
          with a global audience effortlessly, turn your products into profits.
        </p>
        <Link
          to="/get-started"
          className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700"
        >
          Get Started
        </Link>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative">
          <img
            src={MobileAppPreview}
            alt="Mobile App Preview"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
