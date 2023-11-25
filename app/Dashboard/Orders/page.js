import OrdersView from "@/Components/Dashboard/OrdersView/OrdersView";
import GetCustomers from "@/Lib/GetCustomers";
import GetOrders from "@/Lib/GetOrders";
import GetTypes from "@/Lib/GetTypes";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const OrdersData = GetOrders(data.key);
  const CustomersData = GetCustomers(data.key);
  const ProductsData = GetTypes(data.key);
  const [orders, customers, products] = await Promise.all([
    OrdersData,
    CustomersData,
    ProductsData,
  ]);
  return <OrdersView orders={orders} customers={customers} products={products} user={data.user} />;
}
