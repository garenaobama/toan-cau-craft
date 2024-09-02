"use client";
import { latoRegular } from "@/fonts";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
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
import { columns, fetchProducts, Product } from "@/models/Product";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const AdminProducts = (): React.JSX.Element => {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchInitProducts();
  }, []);

  const fetchInitProducts = async () => {
    const products = await fetchProducts();
    setProducts(products);
  };

  return (
    <div className="p-5">
      <Breadcrumbs>
        <BreadcrumbItem>Trang chủ</BreadcrumbItem>
        <BreadcrumbItem>Quản lí sản phẩm</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex justify-between mt-3">
        <h1
          className={twMerge(
            "text-textPrimary text-3xl",
            latoRegular.className
          )}
        >
          Quản lý sản phẩm
        </h1>
        <Button onClick={()=>{router.push('products/add-new')}} type="button" color="success">
          <h3>Thêm sản phẩm</h3>
          <Plus size={25} />
        </Button>
      </div>

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
                    onGoUpdate: (slug) => {router.push('/admin/products/update/'+slug)}
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
