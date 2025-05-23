import "@/styles/global.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { JobContextProvider } from "@/app/context/StateContext";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const lufgaFont = localFont({
  src: [
    {
      path: "../../public/fonts/lufga/LufgaThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/lufga/LufgaBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JobContextProvider>
      <html lang="en" className={`${lufgaFont.variable}`}>
        <body className="bg-white">
          {children}
          <Analytics />
        </body>
      </html>
    </JobContextProvider>
  );
}
