import { Icons } from "@/icons";
import { Images } from "@/images";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { SearchBox } from "../SearchBox";
import { leagueSpartanRegular } from "@/fonts";

type HeaderProp = {};

export const Header = ({}: HeaderProp): React.JSX.Element => {
  const scrollIndex = useAppSelector((state) => state.app.scrollIndex);

  return (
    <div className="relative flex justify-center grid grid-cols-2 h-16 bg-white items-center">
      <div className="flex items-center justify-center">
        <div>
          <Image src={Images.LogoApp} alt="logo" />
        </div>
        <div className="flex ml-28">
          <HeaderLink title="HOME" isCurrent href="#home" />
          <HeaderLink title="PRODUCTS" href="#home" />
          <HeaderLink title="ABOUT US" href="#home" />
          <HeaderLink title="CONTACT US" href="#home" />
        </div>
      </div>
      <div className="flex justify-center">
        <SearchBox className="w-96"/>
      </div>
    </div>
  );
};

const HeaderLink = ({ href, title, isCurrent }: { href: string; title: string, isCurrent?:boolean }) => {
  return (
    <Link className={"m-5 text-textPrimary" +( isCurrent ? " border-b" : "")} href={href}>
      <p className={leagueSpartanRegular.className}>{title}</p>
    </Link>
  );
};
