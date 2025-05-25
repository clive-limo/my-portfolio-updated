import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative mt-8 w-full overflow-hidden rounded-[100px] bg-primaryDark pt-20 md:mt-0"
      id="about"
    >
      {/* overlay image */}
      <Image
        src="/assets/images/popcorn.svg"
        alt="background overlay"
        layout="responsive"
        width={400}
        height={400}
        className="absolute z-10 hidden md:block"
      />
      {/* about content */}
      <div className="relative z-20 mx-auto w-full max-w-screen-xl flex-row">
        <div className="flex flex-row justify-between ">
          <h1 className="px-2 text-left font-lufga text-4xl  font-semibold text-white md:text-[48px]">
            About <span className="text-accentOrange">Me</span>
          </h1>
          {/* <p>Hello there</p> */}
        </div>
        <div className="flex flex-1 flex-col gap-2 px-2 pt-5 md:px-0 md:pt-10">
          <Image
            src="/assets/images/quotes.svg"
            alt="clive animation"
            height={36}
            width={36}
            className="invert"
          />
          <p className="mt-3 w-full font-lufga text-sm font-thin md:text-lg">
            My journey in the world of software development began with a strong
            curiosity and a desire to know how websites and different software
            work. Over the years, I have honed my skills in both frontend and
            backend development, allowing me to tackle a wide range of
            challenges and deliver comprehensive solutions. As a technology
            enthusiast, I am committed to staying at the forefront of the
            industry, continuously learning and adapting to new tools and
            techniques to ensure I can provide the best solutions to meet the
            evolving needs of clients and users. <br />
            My technical expertise spans across the entire software development
            stack. On the frontend, I am proficient in modern JavaScript
            frameworks such as React, Angular, and Vue, enabling me to build
            intuitive and responsive user interfaces. I have a keen eye for
            design and collaborate seamlessly with UI/UX teams to ensure the
            perfect blend of aesthetics and functionality. When it comes to the
            backend, I have experience with a variety of languages and
            frameworks including Python, Node.js, and NextJS. I am also
            well-versed in database systems like MySQL, PostgreSQL, and MongoDB,
            allowing me to create robust and scalable backend solutions for data
            management, authentication, and communication.
          </p>
          <Image
            src="/assets/images/quotes.svg"
            alt="clive animation"
            height={36}
            width={36}
            className="ml-auto invert"
          />
        </div>
        <div className="">
          <Image
            src="/assets/images/clive-portrait.png"
            alt="about profile image"
            height={200}
            width={200}
          />
        </div>
      </div>
    </section>
  );
}
