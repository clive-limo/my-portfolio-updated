import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { IoMailOutline } from 'react-icons/io5';

export default function PhoneHome() {
  return (
    <section className="visible w-full md:hidden md:w-0">
      <div className="mx-auto flex h-[155px] w-[155px] justify-center rounded-full bg-gradient-to-tr from-accentGreen to-accentBlue bg-clip-padding p-2">
        <p>image</p>
      </div>
      <div className="mb-10 mt-5 flex w-full flex-row justify-center gap-2">
        <IoMailOutline className="text-4xl" />
        <AiOutlineGithub className="text-4xl" />
        <AiOutlineLinkedin className="text-4xl" />
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
      <div className="flex flex-col">
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
        <div className="group mt-2 w-full rounded-2xl bg-primaryLight p-2 transition duration-150 ease-in-out hover:bg-accentBlue">
          <h3 className="mt-5 w-full text-center font-bold text-white group-hover:-translate-y-1.5">
            Web Development
          </h3>
          <p className=" py-3 text-center text-sm font-normal text-zinc-500 group-hover:invisible">
            I specialize in developing dynamic web applications using the latest
            technologies, ensuring seamless functionality and exceptional user
            experiences.
          </p>
        </div>
        <div className="group mt-2 w-full rounded-2xl bg-primaryLight transition duration-150 ease-in-out hover:bg-accentGreen">
          <h3 className="mt-5 w-full text-center font-bold text-white group-hover:-translate-y-1.5">
            UI/UX Design
          </h3>
          <p className=" py-3 text-center text-sm font-normal text-zinc-500 group-hover:invisible">
            I am also well versed in crafting intuitive and visually captivating
            user interfaces, enhancing user journeys through thoughtful design
            and usability principles.
          </p>
        </div>
      </div>
    </section>
  );
}