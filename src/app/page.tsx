// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';

import About from '@/components/About';
import PhoneHome from '@/components/PhoneHome';
import Projects from '@/components/Projects';
import Work from '@/components/Work';
import { Main } from '@/templates/Main';

export default function Home() {
  return (
    <Main>
      <section className="invisible h-0 w-0 lg:visible lg:h-full lg:w-full">
        <h1 className="bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-text text-6xl font-extrabold text-transparent">
          Hi, I&apos;m Clive, I create digital solutions learning and growing
          with every line of code.
        </h1>
        <div className="mt-14 flex flex-row">
          <div className="my-auto mr-8 flex h-[155px] w-[155px] justify-center rounded-full bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-padding p-2">
            <p>image</p>
          </div>
          <div className="mr-20 max-w-[500px]">
            <h2 className="mt-10 text-3xl font-bold text-white">Profile</h2>
            <p className="mt-1 text-lg text-zinc-500">
              I am a versatile Full Stack Software Developer and UI/UX Designer
              with a passion for creating seamless digital experiences. With
              expertise in the MERN tech stack.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-2 mt-10 text-3xl font-bold text-white">
              Let&apos;s Connect
            </h2>
            <div className="flex flex-row gap-2">
              <IoMailOutline className="text-4xl" />
              <AiOutlineGithub className="text-4xl" />
              <AiOutlineLinkedin className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="mt-20 flex h-64 flex-row">
          <div className="my-auto">
            <h2 className="mb-2 text-3xl font-bold text-white">
              What I Am Great At
            </h2>
            <p className="mt-1 max-w-[600px] text-lg text-zinc-500">
              I excel at problem-solving and creative thinking, leveraging my
              skills to craft efficient and user-centric digital solutions that
              drive engagement and satisfaction.
            </p>
          </div>
          <div className="group mr-7 h-full w-64 rounded-2xl bg-primaryLight p-2 transition duration-150 ease-in-out hover:bg-accentBlue">
            <h3 className="mt-5 w-full text-center font-bold text-white group-hover:-translate-y-1.5">
              Web Development
            </h3>
            <p className=" py-3 text-center text-sm font-normal text-zinc-500 group-hover:invisible">
              I specialize in developing dynamic web applications using the
              latest technologies, ensuring seamless functionality and
              exceptional user experiences.
            </p>
          </div>
          <div className="group mr-7 h-full w-64 rounded-2xl bg-primaryLight transition duration-150 ease-in-out hover:bg-accentGreen">
            <h3 className="mt-5 w-full text-center font-bold text-white group-hover:-translate-y-1.5">
              UI/UX Design
            </h3>
          </div>
          <div className="mx-5 my-auto">
            <FiArrowRight className="text-4xl font-bold" />
          </div>
        </div>
      </section>
      <PhoneHome />
      <About />
      <Work />
      <Projects />
    </Main>
  );
}
