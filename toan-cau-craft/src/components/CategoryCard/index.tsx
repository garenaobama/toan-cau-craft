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
    <button>
      <div className={twMerge("relative h-96 overflow-hidden", className)}>
        <Image
          className="absolute"
          fill
          objectFit="cover"
          src={src}
          alt="category_image"
        />
        <div
          className="w-full h-full absolute bg-custom-gradient"
        ></div>
        <div className="absolute p-5 w-full h-full">
          <div className="border w-full h-full flex items-end border-themeWhite p-6">
            <h4
              className={twMerge(
                cormorantRegular.className,
                "text-themeWhite text-4xl text-start"
              )}
            >
              {title}
            </h4>
          </div>
        </div>
      </div>
    </button>
  );
};
