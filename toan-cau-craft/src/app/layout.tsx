"use client";
import React from "react";
import { leagueSpartanRegular } from "@/fonts";
import "./globals.css";
import { twMerge } from "tailwind-merge";
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
