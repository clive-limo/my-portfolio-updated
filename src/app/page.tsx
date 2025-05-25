// eslint-disable-next-line import/no-extraneous-dependencies
import Image from "next/image";

import About from "@/components/About";
import { ContatctMe } from "@/components/ContatctMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import WorkRed from "@/components/WorkRed";
import { Main } from "@/templates/Main";

export default function Home() {
  return (
    <Main>
      {/* Responsive web home page */}
      <section className="z-0 w-full bg-white px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-screen-xl">
          <div className="relative py-8 sm:py-12 lg:py-5">
            {/* Decorative strokes - hidden on mobile */}
            <Image
              src="/assets/images/strokes.svg"
              alt="clive animation"
              height={36}
              width={36}
              className="absolute -top-1 right-4 hidden rotate-12 lg:block xl:right-[540px]"
            />

            {/* Hello badge */}
            <h2 className="sm:text-md mx-auto mb-4 w-fit rounded-full border-2 border-black px-3 py-1.5 font-lufga text-sm text-black sm:mb-6 sm:px-4 sm:py-2">
              Hello!
            </h2>

            {/* Main heading */}
            <h1 className="mx-auto text-center font-lufga text-4xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]">
              I&apos;m <span className="text-accentOrange">Clive</span>,
              <br className="hidden sm:inline" />{" "}
              <span className="block sm:inline">Full Stack Developer</span>
            </h1>

            {/* Bottom decorative stroke - hidden on mobile */}
            <Image
              src="/assets/images/strokes.svg"
              alt="clive animation"
              height={56}
              width={56}
              className="absolute bottom-0 left-4 hidden -rotate-[150deg] lg:block xl:left-[180px]"
            />
          </div>

          {/* Main content section */}
          <div className="mt-8 flex flex-col items-center justify-center gap-6 lg:mt-0 lg:flex-row lg:gap-8 xl:gap-5">
            {/* Description section */}
            <div className="order-2 flex flex-1 flex-col gap-3 lg:order-1 lg:gap-2">
              <Image
                src="/assets/images/quotes.svg"
                alt="clive animation"
                height={28}
                width={28}
                className="sm:size-9"
              />
              <p className="font-lufga text-sm font-light leading-relaxed text-textLight/80 sm:text-base lg:text-lg">
                Welcome to my portfolio! Here you&apos;ll find a collection of
                projects that reflect my journey as a full-stack developer.
                I&apos;m dedicated to building well-structured, efficient, and
                visually appealing web applications.
              </p>
            </div>

            {/* Profile image */}
            <div className="relative z-0 order-1 size-64 shrink-0 rounded-full bg-primaryDark/80 sm:size-80 md:size-96 lg:order-2 lg:size-[380px] xl:size-[445px]">
              <Image
                src="/assets/images/clive-portrait.png"
                alt="clive animation"
                fill
                className="rounded-b-full object-contain md:rounded-b-none"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 380px, 445px"
              />
            </div>

            {/* Experience section */}
            <div className="order-3 flex flex-1 flex-col items-center justify-center py-3 lg:order-3 lg:py-0">
              <Image
                src="/assets/images/stars.svg"
                alt="clive animation"
                height={20}
                width={80}
                className="mb-2 sm:h-6 sm:w-24 lg:h-6 lg:w-[100px]"
              />
              <p className="font-lufga text-2xl font-bold text-textLight sm:text-3xl lg:text-4xl">
                4+ Years
              </p>
              <p className="pb-5 font-lufga text-sm text-textLight sm:text-base">
                Experience
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* mobile home page */}
      {/* <PhoneHome /> */}
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
