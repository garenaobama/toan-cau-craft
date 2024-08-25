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
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import NextImage from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/navigation";

export const ProductDetail = (): React.JSX.Element => {
  const [currentImage, setCurrentImage] = useState();
  const [currentColor, setCurrentColor] = useState();
  const router = useRouter();

  return (
    <div>
      <Breadcrumbs
        className={twMerge("my-10", latoRegular.className)}
        size="md"
        variant={"light"}
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Type</BreadcrumbItem>
        <BreadcrumbItem>Product name</BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid grid-cols-5">
        <div className="col-span-3 h-146 grid grid-cols-5">
          <div className="col-span-4 mr-3 my-2 overflow-hidden relative">
            <NextImage
              className="w-full absolute"
              fill
              objectFit="cover"
              src="/images/demo_product_1.png"
              alt="product image"
            />
          </div>

          <div className="col-span-1 h-146 grid grid-rows-4 mr-6 relative">
            <div className="row-span-1 relative m-2">
              <NextImage
                fill
                src="/images/demo_product_1.png"
                alt="product image"
              />
            </div>
            <div className="row-span-1 relative m-2">
              <NextImage
                fill
                src="/images/demo_product_1.png"
                alt="product image"
              />
            </div>
            <div className="row-span-1 relative m-2">
              <NextImage
                fill
                src="/images/demo_product_1.png"
                alt="product image"
              />
            </div>
            <div className="row-span-1 relative m-2">
              <NextImage
                fill
                src="/images/demo_product_1.png"
                alt="product image"
              />
            </div>
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
              {"Plate"}
            </h1>

            <div className="flex gap-1 mt-2">
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
                {"Recycled rubber products"}
              </h3>
            </div>

            <div className="mt-8">
              <p
                className={twMerge(
                  latoRegular.className,
                  "text-textSecondary text-base text-start"
                )}
              >
                {
                  "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis in exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” "
                }
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
                New Products
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
                002
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
                Flower
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
                40x26xH6cm{" "}
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
                Pottery
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
        <div className="grid grid-cols-4 mt-8">
          <ProductCard
            onClick={() => {
              router.push("product-detail/demo-product-1");
            }}
            className="col-span-1 m-4"
            src="/images/demo_product_1.png"
            name="Olpe"
            category="Ceramic"
          />
          <ProductCard
            onClick={() => {
              router.push("product-detail/demo-product-1");
            }}
            className="col-span-1 m-4"
            src="/images/demo_product_2.png"
            name="Olpe"
            category="Ceramic"
          />
          <ProductCard
            onClick={() => {
              router.push("product-detail/demo-product-1");
            }}
            className="col-span-1 m-4"
            src="/images/demo_product_3.png"
            name="Olpe"
            category="Ceramic"
          />
          <ProductCard
            onClick={() => {
              router.push("product-detail/demo-product-1");
            }}
            className="col-span-1 m-4"
            src="/images/demo_product_4.png"
            name="Olpe"
            category="Ceramic"
          />
          {/* <ProductCard
            onClick={() => {
              router.push("product-detail/demo-product-1");
            }}
            className="col-span-1 m-4"
            src="/images/demo_product_4.png"
            name="Olpe"
            category="Ceramic"
          /> */}
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
