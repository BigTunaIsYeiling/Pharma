import ScarcesView from "@/Components/Dashboard/ScarcesView/ScarcesView";
import GetScarces from "@/Lib/GetScarces";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const ProductsData = GetScarces(data.key);
  const products = await ProductsData;
  return <ScarcesView products={products} />;
}
