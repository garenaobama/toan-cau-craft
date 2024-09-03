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
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { renderCell } from "./RenderCell";
import {
  columns,
  deleteProduct,
  fetchProducts,
  Product,
} from "@/models/Product";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie";
import ModalCommon from "@/components/Modals/ModalCommon";
import ModalConfirm, { ModalConfirmRef } from "@/components/Modals/ModalConfirm";
import { asyncState } from "@/utils/constants";
import { LottieApp } from "@/utils/lotties";

export const AdminProducts = (): React.JSX.Element => {
  const router = useRouter();
  const responseModal = useDisclosure();
  const confirmModal = useDisclosure();

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPage, setTotalPAge] = useState<number>(1);
  const [state, setState] = useState<string>(asyncState.loading);
  const [responseMessage, setResponseMessage] = useState<string>();

  const confirmModalRef = useRef<ModalConfirmRef>(null);
  useEffect(() => {
    fetchInitProducts();
  }, []);

  const fetchInitProducts = async () => {
    const products = await fetchProducts({});
    setProducts(products.products);
    setTotalPAge(products.totalPages);
  };

  const handleDeleteProduct = async (id: string) => {
    confirmModal.onOpen()
    confirmModalRef.current?.setOnConfirm(()=>{
      confirmModal.onClose()
      responseModal.onOpen()
      setResponseMessage("Đang xoá sản phẩm...")
      deleteProduct(id).then(()=>{
        let updatedProducts = products;
        if (updatedProducts) {
          updatedProducts = updatedProducts.filter((item) => item.id !== id);
        }
        setProducts(updatedProducts)
        setResponseMessage("Hoàn tất")
        setState(asyncState.success)
        setTimeout(()=> {
          responseModal.onClose()
        },2000)
      }).catch((e)=> {
        setResponseMessage("Gặp lỗi khi xoá sản phẩm: " +e)
        setState(asyncState.error)
      })
    })
  };

  const resetState = () => {
    setState(asyncState.loading);
    setResponseMessage("Vui lòng đợi...");
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
        <Button
          onClick={() => {
            router.push("products/add-new");
          }}
          type="button"
          color="success"
        >
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
                    onGoUpdate: (slug) => {
                      router.push("/admin/products/update/" + slug);
                    },
                    onDelete: (id) => handleDeleteProduct(id),
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <ModalCommon onCloseModal={resetState} disclosure={responseModal}>
        <p className="text-textPrimary text-xl my-5">{responseMessage}</p>
        {state == asyncState.loading ? (
          <Lottie
            style={{ width: 100, height: 100 }}
            options={{
              loop: true,
              autoplay: true,
              animationData: LottieApp.Loading,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled={true}
            width={"100%"}
          />
        ) : state == asyncState.success ? (
          <Lottie
            style={{ width: 100, height: 100 }}
            options={{
              loop: true,
              autoplay: true,
              animationData: LottieApp.Success,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled={true}
            width={"100%"}
          />
        ) : (
          <Lottie
            style={{ width: 100, height: 100 }}
            options={{
              loop: true,
              autoplay: true,
              animationData: LottieApp.Error,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled={true}
            width={"100%"}
          />
        )}
      </ModalCommon>
      <ModalConfirm
        variant={3}
        ref={confirmModalRef}
        disclosure={confirmModal}
      >
        <></>
      </ModalConfirm>
    </div>
  );
};
