"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const nameLogo = "<clive_limo/>";

  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="sticky top-0 z-10 my-4 flex w-full flex-col bg-primaryDark">
      <div className="invisible m-0 flex w-0 flex-row lg:visible lg:my-4 lg:w-full">
        <h1 className="font-poppins text-2xl font-bold">{nameLogo}</h1>
        <ul className="flex size-full flex-row justify-end gap-16 text-sm font-semibold">
          <li className="my-auto">
            <Link
              className="rounded-md p-3 text-white hover:bg-primaryLight"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-md p-3 text-white hover:bg-primaryLight"
              href="#about"
            >
              About
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-md p-3 text-white hover:bg-primaryLight"
              href="#work"
            >
              Work
            </Link>
          </li>
          <li className="my-auto">
            <Link
              className="rounded-md p-3 text-white hover:bg-primaryLight"
              href="#projects"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="visible my-3 flex w-full flex-col lg:invisible lg:m-0 lg:size-0">
        <div className="flex flex-row">
          <h1 className="font-poppins text-xl font-bold">{nameLogo}</h1>
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
      <span className="my-2 h-[.5px] w-full bg-zinc-600" />
    </nav>
  );
}
