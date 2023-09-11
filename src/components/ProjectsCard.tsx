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
    <div className="flex flex-col rounded-2xl bg-primaryLight p-7">
      <div className="flex flex-col p-3">
        <h2 className="marker: text-3xl font-bold">{title}</h2>
        <p className="text-lg font-normal text-zinc-500">{description}</p>
      </div>
      <div className="mt-5 flex w-full flex-row">
        <div className="my-auto">Technologies</div>
        {complete ? (
          <Link
            target="_blank"
            href={url}
            className="flex h-full w-full flex-row justify-end"
            rel="noopener noreferer"
          >
            <p className="my-auto text-lg">Visit</p>{' '}
            <RxExternalLink className="my-auto text-2xl" />
          </Link>
        ) : (
          <div className="flex h-full w-full flex-row justify-end">
            <p className="my-auto rounded-lg bg-primaryLight p-2 text-lg">
              Coming Soon
            </p>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
