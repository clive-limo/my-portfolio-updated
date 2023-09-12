import Link from 'next/link';
import { RxExternalLink } from 'react-icons/rx';

interface IProjectCardProps {
  title: string;
  description: string;
  url: string;
  complete: boolean;
}

export default function ProjectsCard({
  title,
  description,
  url,
  complete,
}: IProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-primaryLight md:h-56">
      <div className="flex flex-col px-6 pt-6 md:px-10 md:pt-10">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="text-sm font-normal text-zinc-500 md:text-lg">
          {description}
        </p>
      </div>
      <div className="flex h-full w-full flex-row px-5 py-2 md:px-10">
        <div className="my-auto flex flex-col gap-1 md:flex-row md:gap-2">
          <p className="rounded-lg bg-gradient-to-r from-accentBlue to-accentGreen p-2 text-sm font-bold">
            NextJS
          </p>
          <p className="rounded-lg bg-gradient-to-r from-accentBlue to-accentGreen p-2 text-sm font-bold">
            Tailwind
          </p>
          {title === 'My Portfolio' ? (
            <p className="rounded-lg bg-gradient-to-r from-accentBlue to-accentGreen p-2 text-sm font-bold">
              GraphCMS
            </p>
          ) : (
            <p className="h-0 w-0" />
          )}
          {title === 'Not Reddit' || title === 'Service Delivery Tracking' ? (
            <p className="rounded-lg bg-gradient-to-r from-accentBlue to-accentGreen p-2 text-sm font-bold">
              MongoDB
            </p>
          ) : (
            <span className="h-0 w-0" />
          )}
          {title === 'Service Delivery Tracking' ? (
            <p className="rounded-lg bg-gradient-to-r from-accentBlue to-accentGreen p-2 text-sm font-bold">
              Firebase
            </p>
          ) : (
            <span className="h-0 w-0" />
          )}
        </div>
        {complete ? (
          <Link
            target="_blank"
            href={url}
            className="group my-auto flex h-full w-full flex-row justify-end"
            rel="noopener noreferer"
          >
            <p className="my-auto text-sm font-bold group-hover:scale-105 group-hover:text-accentGreen">
              Visit
            </p>{' '}
            <RxExternalLink className="my-auto text-2xl font-bold group-hover:scale-105 group-hover:text-accentGreen" />
          </Link>
        ) : (
          <div className="flex h-full w-full flex-row justify-end">
            <p className="my-auto rounded-lg border-[1px] border-zinc-400 p-2 text-sm font-bold hover:bg-accentGreen/30">
              Coming Soon
            </p>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
