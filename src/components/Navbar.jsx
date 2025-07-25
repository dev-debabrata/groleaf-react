import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { assetsImg } from "../data/productData";


const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center px-5 py-4 lg:px-14 md:px-10 bg-green-900 text-green-100">
      {/* logo section  */}
      <div className=" flex items-center justify-center gap-1">
        <img src={assetsImg.Logo} alt="" className=" w-12" />
        <span className=" text-2xl font-bold">GroLeaf</span>
      </div>

      {/* nav section  */}
      <nav className=" hidden md:flex flex-row gap-6">
        <a href="/" className="navHover">
          Home
        </a>
        <a href="/" className="navHover">
          Menu
        </a>
        <a href="/" className="navHover">
          About Us
        </a>
        <a href="/" className="navHover">
          Subscription
        </a>
        <a href="/" className="navHover">
          Recipes
        </a>
        <a href="/" className="navHover">
          Contact
        </a>

        {/* icons */}
        <div className=" hidden lg:flex gap-2 ml-8">
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FiSearch />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <IoIosContact />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FaShoppingCart />
          </span>
        </div>
      </nav>

      {/* responsive */}

      <button className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300">
        Shop Now
      </button>
    </header>
  );
};

export default Navbar;
