"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/cards";
import { useState } from "react";

import Tomato from "@/components/images/tomato.png";
import Basal from "@/components/images/basal.png";
import Kaaro from "@/components/images/carrot.png";
import Baradho from "@/components/images/patato.png";
import Akhyaar from "@/components/images/akhyaar.png";
import Salad from "@/components/images/salad.png";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuyNowClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const cashCrops = [
    {
      title: "Tamaandho",
      description: "A staple crop grown worldwide for flour production.",
      src: Tomato,
    },
    {
      title: "Basal",
      description: "A key source of nutrition for billions globally.",
      src: Basal,
    },
    {
      title: "Kaaro",
      description: "Used for food, animal feed, and biofuel production.",
      src: Kaaro,
    },
    {
      title: "Baradho",
      description: "A high-value crop grown in tropical regions.",
      src: Baradho,
    },
    {
      title: "Salad",
      description: "Essential for chocolate production and exports.",
      src: Salad,
    },
    {
      title: "Akhyaar",
      description: "Widely grown for its fiber used in textiles.",
      src: Akhyaar,
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-2">
          Suuqa Khudaarta
        </h1>
        <div className="border-b-2 w-20 border-green-500 shadow-2xl shadow-green-600" />
      </div>

      {/* Cards Section */}
      <CardContainer className="inter-var grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8">
        {cashCrops.map((crop, index) => (
          <CardBody
            key={index}
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border"
          >
            <CardItem
              translateZ="50"
              className="text-lg font-bold text-neutral-600 dark:text-white"
            >
              {crop.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              {crop.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={crop.src}
                height="500"
                width="500"
                className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${crop.title} thumbnail`}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handleBuyNowClick}
                className="px-4 py-2 rounded-xl bg-green-500 dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Buy Now
              </button>
            </div>
          </CardBody>
        ))}
      </CardContainer>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 py-10"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-full mt-20 mb-2">
            <h2 id="modal-title" className="text-xl font-bold mb-4">
              Register Form
            </h2>
            <form>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="border p-2 mb-2 w-full"
              />

              <label htmlFor="email" className="block mb-1">
                Shop Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="shop name"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="email" className="block mb-1">
                Location
              </label>
              <input
                id="email"
                type="text"
                placeholder="location"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="email" className="block mb-1">
                Number
              </label>
              <input
                id="number"
                type="number"
                placeholder="Number"
                className="border p-2 mb-2 w-full"
              />
              <label htmlFor="email" className="block mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="border p-2 mb-2 w-full"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
