import clsx from 'clsx';

interface IProps {
  title: string;
  start: string;
  end: string;
  selected: string;
}

export default function JobCards({ title, start, end, selected }: IProps) {
  return (
    <div
      className={clsx(
        'w-full p-3',
        selected === title ? 'bg-accentGreen/30' : 'bg-none',
      )}
    >
      <h2 className=" text-xl font-bold">{title}</h2>
      <p className="text-sm font-normal text-zinc-500">
        {start} to {end}
      </p>
    </div>
  );
}
