import { cormorantRegular, latoRegular } from "@/fonts";
import { Images } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type TopBannerProps = {
  src: string;
  h1: string;
  h2: string;
  description: string;
};

export const TopBanner = ({
  src,
  h1,
  h2,
  description,
}: TopBannerProps): React.JSX.Element => {
  return (
    <div className="relative w-full h-96 overflow-hidden flex items-center">
      <Image
        className=""
        alt="background"
        src={src}
        width={1440}
        height={1}
      />
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7455357142857143) 0%, rgba(255,255,255,0.1516981792717087) 100%);",
        }}
        className="w-full h-full absolute bg-custom-gradient"
      ></div>
      <div className="absolute ml-32">
        <h1 className="text-themeWhite font-island-moments text-6xl">{h1}</h1>
        <h2
          className={twMerge(
            cormorantRegular.className,
            "text-themeWhite text-6xl"
          )}
        >
          {h2}
        </h2>
        <p className={twMerge(latoRegular.className, "max-w-screen-sm mt-6 text-themeWhite")}>
          {description}
        </p>
      </div>
    </div>
  );
};
