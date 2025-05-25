import Image from "next/image";
import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

export default function Footer() {
  return (
    <footer
      id="about"
      className="relative w-full overflow-hidden rounded-t-[100px] bg-primaryDark pt-20"
    >
      {/* overlay image – hide on sm */}
      <div className="absolute inset-0 -top-10 z-10 hidden md:block">
        <Image
          src="/assets/images/popcorn.svg"
          alt="background overlay"
          layout="responsive"
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>

      {/* content wrapper */}
      <div className="relative z-20 mx-auto flex flex-col gap-12 px-4 py-10 md:flex-row md:gap-8 md:px-6 lg:px-8 xl:max-w-screen-xl">
        {/* Connect */}
        <div className="w-full md:flex-1">
          <h1 className="font-lufga text-3xl font-semibold text-white sm:text-4xl md:text-[48px]">
            Let&apos;s <span className="text-accentOrange">Connect</span>
          </h1>
          <p className="mt-4 max-w-prose font-lufga text-base font-light text-white/80 sm:text-lg md:text-base">
            I&apos;m a full-stack developer with a passion for building web
            applications. I have a deep understanding of the full web
            development stack, from backend to frontend.
          </p>
        </div>

        {/* Navigation */}
        <div className="w-full md:w-1/4">
          <h2 className="font-lufga text-2xl font-semibold text-white sm:text-3xl md:text-[32px]">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Work", "Skills", "Projects", "Contact"].map(
              (label) => (
                <li key={label}>
                  <Link
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  >
                    <p className="font-lufga text-base font-light text-white/80 transition-colors hover:text-accentOrange sm:text-lg">
                      {label}
                    </p>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/4">
          <h2 className="font-lufga text-2xl font-semibold text-white sm:text-3xl md:text-[32px]">
            Contact
          </h2>
          <p className="mt-2 font-lufga text-sm font-light text-white/80 sm:text-base">
            If you have any questions or just want to say hi, feel free to reach
            out to me.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="mailto:limoclive01@gmail.com">
                <p className="font-lufga text-base font-light text-white/80 transition-colors hover:text-accentOrange">
                  limoclive01@gmail.com
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/your_username"
                target="_blank"
                rel="noreferrer"
              >
                <p className="font-lufga text-base font-light text-white/80 transition-colors hover:text-accentOrange">
                  GitHub
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/your_username"
                target="_blank"
                rel="noreferrer"
              >
                <p className="font-lufga text-base font-light text-white/80 transition-colors hover:text-accentOrange">
                  LinkedIn
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <p className="px-4 pb-8 text-center font-lufga text-sm font-light text-white/80 sm:px-6">
        &copy; {new Date().getFullYear()} {AppConfig.site_name}
      </p>
    </footer>
  );
}
