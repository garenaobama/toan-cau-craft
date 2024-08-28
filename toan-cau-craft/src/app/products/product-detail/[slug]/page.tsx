import React from "react";
import { MainLayout } from "@/components";
import { ProductDetail } from "@/screens";
export default function ProductsDetailPage({ params }: { params: { slug: string } }) {
  console.log(params);
  
  return (
    <main>
      <MainLayout>
        <ProductDetail />
      </MainLayout>
    </main>
  );
}
