import { Icons } from "@/icons";
import { Images } from "@/images";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { SearchBox } from "../SearchBox";
import { latoRegular, leagueSpartanRegular } from "@/fonts";
import { twMerge } from "tailwind-merge";

type FooterProp = {};

export const Footer = ({}: FooterProp): React.JSX.Element => {
  return (
    <div className="flex p-5 flex-col gap-10 border-t border-backgroundDecor200 mt-10">
      <div className="grid sm:grid-cols-4 gap-16">
        <div className="col-span-1">
          <Image
            src="/images/logo.svg"
            className="size-16"
            width={200}
            height={200}
            alt="logo"
          />
          <p className={twMerge(latoRegular.className, "text-textSecondary mt-6 text-sm")}>
            “Crafting the essence of nature into timeless art, one handcrafted
            piece at a time.”
          </p>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col gap-5">
            <p className={twMerge(latoRegular.className, "text-textPrimary text-sm")}>
              Contact us
            </p>
            <div className="flex gap-3">
              <Image src={Icons.Phone} alt="phone icon" />
              <p
                className={twMerge(latoRegular.className, "text-textSecondary text-sm")}
              >
                0865 953 118
              </p>
            </div>
            <div className="flex gap-3">
              <Image src={Icons.Mail1} alt="phone icon" />
              <p
                className={twMerge(latoRegular.className, "text-textSecondary text-sm")}
              >
                myngheviet.2021@gmail.com
              </p>
            </div>
            <div className="flex gap-3">
              <Image src={Icons.MarkerPin} alt="phone icon" />
              <p
                className={twMerge(latoRegular.className, "text-textSecondary text-sm")}
              >
                556E3, 147 Tan Mai, Tan Mai Street, Tan Mai Ward, Hoang Mai
                District, Hanoi City, Vietnam
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-5">
            <p className={twMerge(latoRegular.className, "text-textPrimary text-sm")}>
              Follow us
            </p>
            <div className="flex gap-3">
              <p
                className={twMerge(latoRegular.className, "text-textSecondary text-sm")}
              >
                Follow us on our social media platforms to stay connected and
                discover the latest in our handcrafted collections!
              </p>
            </div>
            <div className="flex gap-6">
                <Image src={Icons.FaceBookIcon} alt="facebook icon"/>
                <Image src={Icons.InstagramIcon} alt="instagram icon"/>
                <Image src={Icons.YoutubeIcon} alt="youtube icon"/>
            </div>
          </div>
        </div>
      </div>

      <div style={{height:1}} className="bg-backgroundDecor500 w-full"></div>

      <div className="flex justify-end mb-10">
        <p
          className={twMerge(
            latoRegular.className,
            "text-textSecondary text-xs"
          )}
        >
          Copyright 2024 GLOBAL HANDICRAFTS CO.,LTD. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

const HeaderLink = ({
  href,
  title,
  isCurrent,
}: {
  href: string;
  title: string;
  isCurrent?: boolean;
}) => {
  return (
    <Link
      className={"m-5 text-textPrimary" + (isCurrent ? " border-b" : "")}
      href={href}
    >
      <p className={leagueSpartanRegular.className}>{title}</p>
    </Link>
  );
};
