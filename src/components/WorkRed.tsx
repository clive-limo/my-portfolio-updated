"use client";

interface IProps {
  company: string;
  title: string;
  start: string;
  end: string;
  tasks: string;
  location: string;
  index: number;
}

// export function JobCards({ title, start, end }: IProps) {
//   const { isOpen, setIsOpen } = UseJobContext();
//   return (
//     // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
//     <div
//       className={clsx(
//         'w-full p-3 hover:bg-accentGreen/5',
//         isOpen === title ? 'bg-accentGreen/20' : 'bg-none',
//       )}
//     >
//       <h2 className=" text-xl font-bold">{title}</h2>
//       <p className="text-sm font-normal text-zinc-500">
//         {start} to {end}
//       </p>
//     </div>
//   );
// }

export function JobCardsRed({
  company,
  title,
  start,
  end,
  tasks,
  location,
  index,
}: IProps) {
  // const { isOpen, setIsOpen } = UseJobContext();
  return (
    <div className="flex w-full flex-row gap-8">
      {/* title */}
      <div className="flex flex-1 flex-col gap-3">
        <h1 className="text-left font-lufga text-[32px] font-semibold text-textLight">
          {`${company}-${location}`}
        </h1>
        <p className="font-lufga text-lg text-textLight/50">
          {start} - {end}
        </p>
      </div>
      {/* separator */}
      <div className="flex flex-col">
        <div
          className={`size-12 shrink-0 rounded-full border-2 p-1 ${index % 2 === 0 ? " border-dashed border-accentOrange" : " border-dashed border-black"}`}
        >
          <div
            className={`size-full rounded-full ${index % 2 === 0 ? "bg-accentOrange" : "bg-black"} `}
          />
        </div>
        <div
          className={`h-full w-0 border-2 border-dashed ${index % 2 === 0 ? "border-accentOrange " : "border-black "} mx-auto`}
        />
      </div>
      {/* job tasks */}
      <div className="flex flex-1 flex-col gap-2">
        <h1 className="text-left font-lufga text-[32px] font-semibold text-textLight">
          {title}
        </h1>
        <p className="text-md pb-3 font-lufga font-normal text-textLight/50">
          {tasks}
        </p>
      </div>
    </div>
  );
}

export default function WorkRed() {
  // const { isOpen } = UseJobContext();

  const recentPositions = [
    {
      company: "Kitrel LLC",
      title: "Full Stack Engineer",
      start: "September, 2023",
      end: "Present",
      tasks:
        "Developing and maintaining robust web and mobile applications utilizing Vue.js, React Native, and Node.js within an AWS infrastructure. Building RESTful APIs using Express.js to deliver scalable and efficient solutions.",
      location: "Houston, Texas",
      employmentType: "Full-time",
    },
    {
      company: "Chemtron Enterprises",
      title: "Full Stack Developer",
      start: "January, 2022",
      end: "October, 2023",
      tasks:
        "Developed a user-friendly finance management software with advanced features, resulting in a 20% increase in sales tracking accuracy and efficiency.",
      location: "Mombasa, Kenya",
      employmentType: "Part-time",
    },
    {
      company: "Prolox Solutions",
      title: "Jr Software Engineer",
      start: "December, 2020",
      end: "November, 2021",
      tasks:
        "Implemented front-end enhancements and optimizations to improve website performance, resulting in a 20% decrease in page load time and a 15% increase in customer engagement.",
      location: "Nairobi, Kenya",
    },
    {
      company: "Mandera Service Delivery",
      title: "Frontend Web Developer",
      start: "July, 2020",
      end: "April, 2021",
      tasks:
        "Collaborated with a cross-functional team to build web portals that streamlined service delivery processes for government clients, resulting in improved response times and user experience.",
      location: "Nairobi, Kenya",
      employmentType: "Part-time",
    },
  ];
  return (
    <section className="flex w-full flex-col" id="work">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="py-16 text-left font-lufga text-[56px] font-semibold text-textLight">
          My <span className="text-accentOrange">Work Experience</span>
        </h1>
        <div className="flex h-fit flex-col md:flex-col">
          {recentPositions.map((position, index) => (
            <JobCardsRed key={position.company} {...position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
