import { Images } from "@/images";
import Image from "next/image";
import { HomeBanner } from "../../components/TopBanner";
import { MainInfoCard } from "./MainInfoCard";
import { twMerge } from "tailwind-merge";
import { cormorantRegular, latoRegular } from "@/fonts";
import { CategoryCard } from "@/components/CategoryCard";

export const Home = (): React.JSX.Element => {
  return (
    <div>
      <HomeBanner />

      <div className="flex justify-center -translate-y-10">
        <MainInfoCard />
      </div>

      <div className="flex flex-col text-4xl mt-24 m-24">
        <h3
          className={twMerge(
            cormorantRegular.className,
            "text-textPrimary text-center"
          )}
        >
          CATEGORY
        </h3>
        <div className="w-full mt-10">
          <div className="grid grid-cols-2">
            <CategoryCard
              className="col-span-1 m-4"
              src="/images/demo_cate_01.png"
              title="Recycled rubber products"
            />
            <CategoryCard
              className="col-span-1 m-4"
              src="/images/demo_cate_02.png"
              title="Mother of pearl mosaic products"
            />
          </div>
          <div className="grid grid-cols-3">
            <CategoryCard
              className="col-span-1 m-4 h-80"
              src="/images/demo_cate_03.png"
              title="Buffalo horn products"
            />
            <CategoryCard
              className="col-span-1 m-4 h-80"
              src="/images/demo_cate_04.png"
              title="Mother of pearl products"
            />
            <CategoryCard
              className="col-span-1 m-4 h-80"
              src="/images/demo_cate_05.png"
              title="Wooden products"
            />
            <CategoryCard
              className="col-span-1 m-4 h-80"
              src="/images/demo_cate_06.png"
              title="Bamboo products"
            />
            <CategoryCard
              className="col-span-1 m-4 h-80"
              src="/images/demo_cate_07.png"
              title="Coconut products"
            />
            <CategoryCard
              className="col-span-1 m-4 h-80"
              src="/images/demo_cate_08.png"
              title="Lacquer products"
            />
          </div>
        </div>
      </div>

      <div className="h-96 m-24">
        <div className="grid grid-cols-2 gap-16">
          <div className="col-span-1">
            <div className="mt-8">
              <h1 className="text-textPrimary font-island-moments text-4xl">
                Explore
              </h1>
              <h2
                className={twMerge(
                  cormorantRegular.className,
                  "text-textPrimary text-4xl"
                )}
              >
                ART FROM NATURE
              </h2>
              <p
                className={twMerge(
                  latoRegular.className,
                  "max-w-screen-sm mt-6 text-textSecondary"
                )}
              >
                Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit
                iaculis arcu felis. Volutpat sollicitudin tortor aliquam
                maecenas porttitor ac et blandit. Pretium urna at ac purus
                aliquet mauris. Sit feugiat mattis turpis congue justo. Lorem
                ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis
                arcu felis. Volutpat sollicitudin tortor aliquam maecenas
                porttitor ac et blandit. Pretium urna at ac purus aliquet
                mauris. Sit feugiat mattis turpis congue justo.
              </p>
            </div>
          </div>
          <div className="col-span-1 h-96">
            <div className="relative w-full h-full">
              <Image
                fill
                objectFit="contain"
                src={"/images/demo-product-link.png"}
                alt="product_link_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
