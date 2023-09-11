'use client';

import clsx from 'clsx';

import { UseJobContext } from '@/app/context/StateContext';

interface IProps {
  title: string;
  start: string;
  end: string;
}

export function JobCards({ title, start, end }: IProps) {
  const { isOpen, setIsOpen } = UseJobContext();
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={clsx(
        'w-full p-3 hover:bg-accentGreen/5',
        isOpen === title ? 'bg-accentGreen/20' : 'bg-none',
      )}
      onClick={() => setIsOpen(title)}
    >
      <h2 className=" text-xl font-bold">{title}</h2>
      <p className="text-sm font-normal text-zinc-500">
        {start} to {end}
      </p>
    </div>
  );
}

export default function Work() {
  const { isOpen } = UseJobContext();
  const proloxTasks = [
    'Collaborated with a team of developers to design and develop an ecommerce website, resulting in a 40% increase in online sales within the first three months of launch.',
    'Implemented front-end enhancements and optimizations to improve website performance, resulting in a 20% decrease in page load time and a 15% increase in customer engagement.',
    'Contributed to the creation of an admin endpoint system that streamlined inventory management processes, reducing manual data entry errors by 80%.',
  ];
  const chemtronTasks = [
    'Developed a user-friendly finance management software with advanced features, resulting in a 20% increase in sales tracking accuracy and efficiency.',
    'Collaborated with cross-functional teams to integrate the software with existing CRM systems, resulting in a seamless flow of data and reducing manual data entry errors by 80%.',
    'Implemented an inventory tracking system within the finance management software, reducing stockouts by 25% and improving overall inventory accuracy by 20%.',
    'Successfully integrated payment gateways into the finance management software, resulting in a 15% decrease in payment processing time and a 10% increase in on-time payments from customers.',
  ];
  const ServiceTasks = [
    'Collaborated with a cross-functional team of developers, designers, and project managers to build a web application that streamlined service delivery processes for clients, resulting in a 30% reduction in response time.',
    "Utilized user feedback and conducted usability testing sessions to identify areas for improvement in the web application's interface and functionality, leading to a 20% increase in user satisfaction ratings.",
    'Implemented agile development methodologies and conducted daily stand-up meetings to ensure efficient progress and timely delivery of the web application, achieving an on-time completion rate of 95%.',
  ];
  return (
    <section className="w-full" id="work">
      <h1 className="pt-20 text-5xl font-extrabold text-white">
        Work Experience
      </h1>
      <div className="flex h-fit flex-col md:h-[500px] md:flex-row">
        <div className="my-10 rounded-lg bg-primaryLight lg:w-60">
          <JobCards
            title="Chemtron Enterprise"
            start="July 12th, 2020"
            end="April 27th, 2021"
          />
          <JobCards
            title="Prolox Solutions"
            start="July 12th, 2020"
            end="April 27th, 2021"
          />
          <JobCards
            title="Service Delivery Mandera"
            start="July 12th, 2020"
            end="April 27th, 2021"
          />
        </div>
        <div className=" mx-4 flex max-h-screen flex-col overflow-y-hidden md:mt-10 lg:m-10">
          <p className="text-sm font-bold text-zinc-400 lg:text-lg">
            {isOpen === 'Prolox Solutions'
              ? 'Front-End Developer'
              : 'Full-Stack Developer'}
          </p>
          <p className="my-2 text-2xl font-extrabold lg:text-5xl">{isOpen}</p>
          <ul
            className={clsx(
              'list-disc',
              isOpen === 'Service Delivery Mandera'
                ? 'visible my-4'
                : 'invisible h-0 w-0',
            )}
          >
            {ServiceTasks.map((task) => (
              <li
                className="mx-4 my-3 text-lg font-normal text-zinc-400 "
                key={ServiceTasks.indexOf(task)}
              >
                {task}
              </li>
            ))}
          </ul>
          <ul
            className={clsx(
              'list-disc',
              isOpen === 'Prolox Solutions'
                ? 'visible my-4'
                : 'invisible h-0 w-0',
            )}
          >
            {proloxTasks.map((task) => (
              <li
                className="mx-4 my-3 text-lg font-normal text-zinc-400 "
                key={proloxTasks.indexOf(task)}
              >
                {task}
              </li>
            ))}
          </ul>
          <ul
            className={clsx(
              'list-disc',
              isOpen === 'Chemtron Enterprise'
                ? 'visible my-4'
                : 'invisible w-0',
            )}
          >
            {chemtronTasks.map((task) => (
              <li
                className="mx-4 my-3 text-lg font-normal text-zinc-400 "
                key={chemtronTasks.indexOf(task)}
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
