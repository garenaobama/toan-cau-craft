import React from "react";
import { AdminHeader } from "../AdminHeader";

type MainLayoutProp = {
  children: React.ReactNode;
};

export const AdminLayout = ({
  children,
}: MainLayoutProp): React.JSX.Element => {
  return (
    <div className="w-full fixed-container grid grid-cols-6 bg-themeWhite h-screen">
      <AdminHeader className="col-span-1 bg-secondary-50"/>
      <div className="col-span-5">{children}</div>
    </div>
  );
};
