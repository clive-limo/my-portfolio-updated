"use client";

import React, { useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

export const ContatctMe = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <section className="my-16 flex w-full flex-col" id="contact">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="py-8 text-center font-lufga text-4xl font-semibold text-textLight md:py-16 md:text-[56px]">
          Have an Awesome Project <br />
          Idea? <span className="text-accentOrange">Let&apos;s Discuss</span>
        </h1>

        <div className="mx-auto flex w-full max-w-screen-lg flex-row rounded-full border border-black/10 p-2">
          {/* email icon */}
          <div className="flex items-center rounded-full bg-accentOrange/20 p-3">
            <IoMailOutline
              className="p-2 text-6xl text-accentOrange"
              size={42}
            />
          </div>
          {/* email input */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full px-4 py-2 font-lufga text-textLight outline-none"
          />
          {/* send button */}
          <button
            type="submit"
            className="rounded-full bg-accentOrange px-6 py-2 font-lufga font-semibold text-white transition-colors hover:bg-accentOrange/80 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>

        {/* Quick email templates */}
        <div className="mt-6 flex flex-col items-center">
          <p className="mb-3 text-center font-lufga text-sm text-black/60">
            Or send a quick message:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="submit"
              className="rounded-full border border-accentOrange px-4 py-2 font-lufga text-sm text-accentOrange transition-colors hover:bg-accentOrange hover:text-white"
            >
              Collaboration
            </button>
            <button
              type="submit"
              className="rounded-full border border-accentOrange px-4 py-2 font-lufga text-sm text-accentOrange transition-colors hover:bg-accentOrange hover:text-white"
            >
              Freelance Work
            </button>
            <button
              type="submit"
              className="rounded-full border border-accentOrange px-4 py-2 font-lufga text-sm text-accentOrange transition-colors hover:bg-accentOrange hover:text-white"
            >
              General Inquiry
            </button>
          </div>
        </div>

        <div className="my-3 flex flex-row items-center justify-center gap-5">
          <a href="mailto:limoclive01@gmail.com">
            <IoMailOutline className="text-4xl text-black/60 transition-all duration-200 hover:scale-110 hover:rounded-full hover:bg-accentOrange/30 hover:p-1 hover:text-accentOrange hover:ease-in-out" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/clive-limo"
          >
            <AiOutlineGithub className="text-4xl text-black/60 transition-all duration-200 hover:scale-110 hover:rounded-full hover:bg-accentOrange/30 hover:p-1 hover:text-accentOrange hover:ease-in-out" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/clive-limo-66aa881a3/"
          >
            <AiOutlineLinkedin className="text-4xl text-black/60 transition-all duration-200 hover:scale-110 hover:rounded-full hover:bg-accentOrange/30 hover:p-1 hover:text-accentOrange hover:ease-in-out" />
          </a>
        </div>
      </div>
    </section>
  );
};
