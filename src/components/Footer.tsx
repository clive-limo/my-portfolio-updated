import Image from "next/image";
import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden rounded-t-[100px] bg-primaryDark pt-20"
      id="about"
    >
      {/* overlay image */}
      <Image
        src="/assets/images/popcorn.svg"
        alt="background overlay"
        layout="responsive"
        width={400}
        height={400}
        className="absolute z-10"
      />
      {/* about content */}
      <div className="relative z-20 mx-auto flex w-full max-w-screen-xl flex-row">
        <div className="flex flex-1 flex-col gap-2 pt-10 ">
          <h1 className="text-left font-lufga text-[48px] font-semibold text-white">
            Let&apos;s <span className="text-accentOrange">Connect</span>
          </h1>
          <p className="pr-10 font-lufga text-base font-light text-white/80">
            I&apos;m a full-stack developer with a passion for building web
            applications. I have a deep understanding of the full web
            development stack, from backend to frontend.
          </p>
        </div>
        <div className="flex flex-[0.5] flex-col gap-2 pt-10">
          <h2 className="text-left font-lufga text-[32px] font-semibold text-white">
            Navigation
          </h2>
          <ul className="flex flex-col gap-2 pt-4">
            <li>
              <Link href="/">
                <p className="font-lufga text-lg font-light text-white/80 transition-colors hover:text-accentOrange">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <p className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange">
                  Work
                </p>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <p className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange">
                  Skills
                </p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange">
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-[0.5] flex-col gap-2 pt-10 ">
          <h2 className="text-left font-lufga text-[32px] font-semibold text-white">
            Contact
          </h2>
          <p className="font-lufga text-sm font-light text-white/80">
            If you have any questions or just want to say hi, feel free to reach
            out to me.
          </p>
          <ul className="flex flex-col gap-2 pt-4">
            <li>
              <Link
                href="mailto:limoclive01@gmail.com"
                className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange"
              >
                limoclive01@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/your_username"
                target="_blank"
                rel="noreferrer"
                className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/your_username"
                target="_blank"
                rel="noreferrer"
                className="font-lufga text-sm font-light text-white/80 transition-colors hover:text-accentOrange"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="pb-4 pt-16 text-center font-lufga text-sm font-light text-white/80">
        &copy; {new Date().getFullYear()} {AppConfig.site_name}
      </p>
    </footer>
  );
}
