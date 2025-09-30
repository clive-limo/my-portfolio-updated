import Image from "next/image";
import React from "react";
import {} from "react-icons/ri";

import SkillsShowcase from "./ui/SkillsDisplay";

export const Skills = () => {
  return (
    <section
      className="relative my-16 flex w-full flex-col overflow-hidden rounded-[100px] border border-white/0 bg-secondaryLight dark:border-offwhite/50 dark:bg-primaryDark"
      id="skills"
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-2 lg:flex-row">
        {/* skill image */}
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <Image
            src="/assets/images/clive-portrait-glasses.png"
            alt="about profile image"
            height={300}
            width={300}
            className="z-30 rounded-b-full border border-accentOrange/30 md:border-0 lg:rounded-b-none "
          />
          <div className="absolute bottom-[169px] z-0 h-[200px] w-[300px] rounded-t-[80px] bg-accentOrange/80" />
        </div>
        {/* skills content */}
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="py-8 text-left font-lufga text-4xl font-semibold text-textLight dark:text-offwhite md:py-16 md:text-[48px]">
            What I&apos;m <span className="text-accentOrange">Great</span> at
          </h1>
          <p className="font-lufga text-sm  font-light text-textLight/80 dark:text-offwhite/60 md:text-lg">
            I have expertise across the complete web development lifecycle.
            Proficient in Node.js and Express for backend development, React and
            Next.js for modern frontend applications, and Vue.js for
            component-based UIs. Experienced in mobile development using React
            Native and Flutter for cross-platform applications. Strong database
            experience including MySQL, PostgreSQL, MongoDB, and Redis for
            various data storage and caching needs. Skilled in system
            administration and AWS cloud architecture for scalable
            infrastructure design and deployment.
          </p>
          <SkillsShowcase />
        </div>
      </div>
    </section>
  );
};
