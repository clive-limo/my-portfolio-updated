import type { ReactNode } from 'react';

import NavBar from '@/components/NavBar';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-8 text-white antialiased lg:p-0">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <NavBar />
      <main className="py-5 text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };