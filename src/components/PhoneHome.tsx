import Image from 'next/image';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { IoMailOutline } from 'react-icons/io5';

export default function PhoneHome() {
  return (
    <section className="visible w-full md:hidden md:w-0">
      <div className="relative mx-auto flex h-[155px] w-[155px] justify-center rounded-full bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-padding">
        <div className="relative z-0 m-auto h-[145px] w-[145px] overflow-hidden rounded-full bg-primaryDark/80">
          <Image
            src="/assets/images/clive-portrait.png"
            alt="clive animation"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="mb-10 mt-5 flex w-full flex-row justify-center gap-2">
        <a href="mailto:limoclive01@gmail.com">
          <IoMailOutline className="text-4xl hover:text-accentBlue hover:ease-in-out" />
        </a>
        <a target="_blank" rel="noopener" href="https://github.com/clive-limo">
          <AiOutlineGithub className="text-4xl hover:text-accentBlue hover:ease-in-out" />{' '}
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/clive-limo-66aa881a3/"
        >
          <AiOutlineLinkedin className="text-4xl hover:text-accentBlue hover:ease-in-out" />
        </a>
      </div>
      <h1 className="bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-text text-center text-3xl font-extrabold leading-relaxed text-transparent md:text-4xl">
        Hi, I&apos;m Clive, I create digital solutions learning and growing with
        every line of code.
      </h1>
      <div className="w-full">
        <h2 className="mt-10 text-center text-3xl font-bold text-white">
          Profile
        </h2>
        <p className="mt-1 text-center text-lg text-zinc-500">
          I am a versatile Full Stack Software Developer and UI/UX Designer with
          a passion for creating seamless digital experiences. With expertise in
          the MERN tech stack.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="my-auto">
          <h2 className="mt-3 text-center text-3xl font-bold text-white">
            What I Am Great At
          </h2>
          <p className="mt-1 max-w-[600px] text-center text-lg text-zinc-500">
            I excel at problem-solving and creative thinking, leveraging my
            skills to craft efficient and user-centric digital solutions that
            drive engagement and satisfaction.
          </p>
        </div>
        <div className="mt-2 w-full rounded-2xl bg-primaryLight p-2">
          <h3 className="mt-5 w-full text-center font-bold text-white">
            Web Development
          </h3>
          <p className=" py-3 text-center text-sm font-normal text-zinc-500">
            I specialize in developing dynamic web applications using the latest
            technologies, ensuring seamless functionality and exceptional user
            experiences.
          </p>
        </div>
        <div className="mt-2 w-full rounded-2xl bg-primaryLight">
          <h3 className="mt-5 w-full text-center font-bold text-white">
            UI/UX Design
          </h3>
          <p className=" py-3 text-center text-sm font-normal text-zinc-500">
            I am also well versed in crafting intuitive and visually captivating
            user interfaces, enhancing user journeys through thoughtful design
            and usability principles.
          </p>
        </div>
      </div>
    </section>
  );
}
