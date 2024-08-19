"use client";
import { Icons } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { SearchBox } from "../SearchBox";
import { leagueSpartanRegular } from "@/fonts";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type HeaderProp = {};

const navLinks = [
  { id: 1, name: "HOME", path: "/", expandable: false },
  { id: 2, name: "PRODUCTS", path: "/products", expandable: true },
  { id: 3, name: "ABOUT US", path: "/about-us", expandable: false },
  { id: 4, name: "CONTACT US", path: "/contact-us", expandable: false },
];

export const Header = ({}: HeaderProp): React.JSX.Element => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <div className="relative justify-center grid grid-cols-2 h-16 bg-white items-center">
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="/images/logo.svg"
            className="size-9"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <div className="flex ml-28">
          {navLinks.map((item) => (
            <HeaderLink
              title={item.name}
              isCurrent={isActive(item.path)}
              href={item.path}
              expandable={item.expandable}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <SearchBox className="w-96" />
      </div>
    </div>
  );
};

const HeaderLink = ({
  href,
  title,
  isCurrent,
  expandable = false,
}: {
  href: string;
  title: string;
  isCurrent?: boolean;
  expandable?: boolean;
}) => {
  return (
    <Link
      className={twMerge(
        "m-5 text-textSecondary flex items-center",
        isCurrent ? " border-b text-textPrimary" : "text-textSecondary"
      )}
      href={href}
    >
      <p className={leagueSpartanRegular.className}>{title}</p>
      {expandable ? <Image alt="chevron down" src={Icons.ChevronDown} /> : null}
    </Link>
  );
};
