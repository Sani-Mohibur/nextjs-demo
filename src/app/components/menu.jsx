"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  let currentPath = usePathname();
  return (
    <div>
      <header className="bg-gray-400 backdrop-blur-md shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 text-gray-800">
          <div className="flex gap-40 items-center relative">
            <Link
              href="/"
              className={`hover:text-blue-900 hover:underline transition-all duration-200
                ${currentPath === "/" && "active-link"}`}
            >
              Home
            </Link>
            <Link
              href={{
                pathname: "/product",
                query: { id_1: "category", id_2: "brand" },
              }}
              className={`hover:text-blue-900 hover:underline transition-all duration-200
                ${currentPath === "/product" && "active-link"}`}
            >
              Product
            </Link>
            <Link
              href="/user"
              className={`hover:text-blue-900 hover:underline transition-all duration-200
                ${currentPath === "/user" && "active-link"}`}
            >
              User
            </Link>
            <Link
              href="/about"
              className={`hover:text-blue-900 hover:underline transition-all duration-200
                ${currentPath === "/about" && "active-link"}`}
            >
              About
            </Link>
          </div>
          <Link
            href={{
              pathname: "/profile",
              query: { name: "Sani", designation: "Full Stack Developer" },
            }}
            className={`hover:text-blue-900 hover:underline transition-all duration-200 hover:font-semibold
              ${currentPath === "/profile" && "active-link"}`}
          >
            Profile
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Menu;
