"use client";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { Type } from "@/models/Type";
import { Chip, Tooltip } from "@nextui-org/react";
import { Delete, Edit, Eye } from "lucide-react";
import React from "react";

const statusColorMap: { [key: string]: string } = {
  active: "success",
  paused: "danger",
};

interface Props {
  product: Product;
  columnKey: string | React.Key;
}

export const renderCell = ({ product, columnKey }: Props) => {
  const cellValue = product[columnKey];

  switch (columnKey) {
    case "category": {
      const valueCate = cellValue as Category;
      return (
        <div className="flex flex-col">
          <p className="text-textPrimary">{valueCate.name + ""}</p>
        </div>
      );
    }
    case "type": {
        const valueType = cellValue as Type;
        return (
          <div className="flex flex-col">
            <p className="text-textPrimary">{valueType.name + ""}</p>
          </div>
        );
      }
    case "status":
      return (
        <Chip
          className="capitalize"
          color={statusColorMap[product.status]}
          size="sm"
          variant="flat"
        >
          <p>{cellValue}</p>
        </Chip>
      );
    case "actions":
      return (
        <div className="relative flex items-center justify-center gap-2">
          <Tooltip color="success" content="Xem chi tiết">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <Eye color="red" />
            </span>
          </Tooltip>
          <Tooltip color="success" content="Chỉnh sửa sản phẩm">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <Edit color="green" />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Xoá sản phẩm">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <Delete />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return (
        <div className="flex flex-col">
          <p className="text-textPrimary">{cellValue + ""}</p>
        </div>
      );
  }
};
