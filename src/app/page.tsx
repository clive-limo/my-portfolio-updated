"use client";

import About from "@/components/About";
import { ContatctMe } from "@/components/ContatctMe";
import Footer from "@/components/Footer";
import { HomePage } from "@/components/Home";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import CustomCursor from "@/components/ui/CustomCursor";
import WorkRed from "@/components/WorkRed";
import { Main } from "@/templates/Main";

export default function Home() {
  return (
    <Main>
      <CustomCursor />
      <HomePage />
      <About />
      <WorkRed />
      <Skills />
      <Projects />
      <ContatctMe />
      <Footer />
    </Main>
  );
}
