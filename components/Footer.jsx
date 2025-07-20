import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { assetsImg } from "../data/productData";

const Footer = () => {
  return (
    <footer className=" bg-green-900 pt-12 pb-6 px-5 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {/* logo section */}
        <div>
          <div className=" flex items-center gap-1 mb-2">
            <img src={assetsImg.Logo} alt="" className=" w-12" />
            <h1 className="text-2xl font-bold text-green-100">
              GroLeaf
            </h1>
          </div>
          <p className="text-sm text-gray-100">
            Fresh, healthy, and 100% organic products delivered to your
            doorstep. Supporting local farmers and sustainable living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-green-500">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>
              <a href="/" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3 text-green-500">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>
              <a href="/" className="hover:text-green-600">
                Vegetables
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600">
                Fruits
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600">
                Dairy Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600">
                Beverages
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold mb-3 text-green-500">Contact</h4>
          <p className="text-sm text-gray-100 mb-2">
            123 Organic Street, Kolkata, India
          </p>
          <p className="text-sm text-gray-100 mb-2">
            Email: support@organicgroleaf.com
          </p>
          <p className="text-sm text-gray-100 mb-4">Phone: +91 123 4567 890</p>
          <div className="flex space-x-4">
            <a href="/" className="text-green-100 hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="/" className="text-green-100 hover:text-green-600">
              <FaInstagram />
            </a>
            <a href="/" className="text-green-100 hover:text-green-600">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-100 border-t pt-4">
        @copyright by Debabrata Das | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
