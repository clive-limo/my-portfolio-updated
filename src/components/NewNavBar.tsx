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
      {/* desktop nav */}
      <div className="invisible  m-0 flex w-0 flex-row lg:visible lg:mx-auto lg:my-8 lg:w-full lg:max-w-screen-2xl lg:rounded-[100px] lg:bg-black lg:px-0 lg:py-4">
        <ul className="m-2 flex size-full flex-row gap-2 text-sm font-semibold">
          <li className="my-auto">
            <Link
              className={clsx(
                "rounded-full px-10 py-5 font-lufga text-lg text-white hover:bg-primaryLight",
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
              className="rounded-full px-10 py-5 font-lufga text-lg font-normal text-white hover:bg-primaryLight"
              href="#about"
            >
              About
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-10 py-5 font-lufga text-lg font-normal text-white hover:bg-primaryLight"
              href="#work"
            >
              Work
            </Link>
          </li>
          <h1 className="mx-auto font-poppins text-2xl font-bold">
            {nameLogo}
          </h1>
          <li className="my-auto">
            <Link
              className="rounded-full px-10 py-5 font-lufga text-lg font-normal text-white hover:bg-primaryLight"
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-10 py-5 font-lufga text-lg font-normal text-white hover:bg-primaryLight"
              href="#skills"
            >
              Skills
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-full px-10 py-5 font-lufga text-lg font-normal text-white hover:bg-primaryLight"
              href="#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* mobile nav */}
      <div className="visible my-3 flex w-full flex-col lg:invisible lg:m-0 lg:size-0">
        <div className="flex flex-row">
          <h1 className="font-poppins text-lg font-bold">{nameLogo}</h1>
          <div className="flex w-full justify-end">
            <AiOutlineMenu
              className="p-2 text-5xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
        <ul
          className={clsx(
            "z-10 flex flex-col justify-center gap-2 text-sm font-semibold",
            menuOpen ? "visible size-full" : "invisible size-0"
          )}
        >
          <li className="my-auto flex justify-center">
            <Link
              className={clsx(
                "rounded-md p-3 text-white hover:bg-primaryLight",
                pathName === "/" ? "bg-primaryLight" : "bg-none"
              )}
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Home
            </Link>
          </li>
          <li className="my-auto flex justify-center">
            <Link
              className={clsx(
                "rounded-md p-3 text-white hover:bg-primaryLight",
                pathName === "/#about" ? "bg-primaryLight" : "bg-none"
              )}
              href="#about"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About
            </Link>
          </li>
          <li className="my-auto flex justify-center">
            <Link
              className={clsx(
                "rounded-md p-3 text-white hover:bg-primaryLight",
                pathName === "/#work" ? "bg-primaryLight" : "bg-none"
              )}
              href="#work"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Work
            </Link>
          </li>
          <li className="my-auto flex justify-center">
            <Link
              className={clsx(
                "rounded-md p-3 text-white hover:bg-primaryLight",
                pathName === "/#projects" ? "bg-primaryLight" : "bg-none"
              )}
              href="#projects"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
