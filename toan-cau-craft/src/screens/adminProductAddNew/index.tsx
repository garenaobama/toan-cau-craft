"use client";
import React from "react";
import { Product } from "@/models/Product";
import { API_ENDPOINT } from "@/utils/Constants";
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
import { Category } from "@/models/Category";
import { Type } from "@/models/Type";

export type AddProductInput = {
  name: string;
  description: string;
  category?: string;
  type?: string;
  slug?: string;
};

const statusObject = [
  {
    key: "active",
    color: "success",
  },
  {
    key: "pause",
    color: "danger",
  },
];

export const AdminProductAddNew = (): React.JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const AddProductSchema = Yup.object().shape({
    name: Yup.string().required("* Bạn cần điền thông tin này"),
    description: Yup.string().required("* Bạn cần điền thông tin này"),
    category: Yup.string().required("* Bạn cần điền thông tin này"),
    type: Yup.string().required("* Bạn cần điền thông tin này"),
  });

  const fetchData = async () => {
    const cates = await fetch(API_ENDPOINT + "/categories");
    const types = await fetch(API_ENDPOINT + "/types");
    const cates_data = await cates.json();
    const types_data = await types.json();
    setCategories(cates_data);
    setTypes(types_data);
  };

  const onSubmit = async (
    values: AddProductInput,
    { setSubmitting, setFieldError, resetForm }: FormikHelpers<AddProductInput>
  ) => {
    try {
      await fetch(API_ENDPOINT+"/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id:"23",
          name: values.name,
          description: values.description,
          category: values.category,
          type: values.type,
          slug: slugify(values.name),
        }),
      });
    } catch (error) {
      console.error("Error adding lesson:", error);
      alert("An error occurred while adding the lesson");
    } finally {
      setSubmitting(false);
    }
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
        <Formik
          initialValues={{
            name: "",
            description: "",
            category: "",
            type: "",
          }}
          validationSchema={AddProductSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
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
                    name="type"
                    className="mt-5 text-xl text-textPrimary"
                    label="Trạng thái (Nếu chọn pause, sản phẩm sẽ chưa hiển thị trên trang khách hàng cho đến khi bạn thay đổi trạng thái của sản phẩm này)"
                    isInvalid={!!errors.type && touched.type}
                    variant="faded"
                    errorMessage={
                      errors.type && touched.type ? errors.type : null
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

              <div className="flex flex-row gap-5 mt-5">
                <Button type="submit" color="primary">
                  Tiếp tục
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
