import ProductsView from "@/Components/Dashboard/ProductsView/ProductsView";
import GetProducts from "@/Lib/GetProducts";
import GetTypes from "@/Lib/GetTypes";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const ProductsData = GetProducts(data.key);
  const TypesData = GetTypes(data.key);
  const [products, types] = await Promise.all([ProductsData, TypesData]);
  return <ProductsView products={products} types={types} />;
}
