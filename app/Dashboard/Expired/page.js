import ExpiredView from "@/Components/Dashboard/ExpiredView/ExpiredView";
import GetExpired from "@/Lib/GetExpired";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const ProductsData = GetExpired(data.key);
  const products = await ProductsData;
  return <ExpiredView products={products} />;
}
