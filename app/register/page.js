import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-24">
        <h2 className="text-xl font-bold mb-4">Register Form</h2>
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
          <label htmlFor="shop-name" className="block mb-1">
            Shop Name
          </label>
          <input
            id="shop-name"
            type="text"
            placeholder="Shop Name"
            className="border p-2 mb-2 w-full"
          />
          <label htmlFor="location" className="block mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            className="border p-2 mb-2 w-full"
          />
          <label htmlFor="number" className="block mb-1">
            Number
          </label>
          <input
            id="number"
            type="number"
            placeholder="Number"
            className="border p-2 mb-2 w-full"
          />
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="border p-2 mb-4 w-full"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
