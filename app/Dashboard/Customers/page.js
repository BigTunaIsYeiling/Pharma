import CustomersView from "@/Components/Dashboard/CustomersView/CustomersView";
import GetCustomers from "@/Lib/GetCustomers";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const CustomersData = GetCustomers(data.key);
  const customers = await CustomersData;
  return <CustomersView customers={customers} />;
}
