// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';

import About from '@/components/About';
import Footer from '@/components/Footer';
import PhoneHome from '@/components/PhoneHome';
import Projects from '@/components/Projects';
import Work from '@/components/Work';
import { Main } from '@/templates/Main';

export default function Home() {
  return (
    <Main>
      <section className="invisible z-0 h-0 w-0 md:visible md:h-full md:w-full lg:visible lg:h-full lg:w-full">
        <h1 className="bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-text text-6xl font-extrabold text-transparent">
          Hi, I&apos;m Clive, I create digital solutions learning and growing
          with every line of code.
        </h1>
        <div className="mt-14 flex flex-row">
          <div className="my-auto mr-8 flex h-[155px] w-[155px] justify-center rounded-full bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-padding">
            <div className="relative z-0 m-auto h-[145px] w-[145px] overflow-hidden rounded-full bg-primaryDark/80">
              <Image
                src="/assets/images/clive-portrait.png"
                alt="clive animation"
                layout="fill"
                objectFit="contain"
                height={0}
                width={0}
              />
            </div>
          </div>
          <div className="mr-20 max-w-[500px]">
            <h2 className="mt-10 text-3xl font-bold text-white">Profile</h2>
            <p className="mt-1 text-lg text-zinc-500">
              I am a versatile{' '}
              <span className="text-accentBlue">
                Full-Stack Software Developer
              </span>{' '}
              and <span className="text-accentGreen">UI/UX Designer</span>
              with a passion for creating seamless digital experiences. With
              expertise in the <span className="text-accentBlue">
                MERN
              </span>{' '}
              tech stack.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-2 mt-10 text-3xl font-bold text-white">
              Let&apos;s Connect
            </h2>
            <div className="flex flex-row gap-2">
              <a href="mailto:limoclive01@gmail.com">
                <IoMailOutline className="text-4xl hover:scale-110  hover:text-accentBlue hover:ease-in-out" />
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/clive-limo"
              >
                <AiOutlineGithub className="text-4xl hover:scale-110  hover:text-accentBlue hover:ease-in-out" />
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/clive-limo-66aa881a3/"
              >
                <AiOutlineLinkedin className="text-4xl hover:scale-110  hover:text-accentBlue hover:ease-in-out" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex h-64 flex-row">
          <div className="my-auto">
            <h2 className="mb-2 text-3xl font-bold text-white">
              What I Am{' '}
              <span className="bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-text text-transparent">
                Great
              </span>{' '}
              At
            </h2>
            <p className="mt-1 max-w-[600px] text-lg text-zinc-500 md:mr-5 lg:pr-7">
              I excel at problem-solving and creative thinking, leveraging my
              skills to craft efficient and user-centric digital solutions that
              drive engagement and satisfaction.
            </p>
          </div>
          <div className="mr-7 h-full w-64 overflow-hidden rounded-2xl bg-primaryLight hover:shadow-xl hover:shadow-accentBlue/30">
            <h3 className="mt-10 w-full text-center font-bold text-white">
              Web Development
            </h3>
            <p className=" py-3 text-center text-sm font-normal text-zinc-500">
              I specialize in developing dynamic web applications using the
              latest technologies, ensuring seamless functionality and
              exceptional user experiences.
            </p>
          </div>
          <div className=" mr-7 h-full w-64 rounded-2xl bg-primaryLight p-2 hover:shadow-xl hover:shadow-accentBlue/30">
            <h3 className="mt-8 w-full text-center font-bold text-white">
              UI/UX Design
            </h3>
            <p className=" py-3 text-center text-sm font-normal text-zinc-500">
              My expertise lies in crafting intuitive and visually captivating
              user interfaces, enhancing user journeys through thoughtful design
              and usability principles.
            </p>
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
      <Footer />
    </Main>
  );
}
