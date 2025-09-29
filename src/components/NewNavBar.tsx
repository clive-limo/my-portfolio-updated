"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

import { useDarkMode } from "@/hooks/useDarkMode";

export default function NewNavBar() {
  const nameLogo = "<clive_limo/>";

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const darkMode = useDarkMode();

  // Navigation items
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", href: "#home" },
      { id: "about", label: "About", href: "#about" },
      { id: "work", label: "Work", href: "#work" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    []
  );

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    let targetElement;
    if (targetId === "home") {
      // Scroll to top for home
      targetElement = document.documentElement;
    } else {
      targetElement = document.getElementById(targetId);
    }

    if (targetElement) {
      const navbarHeight = 100;
      const targetPosition =
        targetId === "home" ? 0 : targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL
      window.history.pushState(
        {},
        "",
        targetId === "home" ? "/" : `#${targetId}`
      );
      setActiveSection(targetId);
    }

    // Close mobile menu
    setMenuOpen(false);
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);

            // Update URL without triggering scroll
            const newUrl = sectionId === "home" ? "/" : `#${sectionId}`;
            if (window.location.pathname + window.location.hash !== newUrl) {
              window.history.replaceState({}, "", newUrl);
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 30% of section is visible
        rootMargin: "-100px 0px -100px 0px", // Account for navbar height
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  const isActive = (itemId: string) => {
    return activeSection === itemId;
  };

  return (
    <div className="relative flex flex-col bg-white">
      {/* Desktop Navigation */}
      <div className="mx-auto my-8 hidden w-full max-w-screen-2xl border-collapse rounded-[100px] border bg-black p-2 dark:border-offwhite/50 lg:fixed lg:left-1/2 lg:top-0 lg:z-50 lg:mx-0 lg:my-2 lg:block lg:-translate-x-1/2">
        <ul className="flex w-full flex-row gap-2 text-sm font-semibold">
          {navItems.slice(0, 3).map((item) => (
            <li key={item.id} className="my-auto">
              <button
                type="button"
                className={`rounded-full px-6 py-4 font-lufga text-base text-white transition-all duration-500 hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg ${
                  isActive(item.id)
                    ? "bg-accentOrange font-bold"
                    : "bg-none font-normal"
                }`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}

          <div className="mx-auto flex flex-row items-center px-4">
            {/* <h1 className=" font-poppins text-xl font-bold text-white xl:text-2xl">
              {nameLogo}
            </h1> */}

            <Image
              src="/assets/images/logo.png"
              height={50}
              width={50}
              className="object-contain"
              alt="clive limo logo"
            />
          </div>

          {navItems.slice(3).map((item) => (
            <li key={item.id} className="my-auto">
              <button
                type="button"
                className={`rounded-full px-6 py-4 font-lufga text-base text-white transition-colors hover:bg-primaryLight xl:px-10 xl:py-5 xl:text-lg ${
                  isActive(item.id)
                    ? "bg-accentOrange font-bold"
                    : "bg-none font-normal"
                }`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="absolute -bottom-5 right-1 rounded-full border border-offwhite/50 bg-black  p-3 text-white"
          onClick={darkMode.toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {darkMode.isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div className="flex w-full flex-col px-4 py-3 sm:px-6 sm:py-4 lg:hidden">
        {/* Mobile Header */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-poppins text-lg font-bold text-black sm:text-xl">
            {nameLogo}
          </h1>
          <button
            type="button"
            className="rounded-md p-2 transition-colors hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="size-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 rounded-2xl bg-black p-4 sm:gap-2 sm:p-6">
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  type="button"
                  className={`block w-full rounded-lg px-4 py-3 text-center font-lufga text-sm text-white transition-colors hover:bg-primaryLight sm:px-6 sm:py-4 sm:text-base ${
                    isActive(item.id)
                      ? "bg-accentOrange font-bold"
                      : "bg-transparent font-normal"
                  }`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
