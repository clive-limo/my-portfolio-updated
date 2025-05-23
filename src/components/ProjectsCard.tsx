import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

interface IProjectCardProps {
  title: string;
  description: string;
  url: string;
  complete: boolean;
  technologies: string[];
}

export default function ProjectsCard({
  title,
  description,
  url,
  complete,
  technologies,
}: IProjectCardProps) {
  return (
    <div className="relative flex flex-col rounded-[50px] bg-primaryLight">
      {/* description */}
      <div className="flex flex-col p-6 md:px-10 md:pt-10">
        <h2 className="font-lufga text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="font-lufga text-sm font-light text-white/60 md:text-lg">
          {description}
        </p>
      </div>
      {/* technologies */}
      <div className="flex size-full flex-row px-5 pb-6 md:px-10">
        <div className="no-scrollbar mt-auto flex gap-1 overflow-x-auto md:flex-row md:gap-2">
          {technologies.map((tech) => (
            <p
              key={`tech-${title}`}
              className="shrink-0 rounded-lg bg-gradient-to-r from-accentBlue to-accentGreen p-2 text-sm font-bold"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      {/* link */}
      {complete ? (
        <Link
          target="_blank"
          href={url}
          className="group absolute right-5 top-5 my-auto flex flex-row justify-end rounded-full border border-white p-3"
          rel="noopener noreferer"
        >
          <IoMdArrowForward className="my-auto text-2xl font-bold group-hover:scale-105 group-hover:text-accentGreen" />
        </Link>
      ) : (
        <div className="absolute right-5 top-5 flex flex-row ">
          <p className="my-auto rounded-3xl border border-zinc-400 p-2 text-sm font-bold hover:bg-accentGreen/30">
            Coming Soon
          </p>{" "}
        </div>
      )}
    </div>
  );
}
