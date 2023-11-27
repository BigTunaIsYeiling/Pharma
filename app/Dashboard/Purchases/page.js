import { PurchasesView } from "@/Components/Dashboard/purchasesView/PurchasesView";
import Getcompanies from "@/Lib/GetCompanies";
import GetPurchases from "@/Lib/GetPurchases";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const PurchasesData = GetPurchases(data.key);
  const CompaniesData = Getcompanies(data.key);
  const UserData = verifyAccess(data.key);
  // const purchases = await PurchasesData;
  const [purchases, companies, user] = await Promise.all([
    PurchasesData,
    CompaniesData,
    UserData,
  ]);
  return (
    <PurchasesView
      purchases={purchases}
      companies={companies}
      admin={user.user.is_admin}
    />
  );
}
