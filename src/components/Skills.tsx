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
      <div className="mx-auto flex w-full max-w-screen-xl flex-row">
        {/* skill image */}
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <Image
            src="/assets/images/clive-portrait-glasses.png"
            alt="about profile image"
            height={300}
            width={300}
            className="z-30"
          />
          <div className="absolute bottom-[162px] z-0 h-[200px] w-[300px] rounded-t-[80px] bg-accentOrange/80" />
        </div>
        {/* skills content */}
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="py-16 text-left font-lufga text-[56px] font-semibold text-textLight">
            What I&apos;m <span className="text-accentOrange">Great</span> at
          </h1>
          <p className="font-lufga text-lg font-light text-textLight/80">
            I have a deep understanding of the full web development stack, from
            backend to frontend. I am proficient in Node.js, Express, Next.js,
            React, Angular, Vue.js, Ruby on Rails, Django, Flask, and Laravel. I
            also have experience with native mobile app development, using React
            Native and Flutter. I am skilled in using a variety of databases
            such as MySQL, MongoDB, PostgreSQL, and Redis. I am also familiar
            with various OS and system administration.
          </p>
          <div className="my-16 flex flex-row justify-between gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-left font-lufga text-[32px] font-semibold text-textLight">
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
              <h2 className="text-left font-lufga text-[32px] font-semibold text-textLight">
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
              <h2 className="text-left font-lufga text-[32px] font-semibold text-textLight">
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
