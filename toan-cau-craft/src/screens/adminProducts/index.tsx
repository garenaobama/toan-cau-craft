"use client";
import { latoRegular } from "@/fonts";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { renderCell } from "./RenderCell";
import { columns, Product } from "@/models/Product";

export const AdminProducts = (): React.JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(
      "https://toan-cau-craft-backend.vercel.app/products"
    );
    const products = await data.json();
    setProducts(products);
  };

  return (
    <div className="p-5">
      <h1
        className={twMerge("text-textPrimary text-3xl", latoRegular.className)}
      >
        Quản lý sản phẩm
      </h1>

      <Table className="mt-5" aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell({
                    product: item,
                    columnKey: columnKey,
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
