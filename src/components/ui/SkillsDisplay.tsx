import React, { useState } from "react";
import { FaAws, FaDocker, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiGooglecloud, SiMongodb, SiPostgresql } from "react-icons/si";

const SkillIcon = ({
  Icon,
  size = 42,
  name,
  description,
}: {
  Icon: React.ElementType;
  size?: number;
  name: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative cursor-pointer">
        <Icon
          size={size}
          className="text-primaryDark transition-all  duration-300 hover:scale-110 hover:text-accentOrange dark:text-offwhite dark:hover:text-accentOrange"
        />

        {/* Hover tooltip */}
        <div
          className={`absolute -top-20 left-1/2 z-10 w-48 -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2 text-center shadow-xl transition-all duration-300 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="mt-1 text-xs text-gray-300">{description}</p>
          {/* Arrow */}
          <div className="absolute -bottom-2 left-1/2 size-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-center font-lufga text-xl font-semibold text-textLight dark:text-offwhite/70 md:text-[24px]">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        {children}
      </div>
    </div>
  );
};

export default function SkillsShowcase() {
  return (
    <div className="py-3">
      <div className="mx-auto max-w-6xl">
        {/* Header with hover cue */}
        <div className="mb-3 text-center">
          <h1 className="mb-4 font-lufga text-xl font-bold text-offwhite md:text-2xl">
            Technical Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Frontend */}
          <SkillCategory title="Frontend">
            <SkillIcon
              Icon={FaReact}
              name="React"
              description="Building dynamic UIs with React and hooks"
            />
            <SkillIcon
              Icon={FaVuejs}
              name="Vue.js"
              description="Progressive framework for modern web apps"
            />
          </SkillCategory>

          {/* Backend */}
          <SkillCategory title="Backend">
            <SkillIcon
              Icon={FaNodeJs}
              name="Node.js"
              description="Server-side JavaScript runtime"
            />
            <SkillIcon
              Icon={FaDocker}
              name="Docker"
              description="Containerization and deployment"
            />
            <SkillIcon
              Icon={SiMongodb}
              name="MongoDB"
              description="NoSQL database management"
            />
            <SkillIcon
              Icon={SiPostgresql}
              name="PostgresSQL"
              description="Relational database management"
            />
          </SkillCategory>

          {/* Native */}
          <SkillCategory title="Native">
            <SkillIcon
              Icon={FaReact}
              name="React Native"
              description="Cross-platform mobile development"
            />
          </SkillCategory>

          {/* Cloud */}
          <SkillCategory title="Cloud">
            <SkillIcon
              Icon={SiGooglecloud}
              name="Google Cloud Platform"
              description="GCP services and infrastructure"
            />
            <SkillIcon
              Icon={FaAws}
              name="Amazon Web Services"
              description="AWS cloud solutions and deployment"
            />
          </SkillCategory>
        </div>

        {/* Optional: Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-blue-300 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-orange-300 blur-3xl" />
        </div>
      </div>
    </div>
  );
}
