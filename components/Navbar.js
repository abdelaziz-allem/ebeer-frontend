"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For determining the current route
import Logo from "@/components/images/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Utility function to determine active link
  const isActive = (path) => pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-20 py-3 z-50 backdrop-blur-md bg-white bg-opacity-90 shadow">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image alt="logo" width={60} height={60} src={Logo} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
        <Link
          href="/"
          className={`hover:text-green-500 transition duration-300 ${
            isActive("/") ? "text-green-500 font-bold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/training"
          className={`hover:text-green-500 transition duration-300 ${
            isActive("/Training") ? "text-green-500 font-bold" : ""
          }`}
        >
          Tababar
        </Link>
        <Link
          href="/investment"
          className={`hover:text-green-500 transition duration-300 ${
            isActive("/Investment") ? "text-green-500 font-bold" : ""
          }`}
        >
          Deeq
        </Link>
      </div>

      {/* Register Button */}
      <div className="hidden md:block">
        <Link href="/register">
          <button className="bg-green-500 hover:bg-yellow-500 text-white px-4 py-2 rounded transition duration-300">
            Register
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4">
          <div className="flex flex-col space-y-4 text-center text-gray-800 font-medium">
            <Link
              href="/"
              className={`hover:text-green-500 transition duration-300 ${
                isActive("/") ? "text-green-500 font-bold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/training"
              className={`hover:text-green-500 transition duration-300 ${
                isActive("/Training") ? "text-green-500 font-bold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              href="/investment"
              className={`hover:text-green-500 transition duration-300 ${
                isActive("/Investment") ? "text-green-500 font-bold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Investment
            </Link>
            <Link href="/register">
              <button
                className="bg-green-500 hover:bg-yellow-500 text-white px-4 py-2 rounded  transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
