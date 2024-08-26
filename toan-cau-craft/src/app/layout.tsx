"use client";
import { leagueSpartanRegular } from "@/fonts";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          leagueSpartanRegular.className,
          "flex min-h-screen flex-col items-center justify-between bg-themeWhite"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
