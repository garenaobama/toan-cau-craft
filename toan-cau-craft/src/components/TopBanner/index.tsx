import { cormorantRegular, latoRegular } from "@/fonts";
import { Images } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const HomeBanner = ():React.JSX.Element => {
  return (
    <div
     className="relative w-full h-96 overflow-hidden flex items-center">
      <Image  className="opacity" alt="background" src={"/images/home-bg.png"} width={2080} height={1}/>
      <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.7455357142857143) 0%, rgba(255,255,255,0.1516981792717087) 100%);'}} className="w-full h-full absolute"></div>
      <div className="absolute ml-32">
        <h1
          className="text-themeWhite font-island-moments text-6xl"
        >
          Handicraft
        </h1>
        <h2
          className={twMerge(cormorantRegular.className, "text-themeWhite text-6xl")}
        >
          Handicraft
        </h2>
        <p className={twMerge(latoRegular.className, "max-w-screen-sm mt-6")}>
          Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis arcu felis. Volutpat sollicitudin tortor aliquam maecenas porttitor ac et blandit. Pretium urna at ac purus aliquet mauris. Sit feugiat mattis turpis congue justo.
        </p>
      </div>
    </div>
  );
};
