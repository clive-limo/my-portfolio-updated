import type { ReactNode } from "react";

import NewNavBar from "@/components/NewNavBar";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-8 text-white antialiased lg:p-0">
    {props.meta}

    <div className="mx-auto ">
      <NewNavBar />
      <main className=" text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
