import { useAuth } from "../../src/components/commons/hooks/auth/useAuth";
import ProductWrite from "../../src/components/units/products/write/ProductWrite";

export default function ProductWritePage() {
  useAuth();
  return (
    <>
      <ProductWrite />
    </>
  );
}
