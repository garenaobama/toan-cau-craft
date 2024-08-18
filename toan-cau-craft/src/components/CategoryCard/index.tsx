import { cormorantRegular } from "@/fonts";
import { Images } from "@/images";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const CategoryCard = ({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("relative h-96 overflow-hidden", className)}>
      <Image
        className="absolute"
        fill
        objectFit="cover"
        src={src}
        alt="category_image"
      />
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7455357142857143) 0%, rgba(255,255,255,0.1516981792717087) 100%);",
        }}
        className="w-full h-full absolute"
      ></div>
      <div className="absolute p-5 w-full h-full">
        <div className="border w-full h-full flex items-end border-themeWhite p-6">
          <h4 className={twMerge(cormorantRegular.className, "text-themeWhite text-4xl")}>{title}</h4>
        </div>
      </div>
    </div>
  );
};
