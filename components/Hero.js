"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/herocard";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuyNowClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <BackgroundBeamsWithCollision>
      {/* Header Section */}
      <section className="relative flex flex-col items-center mt-20 text-center">
        <h2
          className={`text-3xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white font-sans tracking-tight relative ${
            isOpen ? "z-0" : "z-20"
          }`}
        >
          Connect Directly to Farmers
        </h2>
        <div className="relative mt-4 inline-block w-max">
          <div className="absolute top-0 left-0 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-700 text-transparent text-2xl md:text-6xl font-bold">
            Fresh, <span className="text-yellow-600">Organic,</span> Delivered!
          </div>
          <div className="relative bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-700 text-transparent text-2xl md:text-6xl font-bold">
            Fresh, <span className="text-yellow-500">Organic,</span> Delivered!
          </div>
        </div>
        {/* Order Button */}
        <button
          onClick={handleBuyNowClick}
          className="mt-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-yellow-500 hover:to-yellow-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Order Now
        </button>
      </section>

      {/* Modal Section */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8">
            <h2
              id="modal-title"
              className="text-2xl font-semibold text-gray-800 mb-6 text-center"
            >
              Register Form
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="shop-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shop Name
                </label>
                <input
                  id="shop-name"
                  type="text"
                  placeholder="Enter your shop name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number
                </label>
                <input
                  id="number"
                  type="number"
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 focus:ring focus:ring-green-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:ring focus:ring-red-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </BackgroundBeamsWithCollision>
  );
}
