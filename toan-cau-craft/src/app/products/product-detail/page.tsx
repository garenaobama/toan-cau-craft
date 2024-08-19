import { MainLayout } from "@/components";
import { ProductDetail } from "@/screens";

export const ProductDetailPage = (): React.JSX.Element => {
  return (
    <main>
      <MainLayout>
        <ProductDetail />
      </MainLayout>
    </main>
  );
};
