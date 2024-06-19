import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: "#D6D6D6", zIndex: 100 }}
      className="p-2 flex mt-2 items-center justify-between rounded-full sticky mx-auto max-w-7xl"
    >
      {/* Left Side */}
      <div className="flex items-center justify-around flex-1 search-box">
        {/* Brand/logo */}
        <div className="flex items-center ">
          <span className="text-lg font-semibold">Creatanory</span>
        </div>

        {/* Search Box */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="py-2 px-3 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"
              placeholder="Search creators"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="h-6 w-6 text-gray-500" />
            </span>
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="lg:hidden" style={{ zIndex: 110 }}>
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <CloseOutlinedIcon className="h-6 w-6" />
          ) : (
            <MenuOutlinedIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Right Side for large screens */}
      <div className="hidden lg:flex lg:items-center lg:space-x-2 flex-1 justify-end">
        <button className="flex items-center space-x-1 px-2 py-1 text-black">
          <ShoppingCartOutlinedIcon className="h-4 w-4" />
          <span className="text-sm">Cart</span>
        </button>
        <div className="flex items-center space-x-1">
          <InfoOutlinedIcon className="h-4 w-4 text-black" />
          <span className="text-sm">About</span>
        </div>
        <div className="flex items-center space-x-1">
          <HeadsetMicOutlinedIcon className="h-4 w-4 text-black" />
          <span className="text-sm">Contact</span>
        </div>
        <button className="bg-gray-300 text-gray-800 px-3 py-1 border-2 border-black rounded-2xl text-sm">
          <span>Login</span>
          <ExpandMoreOutlinedIcon className="h-4 w-4 text-black" />
        </button>
      </div>
      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-500 shadow-lg z-50 rounded-md py-4 px-2 max-w-sm w-full">
          <div className="flex flex-col items-center space-y-2 p-2">
            <button className="flex items-center space-x-1 px-2 py-1 text-black">
              <ShoppingCartOutlinedIcon className="h-4 w-4" />
              <span className="text-sm">Cart</span>
            </button>
            <div className="flex items-center space-x-1">
              <InfoOutlinedIcon className="h-4 w-4 text-black" />
              <span className="text-sm">About</span>
            </div>
            <div className="flex items-center space-x-1">
              <HeadsetMicOutlinedIcon className="h-4 w-4 text-black" />
              <span className="text-sm">Contact</span>
            </div>
            <button className="bg-gray-300 text-gray-800 px-3 py-1 border-2 border-black rounded-2xl text-sm">
              <span>Login</span>
              <ExpandMoreOutlinedIcon className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
