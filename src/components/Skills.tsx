import Image from "next/image";
import React from "react";
import { FaDocker, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const Skills = () => {
  return (
    <section
      className="relative my-16 flex w-full flex-col overflow-hidden rounded-[100px] bg-secondaryLight"
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
          <h1 className="py-8 text-left font-lufga text-4xl font-semibold text-textLight md:py-16 md:text-[48px]">
            What I&apos;m <span className="text-accentOrange">Great</span> at
          </h1>
          <p className="font-lufga text-sm  font-light text-textLight/80 md:text-lg">
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
          <div className="my-16 flex flex-row flex-wrap justify-between gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-left font-lufga text-2xl font-semibold text-textLight md:text-[32px]">
                Frontend
              </h2>
              <div className="flex flex-row gap-4">
                <FaReact
                  size={42}
                  className="text-primaryDark/50 transition-colors hover:text-accentOrange"
                />
                <FaVuejs
                  size={42}
                  className="text-primaryDark/50 transition-colors hover:text-accentOrange"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-left font-lufga text-2xl font-semibold text-textLight md:text-[32px]">
                Backend
              </h2>
              <div className="flex flex-row gap-4">
                <FaNodeJs
                  size={42}
                  className="text-primaryDark/50 transition-colors hover:text-accentOrange"
                />
                <FaDocker
                  size={42}
                  className="text-primaryDark/50 transition-colors hover:text-accentOrange"
                />
                <SiMongodb
                  size={42}
                  className="text-primaryDark/50 transition-colors hover:text-accentOrange"
                />
                {/* <FaDjango size={42} /> */}
                {/* <FaLaravel size={42} /> */}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-left font-lufga text-2xl font-semibold text-textLight md:text-[32px]">
                Native
              </h2>
              <div className="flex flex-row gap-4">
                {/* react native logo */}
                <div className="h-12 w-20">
                  <FaReact
                    size={38}
                    className="mx-auto text-primaryDark/50 transition-colors hover:text-accentOrange"
                  />
                  <p className="text-center text-xs font-semibold text-textLight/60">
                    React Native
                  </p>
                </div>
                {/* <FaFlutter size={42} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
