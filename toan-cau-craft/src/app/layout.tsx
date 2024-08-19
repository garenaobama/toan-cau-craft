"use client";
import { leagueSpartanRegular } from "@/fonts";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Provider } from "react-redux";
import { store } from "@/store/store";

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
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
