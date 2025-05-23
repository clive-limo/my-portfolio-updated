// eslint-disable-next-line import/no-extraneous-dependencies
import Image from "next/image";

import About from "@/components/About";
import { ContatctMe } from "@/components/ContatctMe";
import Footer from "@/components/Footer";
import PhoneHome from "@/components/PhoneHome";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import WorkRed from "@/components/WorkRed";
import { Main } from "@/templates/Main";

export default function Home() {
  return (
    <Main>
      {/* web home page */}
      <section className="invisible z-0 size-0 flex-row md:visible md:size-full lg:visible lg:size-full lg:bg-white">
        <section className="mx-auto max-w-screen-xl">
          <div className="relative py-5">
            <Image
              src="/assets/images/strokes.svg"
              alt="clive animation"
              height={36}
              width={36}
              className="absolute -top-1 right-[540px] rotate-12"
            />
            <h2 className="text-md mx-auto w-fit rounded-full border-2 border-black px-4 py-2 font-lufga text-black">
              Hello!
            </h2>
            <h1 className="mx-auto text-center font-lufga text-[80px] font-semibold text-black">
              I&apos;m <span className="text-accentOrange">Clive</span>, <br />{" "}
              Full Stack Developer
            </h1>
            <Image
              src="/assets/images/strokes.svg"
              alt="clive animation"
              height={56}
              width={56}
              className="absolute bottom-0 left-[180px] -rotate-[150deg]"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            {/* short description here */}
            <div className="flex flex-1 flex-col gap-2">
              <Image
                src="/assets/images/quotes.svg"
                alt="clive animation"
                height={36}
                width={36}
              />
              <p className="text-md font-lufga font-light text-textLight">
                Welcome to my portfolio! Here you&apos;ll find a collection of
                projects that reflect my journey as a full-stack developer.
                I&apos;m dedicated to building well-structured, efficient, and
                visually appealing web applications.
              </p>
            </div>
            {/* profile image */}
            <div className="relative z-0 m-auto size-[445px] shrink-0 rounded-full  bg-primaryDark/80">
              <Image
                src="/assets/images/clive-portrait.png"
                alt="clive animation"
                layout="fill"
                objectFit="contain"
                height={0}
                width={0}
              />
            </div>
            {/* exprerience */}
            <div className="mb-2 flex flex-1 flex-col items-center justify-center">
              <Image
                src="/assets/images/stars.svg"
                alt="clive animation"
                height={24}
                width={100}
              />
              <p className="font-lufga text-4xl font-bold text-textLight">
                4+ Years
              </p>
              <p className="text-textLight">Experience</p>
            </div>
          </div>
        </section>
      </section>
      {/* mobile home page */}
      <PhoneHome />
      {/* <Services /> */}
      <About />
      <WorkRed />
      <Skills />
      <Projects />
      <ContatctMe />
      <Footer />
    </Main>
  );
}
