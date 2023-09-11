import Link from 'next/link';
import type { ReactNode } from 'react';
import NavBar from "@/components/NavBar"


import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-white lg:min-w-screen-sm antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <NavBar />
      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      </footer>
    </div>
  </div>
);

export { Main };
