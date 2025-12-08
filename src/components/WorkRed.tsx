"use client";

import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

import { recentPositions } from "@/utils/data";

interface IProps {
  company: string;
  title: string;
  start: string;
  end: string;
  tasks: string;
  location: string;
  index: number;
}

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
        <h1 className="text-left font-lufga text-xl font-semibold text-textLight dark:text-offwhite sm:text-2xl lg:text-[28px] xl:text-[32px]">
          {`${company}`}
        </h1>
        <div className="flex flex-row items-center gap-4 text-accentOrange ">
          <span className="flex flex-row">
            <IoLocationOutline />
            <p className="font-lufga text-sm text-textLight dark:text-offwhite/80 sm:text-base lg:text-lg">
              {location}
            </p>
          </span>
          <span className="flex flex-row gap-1">
            <IoCalendarOutline />
            <p className="font-lufga text-sm  text-textLight dark:text-offwhite/80 sm:text-base lg:text-lg">
              {start} - {end}
            </p>
          </span>
        </div>
      </div>

      {/* Timeline Separator */}
      <div className="order-3 flex lg:order-2 lg:flex-col">
        {/* Mobile: Horizontal line with circle */}
        <div className="flex w-full items-center lg:hidden">
          {/* line */}
          <div
            className={`h-0 flex-1 border-t-2 border-dashed ${
              index % 2 === 0
                ? "border-accentOrange/50"
                : "border-black dark:border-offwhite/50"
            }`}
          />
          {/* circle */}
          <div
            className={`mx-3 size-8 shrink-0 rounded-full border-2 p-1 sm:size-10 ${
              index % 2 === 0
                ? "border-dashed border-accentOrange/50"
                : "border-dashed border-black dark:border-offwhite/50"
            }`}
          >
            <div
              className={`size-full rounded-full ${
                index % 2 === 0
                  ? "bg-accentOrange/50"
                  : "bg-black dark:bg-offwhite/50"
              }`}
            />
          </div>
          {/* line */}
          <div
            className={`h-0 flex-1 border-t-2 border-dashed ${
              index % 2 === 0
                ? "border-accentOrange/50"
                : "border-black dark:border-offwhite/50"
            }`}
          />
        </div>

        {/* Desktop: Vertical timeline */}
        <div className="hidden flex-col lg:flex lg:h-full">
          <div
            className={`size-10 shrink-0 rounded-full border-2 p-1 xl:size-12 ${
              index % 2 === 0
                ? "border-dashed border-accentOrange"
                : "border-dashed border-black dark:border-offwhite/50"
            }`}
          >
            <div
              className={`size-full rounded-full ${
                index % 2 === 0
                  ? "bg-accentOrange"
                  : "bg-black dark:bg-offwhite/50"
              }`}
            />
          </div>
          <div
            className={`h-full w-0 border-2 border-dashed ${
              index % 2 === 0
                ? "border-accentOrange"
                : "border-black dark:border-offwhite/50"
            } mx-auto`}
          />
        </div>
      </div>

      {/* Job Details */}
      <div className="order-2 flex flex-1 flex-col gap-2 lg:order-3">
        <h1 className="text-left font-lufga text-xl font-semibold text-textLight dark:text-offwhite sm:text-2xl lg:text-[28px] xl:text-[32px]">
          {title}
        </h1>
        <p className="pb-2 font-lufga text-sm font-normal leading-relaxed text-textLight/50 dark:text-offwhite/80 sm:text-base lg:pb-3 lg:text-base">
          {tasks}
        </p>
      </div>
    </div>
  );
}

export default function WorkRed() {
  // const { isOpen } = UseJobContext();

  return (
    <section
      className="my-8 flex w-full flex-col px-4 sm:px-6 md:my-16 lg:px-8"
      id="work"
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="py-8 text-left font-lufga text-4xl font-bold leading-tight text-textLight dark:text-offwhite  sm:py-12 sm:text-4xl md:text-5xl lg:py-16 lg:text-[56px]">
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
