import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";
import { TopBanner } from "@/components/TopBanner";
import { cormorantSemiBold, latoRegular } from "@/fonts";
import { twMerge } from "tailwind-merge";

export const Products = (): React.JSX.Element => {
  return (
    <div>
      <TopBanner
        src="/images/products.png"
        h1="Handicraft"
        h2="MADE WITH LOVE"
        description="Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis arcu felis. Volutpat sollicitudin tortor aliquam maecenas porttitor ac et blandit. Pretium urna at ac purus aliquet mauris. Sit feugiat mattis turpis congue justo."
      />

      <div className="mx-28 my-20">
        <h2
          className={twMerge(
            cormorantSemiBold.className,
            "text-textPrimary text-4xl"
          )}
        >
          PRODUCTS
        </h2>
      </div>

      <div className="mx-28 my-14 grid grid-cols-3">
        <div className="col-span-1">
          <div>
            <h2
              className={twMerge(
                cormorantSemiBold.className,
                "text-textPrimary text-lg"
              )}
            >
              Category
            </h2>
            <SearchBox className="w-full mt-3" />
            <div>
              <FilterItem title="Recycled rubber products" />
              <FilterItem title="Mother of pearl mosaic products" />
              <FilterItem title="Buffalo horn products" />
              <FilterItem title="Mother of pearl products" />
              <FilterItem title="Wooden products" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-3">
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_1.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_2.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_3.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_4.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_5.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_6.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_7.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_8.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_1.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_2.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_3.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_4.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_5.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_6.png"
              name="Olpe"
              category="Ceramic"
            />
            <ProductCard
              className="col-span-1 m-4"
              src="/images/demo_product_7.png"
              name="Olpe"
              category="Ceramic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <p
        className={twMerge(latoRegular.className, "text-textPrimary text-base")}
      >
        {title}
      </p>
    </div>
  );
};
