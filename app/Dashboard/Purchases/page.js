import { PurchasesView } from "@/Components/Dashboard/purchasesView/PurchasesView";
import Getcompanies from "@/Lib/GetCompanies";
import GetPurchases from "@/Lib/GetPurchases";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const PurchasesData = GetPurchases(data.key);
  const CompaniesData = Getcompanies(data.key);
  // const purchases = await PurchasesData;
  const [purchases, companies] = await Promise.all([
    PurchasesData,
    CompaniesData,
  ]);
  return <PurchasesView purchases={purchases} companies={companies} />;
}
