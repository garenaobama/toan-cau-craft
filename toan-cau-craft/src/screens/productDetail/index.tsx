"use client";
import {
  cormorantMedium,
  cormorantRegular,
  latoBold,
  latoRegular,
} from "@/fonts";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/navigation";
import { fetchProductBySlug, fetchProducts, Product } from "@/models/Product";

export const ProductDetail = ({
  slug,
}: {
  slug: string;
}): React.JSX.Element => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [currentColor, setCurrentColor] = useState();
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>();

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const product_f = await fetchProductBySlug(slug);
    const products = await fetchProducts({
      category: product?.category?.id,
      limit: 5,
    });
    setProducts(products.products);
    setProduct(product_f);
  };

  return (
    <div>
      <Breadcrumbs
        className={twMerge("my-10", latoRegular.className)}
        size="md"
        variant={"light"}
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
        <BreadcrumbItem>{product?.name}</BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid grid-cols-5">
        <div className="col-span-3 h-146 grid grid-cols-5">
          <div className="col-span-4 mr-3 my-2 overflow-hidden relative flex justify-center bg-anitiqueWhite rounded-2xl">
            <Image
              classNames={{
                wrapper: "w-full h-full",
              }}
              className="w-full h-full"
              src={product?.images ? product?.images[currentImage].url : ""}
              alt="product image"
            />
          </div>

          <div className="col-span-1 h-146 grid grid-rows-4 mr-6 relative">
            {product?.images?.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className="row-span-1 relative m-2 flex justify-center bg-anitiqueWhite rounded-2xl"
              >
                <Image
                  classNames={{
                    wrapper: "w-full h-full",
                  }}
                  className="w-full h-full"
                  src={product?.images ? product?.images[index].url : ""}
                  alt="product image"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-2 ml-8">
          <div className="max-w-sm">
            <h1
              className={twMerge(
                cormorantMedium.className,
                "text-textPrimary text-4xl text-start mt-3"
              )}
            >
              {product?.name}
            </h1>

            <div className="flex gap-1 mt-3">
              <h3
                className={twMerge(
                  latoRegular.className,
                  "text-textSecondary text-xs text-start"
                )}
              >
                {"Category:"}
              </h3>
              <h3
                className={twMerge(
                  latoRegular.className,
                  "text-textPrimary text-xs text-start"
                )}
              >
                {product?.category?.name.toLowerCase()}
              </h3>
            </div>

            <div className="mt-8">
              <p
                className={twMerge(
                  latoRegular.className,
                  "text-textSecondary text-base text-start"
                )}
              >
                {product?.description}
              </p>
            </div>

            <div className="flex gap-6 mt-9">
              <p
                className={twMerge(
                  latoRegular.className,
                  "text-textSecondary text-base text-start"
                )}
              >
                {"Color "}
              </p>

              <div className="flex gap-3 ">
                <ColorButton color="bg-blurEffectGold"></ColorButton>
                <ColorButton color="bg-blurEffect"></ColorButton>
                <ColorButton color="bg-inputSecondary"></ColorButton>
                <ColorButton color="bg-blurEffectWhite"></ColorButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <p
          className={twMerge(
            latoBold.className,
            "text-textPrimary text-base text-start"
          )}
        >
          {"Product Specifications"}
        </p>
        <Table
          className="mt-6"
          defaultSelectedKeys={["2"]}
          aria-label="information table"
          classNames={{
            tbody: "border border-tableBorder500",
          }}
        >
          <TableHeader>
            <TableColumn className="hidden">Specs</TableColumn>
            <TableColumn className="hidden">Info</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow className="border border-tableBorder400" key="1">
              <TableCell
                className={twMerge(
                  "bg-backgroundDecor100 text-textSecondary text-base",
                  latoRegular.className
                )}
              >
                Category
              </TableCell>
              <TableCell
                className={twMerge(
                  "bg-themeWhite text-textPrimary text-base",
                  latoRegular.className
                )}
              >
                {product?.category?.name}
              </TableCell>
            </TableRow>
            <TableRow className="border border-tableBorder400" key="1">
              <TableCell
                className={twMerge(
                  "bg-backgroundDecor100 text-textSecondary text-base",
                  latoRegular.className
                )}
              >
                SKU
              </TableCell>
              <TableCell
                className={twMerge(
                  "bg-themeWhite text-textPrimary text-base",
                  latoRegular.className
                )}
              >
                {product?.specification?.sku}
              </TableCell>
            </TableRow>
            <TableRow className="border border-tableBorder400" key="1">
              <TableCell
                className={twMerge(
                  "bg-backgroundDecor100 text-textSecondary text-base",
                  latoRegular.className
                )}
              >
                Tag
              </TableCell>
              <TableCell
                className={twMerge(
                  "bg-themeWhite text-textPrimary text-base",
                  latoRegular.className
                )}
              >
                {product?.specification?.tags}
              </TableCell>
            </TableRow>
            <TableRow className="border border-tableBorder400" key="1">
              <TableCell
                className={twMerge(
                  "bg-backgroundDecor100 text-textSecondary text-base",
                  latoRegular.className
                )}
              >
                Dimensions (cm)
              </TableCell>
              <TableCell
                className={twMerge(
                  "bg-themeWhite text-textPrimary text-base",
                  latoRegular.className
                )}
              >
                {product?.specification?.dimensions}
              </TableCell>
            </TableRow>
            <TableRow className="border border-tableBorder400" key="1">
              <TableCell
                className={twMerge(
                  "bg-backgroundDecor100 text-textSecondary text-base",
                  latoRegular.className
                )}
              >
                Materials
              </TableCell>
              <TableCell
                className={twMerge(
                  "bg-themeWhite text-textPrimary text-base",
                  latoRegular.className
                )}
              >
                {product?.specification?.materials}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="my-12">
        <h2
          className={twMerge(
            cormorantRegular.className,
            "text-textPrimary text-4xl text-start mt-3"
          )}
        >
          {"You may be interested in"}
        </h2>
        <div className="grid grid-cols-5 mt-8">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              onClick={() => {
                router.push("products/product-detail/" + item.slug);
              }}
              className="col-span-1 m-2"
              src={
                item.images ? item.images[0].url : "/images/demo_product_1.png"
              }
              name={item.name ?? "Product"}
              category={item.specification?.materials ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ColorButton = ({
  color,
  isChosen = false,
  onClick,
}: {
  color: string;
  isChosen?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-full w-6 h-6 border border-textSecondary",
        color,
        isChosen ? "border-3 border-textPrimary" : ""
      )}
    ></button>
  );
};
