import { useAuth } from "../../src/components/commons/hooks/auth/useAuth";
import ProductDetail from "../../src/components/units/products/detail/ProductDetail";

export default function ProductDetailPage() {
  useAuth();
  return (
    <>
      <ProductDetail />
    </>
  );
}
