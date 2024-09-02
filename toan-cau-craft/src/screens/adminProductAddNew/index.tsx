"use client";
import React from "react";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { latoRegular } from "@/fonts";
import * as Yup from "yup";
import { twMerge } from "tailwind-merge";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import slugify from "slugify";
import { Category, fetchCategories } from "@/models/Category";
import { fetchTypes, Type } from "@/models/Type";
import { addProducts } from "@/models/Product";
import { AddingImageButton, ExportDataImage } from "./AddingImageButton";
import { PlusCircle } from "lucide-react";
import ModalCommon from "@/components/Modals/ModalCommon";
import Lottie from "react-lottie";
import { LottieApp } from "@/utils/lotties";
import { handleUploadImage } from "@/utils/CloudStorage";
import { statusObject } from "@/utils/constants";

export type AddProductInput = {
  name: string;
  description: string;
  category?: string;
  type?: string;
  slug?: string;
  status?: string
};

export const AdminProductAddNew = (): React.JSX.Element => {
  const responseModal = useDisclosure();

  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [images, setImages] = useState<ExportDataImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [responseMessage, setResponseMessage] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  const AddProductSchema = Yup.object().shape({
    name: Yup.string().required("* Bạn cần điền thông tin này"),
    description: Yup.string().required("* Bạn cần điền thông tin này"),
    category: Yup.string().required("* Bạn cần điền thông tin này"),
    type: Yup.string().required("* Bạn cần điền thông tin này"),
    status: Yup.string().required("* Bạn cần điền thông tin này"),
  });

  const fetchData = async () => {
    const cates = await fetchCategories();
    const types = await fetchTypes();

    setCategories(cates);
    setTypes(types);
  };

  const onSubmit = async (
    values: AddProductInput,
    { setSubmitting }: FormikHelpers<AddProductInput>
  ) => {
    responseModal.onOpen();
    setIsLoading(true);
    setResponseMessage("Đang tải ảnh lên bộ nhớ đám mây");
    const imagesUpload = await handleUploadImage({ images: images });

    setResponseMessage("Đang cập nhật dữ liệu mới");
    await addProducts({
      product: {
        name: values.name,
        description: values.description,
        category: values.category ?? "",
        type: values.type ?? "",
        slug: slugify(values.name, {
          lower: true,
        }),
        updateAt: new Date().toISOString(),
        createAt: new Date().toISOString(),
        status: "active",
        images: imagesUpload,
      },
    }).then((data) => {
      if (data.data) {
        setIsLoading(false);
        setIsSuccess(true);
        setResponseMessage("Thêm mới thành công");
        setTimeout(() => {
          responseModal.onClose();
        }, 2000);
      } else if (data.error) {
        setResponseMessage("Có lỗi xảy ra: \n" + data.error);
      }
    });
    setSubmitting(false);
  };

  const onImagesUploadPreview = (
    { image, name, color }: ExportDataImage,
    index: number
  ) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = { ...updatedImages[index], image, color, name };
      return updatedImages;
    });
  };

  const resetState = () => {
    setIsLoading(false);
    setResponseMessage("Vui lòng đợi...");
  };

  const onDeleteImageField = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="p-5">
      <Breadcrumbs>
        <BreadcrumbItem>Trang chủ</BreadcrumbItem>
        <BreadcrumbItem>Quản lí sản phẩm</BreadcrumbItem>
        <BreadcrumbItem>Thêm sản phẩm mới</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex justify-between mt-3">
        <h1
          className={twMerge(
            "text-textPrimary text-3xl",
            latoRegular.className
          )}
        >
          Thêm sản phẩm mới
        </h1>
      </div>

      <div className="mt-5">
        <h2
          className={twMerge(
            "text-textPrimary text-xl my-3",
            latoRegular.className
          )}
        >
          I. Thông tin cơ bản
        </h2>
        <Formik
          initialValues={{
            name: "",
            description: "",
            category: "",
            type: "",
            status: "active"
          }}
          validationSchema={AddProductSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name">
                {({ field }: FieldProps) => (
                  <Input
                    {...field}
                    classNames={{
                      label: "text-textSecondary mb-3",
                      base: "bg-black flex gap-5",
                      input: "placeholder:text-textTertiary text-xl",
                      description: "text-textTertiary",
                    }}
                    className="text-textPrimary"
                    name="name"
                    size="lg"
                    isInvalid={errors.name && touched.name ? true : false}
                    label="Tên sản phẩm"
                    variant="faded"
                    errorMessage={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                )}
              </Field>

              <Field name="description">
                {({ field }: FieldProps) => (
                  <Textarea
                    {...field}
                    classNames={{
                      label: "text-textSecondary mb-3",
                      base: "bg-black flex gap-5",
                      input: "placeholder:text-textTertiary text-xl",
                      description: "text-textTertiary",
                    }}
                    name="description"
                    className="mt-5 text-xl text-textPrimary"
                    label="Mô tả cho sản phẩm"
                    isInvalid={!!errors.description && touched.description}
                    variant="faded"
                    errorMessage={
                      errors.description && touched.description
                        ? errors.description
                        : null
                    }
                  />
                )}
              </Field>

              <Field name="category">
                {({ field }: FieldProps) => (
                  <Select
                    {...field}
                    classNames={{
                      label: "text-textSecondary mb-3",
                      base: "bg-black flex gap-5",
                      description: "text-textTertiary",
                    }}
                    name="category"
                    className="mt-5 text-xl text-textPrimary"
                    label="Category/Phân loại 1"
                    isInvalid={!!errors.category && touched.category}
                    variant="faded"
                    errorMessage={
                      errors.category && touched.category
                        ? errors.category
                        : null
                    }
                  >
                    {categories && categories.length > 0 ? (
                      categories.map((item) => (
                        <SelectItem className="text-textPrimary" key={item.id}>
                          {item.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem key="n/a">N/A</SelectItem>
                    )}
                  </Select>
                )}
              </Field>

              <Field name="type">
                {({ field }: FieldProps) => (
                  <Select
                    {...field}
                    classNames={{
                      label: "text-textSecondary mb-3",
                      base: "bg-black flex gap-5",
                      description: "text-textTertiary",
                    }}
                    name="type"
                    className="mt-5 text-xl text-textPrimary"
                    label="Type/Phân loại 2"
                    isInvalid={!!errors.type && touched.type}
                    variant="faded"
                    errorMessage={
                      errors.type && touched.type ? errors.type : null
                    }
                  >
                    {types && types.length > 0 ? (
                      types.map((item) => (
                        <SelectItem className="text-textPrimary" key={item.id}>
                          {item.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem key="n/a">N/A</SelectItem>
                    )}
                  </Select>
                )}
              </Field>

              <Field name="status">
                {({ field }: FieldProps) => (
                  <Select
                    {...field}
                    items={statusObject}
                    defaultSelectedKeys={["active"]}
                    classNames={{
                      label: "text-textSecondary mb-3",
                      base: "bg-black flex gap-5",
                      description: "text-textTertiary",
                    }}
                    name="status"
                    className="mt-5 text-xl text-textPrimary"
                    label="Trạng thái (Nếu chọn pause, sản phẩm sẽ chưa hiển thị trên trang khách hàng cho đến khi bạn thay đổi trạng thái của sản phẩm này)"
                    isInvalid={!!errors.status && touched.status}
                    variant="faded"
                    errorMessage={
                      errors.status && touched.status ? errors.status : null
                    }
                    renderValue={(items) => {
                      return items.map((item) => (
                        <p key={item.key}>{item.key}</p>
                      ));
                    }}
                  >
                    <SelectItem value={"active"} key={"active"}>
                      <p className="text-danger-500">active</p>
                    </SelectItem>
                    <SelectItem value={"pause"} key={"pause"}>
                      <p className="text-success-500">pause</p>
                    </SelectItem>
                  </Select>
                )}
              </Field>

              <div className="mt-5">
                <h2
                  className={twMerge(
                    "text-textPrimary text-xl my-3",
                    latoRegular.className
                  )}
                >
                  II. Hình ảnh sản phẩm
                </h2>
                {images.map((item, index) => (
                  <div key={index} className="my-2">
                    <AddingImageButton
                      onDelete={() => onDeleteImageField(index)}
                      onImagesUploadPreview={({ image, color }) =>
                        onImagesUploadPreview({ image, color }, index)
                      }
                      key={index}
                    />
                  </div>
                ))}

                <Button
                  className="my-3"
                  onClick={() =>
                    setImages([
                      ...images,
                      {
                        image: undefined,
                        color: "",
                      },
                    ])
                  }
                >
                  <p>Add images</p>
                  <PlusCircle color="green"></PlusCircle>
                </Button>
              </div>

              <div className="flex flex-row gap-5 mt-5">
                <Button type="submit" color="primary">
                  Tiếp tục
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <ModalCommon onCloseModal={resetState} disclosure={responseModal}>
        <p className="text-textPrimary text-xl my-5">{responseMessage}</p>
        {isLoading ? (
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
        ) : isSuccess ? (
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
    </div>
  );
};
