import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full" id="about">
      <h1 className="pt-16 text-5xl font-extrabold text-white">About</h1>
      <div className="flex flex-col md:flex-row">
        <p className="mt-10 w-full text-lg text-zinc-500">
          My journey in the world of software development began with a strong
          curiosity and a desire to know how websites and different software
          work. Over the years, I have honed my skills in both frontend and
          backend development, allowing me to tackle a wide range of challenges
          and deliver comprehensive solutions. As a technology enthusiast, I am
          committed to staying at the forefront of the industry, continuously
          learning and adapting to new tools and techniques to ensure I can
          provide the best solutions to meet the evolving needs of clients and
          users. <br />
          My technical expertise spans across the entire software development
          stack. On the frontend, I am proficient in modern JavaScript
          frameworks such as React, Angular, and Vue, enabling me to build
          intuitive and responsive user interfaces. I have a keen eye for design
          and collaborate seamlessly with UI/UX teams to ensure the perfect
          blend of aesthetics and functionality. When it comes to the backend, I
          have experience with a variety of languages and frameworks including
          Python, Node.js, and Ruby. I am well-versed in database systems like
          MySQL, PostgreSQL, and MongoDB, allowing me to create robust and
          scalable backend solutions for data management, authentication, and
          communication.
        </p>
        <div className="invisible mx-10 my-auto h-0 w-0 p-10 md:visible md:relative md:min-h-[300px] md:min-w-[300px]">
          <Image
            src="/assets/images/about.svg"
            alt="stick man doodle"
            layout="fill"
            objectFit="contain"
            height={0}
            width={0}
          />
        </div>
      </div>
    </section>
  );
}
