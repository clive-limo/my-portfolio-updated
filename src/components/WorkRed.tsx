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
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-8">
      {/* Company Info */}
      <div className="order-1 flex flex-1 flex-col gap-2 lg:order-1 lg:gap-3">
        <h1 className="text-left font-lufga text-xl font-semibold text-textLight sm:text-2xl lg:text-[28px] xl:text-[32px]">
          {`${company}-${location}`}
        </h1>
        <p className="font-lufga text-sm text-textLight/50 sm:text-base lg:text-lg">
          {start} - {end}
        </p>
      </div>

      {/* Timeline Separator */}
      <div className="order-3 flex lg:order-2 lg:flex-col">
        {/* Mobile: Horizontal line with circle */}
        <div className="flex w-full items-center lg:hidden">
          {/* line */}
          <div
            className={`h-0 flex-1 border-t-2 border-dashed ${
              index % 2 === 0 ? "border-accentOrange" : "border-black"
            }`}
          />
          {/* circle */}
          <div
            className={`mx-3 size-8 shrink-0 rounded-full border-2 p-1 sm:size-10 ${
              index % 2 === 0
                ? "border-dashed border-accentOrange"
                : "border-dashed border-black"
            }`}
          >
            <div
              className={`size-full rounded-full ${
                index % 2 === 0 ? "bg-accentOrange" : "bg-black"
              }`}
            />
          </div>
          {/* line */}
          <div
            className={`h-0 flex-1 border-t-2 border-dashed ${
              index % 2 === 0 ? "border-accentOrange" : "border-black"
            }`}
          />
        </div>

        {/* Desktop: Vertical timeline */}
        <div className="hidden flex-col lg:flex lg:h-full">
          <div
            className={`size-10 shrink-0 rounded-full border-2 p-1 xl:size-12 ${
              index % 2 === 0
                ? "border-dashed border-accentOrange"
                : "border-dashed border-black"
            }`}
          >
            <div
              className={`size-full rounded-full ${
                index % 2 === 0 ? "bg-accentOrange" : "bg-black"
              }`}
            />
          </div>
          <div
            className={`h-full w-0 border-2 border-dashed ${
              index % 2 === 0 ? "border-accentOrange" : "border-black"
            } mx-auto`}
          />
        </div>
      </div>

      {/* Job Details */}
      <div className="order-2 flex flex-1 flex-col gap-2 lg:order-3">
        <h1 className="text-left font-lufga text-xl font-semibold text-textLight sm:text-2xl lg:text-[28px] xl:text-[32px]">
          {title}
        </h1>
        <p className="lg:text-md pb-2 font-lufga text-sm font-normal leading-relaxed text-textLight/50 sm:text-base lg:pb-3">
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
    <section
      className="my-8 flex w-full flex-col px-4 sm:px-6 md:my-16 lg:px-8"
      id="work"
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="py-8 text-left font-lufga text-4xl font-bold leading-tight text-textLight sm:py-12 sm:text-4xl md:text-5xl lg:py-16 lg:text-[56px]">
          My <span className="text-accentOrange">Work Experience</span>
        </h1>

        <div className="flex flex-col gap-6 pb-8 sm:gap-8 sm:pb-12 lg:gap-4 lg:pb-16">
          {recentPositions.map((position, index) => (
            <div key={position.company} className="w-full">
              <JobCardsRed {...position} index={index} />
              {/* Add spacing between cards except for the last one */}
              {index < recentPositions.length - 1 && (
                <div className="h-6 sm:h-8 lg:h-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
