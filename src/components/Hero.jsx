import React from "react";
import { assetsImg } from "../data/productData";



// from - [#d7e8dc] to - [#c4dbce]

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-5 py-30 lg:px-14 bg-gradient-to-r  from-green-100 to-green-50">
      {/* content section  */}
      <div className=" text-center mt-12 md:text-start md:mt-0 space-y-5 max-w-xl">
        <h3 className="text-sm md:text-lg text-gray-700">Fresh From Farm to Your Plate</h3>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Healthy Eating,
          <br /> the Organic Way
        </h1>
        <p className="text-gray-600 text-md">
          Discover fresh, organic, and handpicked vegetables directly from local
          farms to your kitchen.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300">
          Explore Menu
        </button>
      </div>

      {/* img section  */}
      <div className=" w-4/5 md:w-2/5">
        <img
          src={assetsImg.HeroImg}
          alt="img"
          className="rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] border-2 border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
