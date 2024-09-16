"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { TopBanner } from "@/components/TopBanner";
import { cormorantSemiBold, latoRegular } from "@/fonts";
import { twMerge } from "tailwind-merge";
import { FilterBox } from "./FilterBox";
import PaginationApp from "@/components/PaginationApp";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchProducts, FetchProductsParams, Product } from "@/models/Product";
import { Category, fetchCategories } from "@/models/Category";
import { fetchTypes, Type } from "@/models/Type";
import { SearchBox } from "@/components/SearchBox";
import { SlidersHorizontal, X } from "lucide-react";
import { asyncState } from "@/utils/constants";
import { ProductSkeletonCard } from "@/components";
import { getBannerByType } from "@/models/Banner";

export const Products = (): React.JSX.Element => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [totalItems, setTotalItem] = useState<number>(1);
  const [state, setState] = useState<string>(asyncState.loading);
  const [banner, setBanner] = useState();
  const getBanner = async () => {
    const data = await getBannerByType('product') as any;
    
    setBanner(data?.data?.url || "/images/products.png"); 
  }

  useEffect(() => {
    getBanner();
  }, [])

  const searchParams = useSearchParams();
  const filterCategory = searchParams.get("category") || undefined;
  const filterType = searchParams.get("type") || undefined;
  const filterName = searchParams.get("name") || undefined;

  const topProductRef = useRef<HTMLDivElement>(null);

  const [filter, setFilter] = useState<FetchProductsParams>({
    page: 1,
    limit: 12,
    category: filterCategory,
    type: filterType,
    name: filterName,
  });

  useEffect(() => {
    fetchInit();
  }, []);

  useEffect(() => {
    handleNavigateFilter();
  }, [filterCategory, filterType, filterName]);

  const handleNavigateFilter = () => {
    setFilter({
      ...filter,
      category: filterCategory,
      type: filterType,
      name: filterName,
    })
  }

  const fetchInit = async () => {
    await fetchProduct();
    const cates = await fetchCategories();
    const types = await fetchTypes();

    setCategories(cates);
    setTypes(types);
  };

  const fetchProduct = async () => {
    setState(asyncState.loading);
    const products = await fetchProducts(filter);
    setProducts(products.products);
    setTotalPage(products.totalPages);
    setTotalItem(products.totalDocs);
    setTimeout(() => {
      setState(asyncState.success);
    }, 500);
  };

  useEffect(() => {
    fetchProduct();
  }, [filter]);


  return (
    <div className="bg-themeWhite">
      <TopBanner
        src={banner || "/images/products.png"}
        h1="Handicraft"
        h2="MADE WITH LOVE"
        description="Lorem ipsum dolor sit amet consectetur. Tempor faucibus sit iaculis arcu felis. Volutpat sollicitudin tortor aliquam maecenas porttitor ac et blandit. Pretium urna at ac purus aliquet mauris. Sit feugiat mattis turpis congue justo."
      />

      <div className="mx-28 my-10 grid grid-cols-3">
        <div className="col-span-1 mr-8 bg-themeWhite h-screen overflow-y-scroll sticky top-0">
          <div className="sticky pt-8 bg-themeWhite top-0 z-10">
            <div className="bg-themeWhite">
              <div className="mb-8">
                <h1
                  className={twMerge(
                    cormorantSemiBold.className,
                    "text-textPrimary text-4xl bg-themeWhite"
                  )}
                >
                  PRODUCTS
                </h1>
              </div>
              <SearchBox
                onSubmit={(keys) =>
                  setFilter({
                    ...filter,
                    name: keys,
                  })
                }
                className="w-full mt-3 bg-themeWhite"
              />
            </div>
            <div className="w-full h-5 bg-white-vertical"></div>
          </div>
          <FilterBox
            onCheck={(id) =>
              setFilter({
                ...filter,
                category: id,
              })
            }
            chosen={filter.category}
            title="Category"
            data={categories.map((item) => ({
              value: item.id,
              key: item.name,
            }))}
          />
          <FilterBox
            onCheck={(id) =>
              setFilter({
                ...filter,
                type: id,
              })
            }
            chosen={filter.type}
            className="mt-4 pb-16"
            title="Type"
            data={types.map((item) => ({ value: item.id, key: item.name }))}
          />
        </div>

        <div className="col-span-2 relative">
          <div className="sticky top-0 z-50 pt-3 rounded-2xl bg-transBlue  backdrop-blur">
            <h3
              className={twMerge(
                latoRegular.className,
                "text-textSecondary text-base pl-2"
              )}
            >
              {totalItems} results
            </h3>

            <div className="flex items-center py-3 p-3 rounded-2xl">
              <SlidersHorizontal className="mr-2" size={15} color="#a6a6a6" />

              {!filter.category && !filter.type && !filter.name && (
                <FilterCard content={`all`} />
              )}

              {filter.category && (
                <FilterCard
                  onRemove={() => setFilter({ ...filter, category: undefined })}
                  content={`Category: ${
                    categories.find((item) => item.id == filter.category)?.name
                  }`}
                />
              )}

              {filter.type && (
                <FilterCard
                  onRemove={() => setFilter({ ...filter, type: undefined })}
                  content={`Type: ${
                    types.find((item) => item.id == filter.type)?.name
                  }`}
                />
              )}

              {filter.name && (
                <FilterCard
                  onRemove={() => setFilter({ ...filter, name: undefined })}
                  content={`Key words: ${
                    filter.name
                  }`}
                />
              )}
            </div>
          </div>

          <div ref={topProductRef}></div>

          <div className="grid grid-cols-3">
            {state === asyncState.success
              ? products.map((item) => (
                  <ProductCard
                    key={item.id}
                    onClick={() => {
                      router.push("products/product-detail/" + item.slug);
                    }}
                    className="col-span-1 m-2"
                    src={
                      item.images
                        ? item.images[0].url
                        : "/images/demo_product_1.png"
                    }
                    name={item.name ?? "Product"}
                    category={item.specification?.materials ?? ""}
                  />
                ))
              : Array.from({ length: 12 }).map((_, index) => (
                  <ProductSkeletonCard key={index} />
                ))}
          </div>
          <div className="mt-10">
            <PaginationApp
              setPage={(page) => {
                setFilter({
                  ...filter,
                  page,
                });
              }}
              total={totalPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterCard = ({
  content,
  onRemove,
}: {
  content: string;
  onRemove?: () => void;
}) => {
  return (
    <div className="flex items-center border border-default-400 rounded-lg p-1 mr-2">
      <p className={twMerge(latoRegular.className, "text-default-500 text-sm")}>
        {content}
      </p>
      {onRemove && (
        <button onClick={onRemove}>
          <X size={15} color="#a6a6a6"></X>
        </button>
      )}
    </div>
  );
};
