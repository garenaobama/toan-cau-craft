import { cormorantRegular, latoRegular } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const MainInfoCard = (): React.JSX.Element => {
  return (
    <div className="grid grid-cols-5 bg-themeWhite rounded-3xl overflow-hidden shadow-lg w-2/3">
      <div className="col-span-2 bg-[url('/images/home-demo.png')]">
      </div>
      <div className="col-span-3 bg-themeWhite">
        <div className="m-11">
          <h1 className="text-textPrimary font-island-moments text-6xl">
            About us
          </h1>
          <h2
            className={twMerge(
              cormorantRegular.className,
              "text-textPrimary text-6xl"
            )}
          >
            Handicraft
          </h2>
          <p
            className={twMerge(
              latoRegular.className,
              "text-textPrimary mt-6 text-wrap"
            )}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis
            arcu felis. Volutpat sollicitudin tortor aliquam maecenas porttitor
            ac et blandit. Pretium urna at ac purus aliquet mauris. Sit feugiat
            mattis turpis congue justo.
          </p>
          <div className="w-full flex flex-row justify-between mt-10">
            <NumberItem keyw="products" value="123.5k+" />
            <NumberItem keyw="years experience" value="20" />
            <NumberItem keyw="user returned" value="97%" />
          </div>
          <Link
            className="text-textSecondary flex flex-row items-center mt-10"
            href={"#"}
            title="Readmore"
          >
            <div style={{ height: 1 }} className="bg-textSecondary w-10 mr-1"></div>
            <p className={twMerge(latoRegular.className, "text-base")}>READ MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NumberItem = ({ keyw, value }: { keyw: string; value: string }) => {
  return (
    <div>
      <p
        className={twMerge(
          cormorantRegular.className,
          "text-textPrimary text-6xl"
        )}
      >
        {value}
      </p>
      <p
        className={twMerge(latoRegular.className, "text-textSecondary text-base mt-2")}
      >
        {keyw}
      </p>
    </div>
  );
};
