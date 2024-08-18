import { leagueSpartanRegular } from "@/fonts";
import "./globals.css";
import "tailwindcss"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartanRegular.className}>{children}</body>
    </html>
  );
}
