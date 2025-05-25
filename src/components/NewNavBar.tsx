"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function NewNavBar() {
  const nameLogo = "<clive_limo/>";

  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  return (
    <div className="flex flex-col bg-white">
      {/* Desktop Navigation */}
      <div className="mx-auto my-8 hidden w-full max-w-screen-2xl rounded-[100px] bg-black px-0 py-4 lg:flex">
        <ul className="m-2 flex w-full flex-row gap-2 text-sm font-semibold">
          <li className="my-auto">
            <Link
              className={clsx(
                "rounded-full px-6 py-4 font-lufga text-base text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg",
                pathName === "/"
                  ? "bg-accentOrange font-bold"
                  : "bg-none font-normal"
              )}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-6 py-4 font-lufga text-base font-normal text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg"
              href="#about"
            >
              About
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-6 py-4 font-lufga text-base font-normal text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg"
              href="#work"
            >
              Work
            </Link>
          </li>
          <h1 className="mx-auto font-poppins text-xl font-bold text-white xl:text-2xl">
            {nameLogo}
          </h1>
          <li className="my-auto">
            <Link
              className="rounded-full px-6 py-4 font-lufga text-base font-normal text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg"
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-6 py-4 font-lufga text-base font-normal text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg"
              href="#skills"
            >
              Skills
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-6 py-4 font-lufga text-base font-normal text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg"
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div className="flex w-full flex-col px-4 py-3 sm:px-6 sm:py-4 lg:hidden">
        {/* Mobile Header */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-poppins text-lg font-bold text-black sm:text-xl">
            {nameLogo}
          </h1>
          <button
            type="submit"
            className="rounded-md p-2 transition-colors hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <AiOutlineMenu className="text-3xl text-black sm:text-4xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "overflow-hidden transition-all duration-300 ease-in-out",
            menuOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col gap-1 rounded-2xl bg-black p-4 sm:gap-2 sm:p-6">
            <li className="w-full">
              <Link
                className={clsx(
                  "block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base",
                  pathName === "/"
                    ? "bg-accentOrange font-bold"
                    : "bg-transparent font-normal"
                )}
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={clsx(
                  "block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base",
                  pathName === "/#about"
                    ? "bg-accentOrange font-bold"
                    : "bg-transparent font-normal"
                )}
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={clsx(
                  "block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base",
                  pathName === "/#work"
                    ? "bg-accentOrange font-bold"
                    : "bg-transparent font-normal"
                )}
                href="#work"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={clsx(
                  "block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base",
                  pathName === "/#projects"
                    ? "bg-accentOrange font-bold"
                    : "bg-transparent font-normal"
                )}
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={clsx(
                  "block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base",
                  pathName === "/#skills"
                    ? "bg-accentOrange font-bold"
                    : "bg-transparent font-normal"
                )}
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={clsx(
                  "block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base",
                  pathName === "/#contact"
                    ? "bg-accentOrange font-bold"
                    : "bg-transparent font-normal"
                )}
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
