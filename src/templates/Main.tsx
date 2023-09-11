import Link from 'next/link';
import type { ReactNode } from 'react';
import NavBar from "@/components/NavBar"


import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-8 text-white min-w-screen-sm lg:p-0 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <NavBar />
      <main className="content py-5 text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
