import { CompaniesView } from "@/Components/Dashboard/CompaniesView/CompaniesView";
import Getcompanies from "@/Lib/GetCompanies";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const CompaniesData = Getcompanies(data.key);
  const companies = await CompaniesData;
  return <CompaniesView companies={companies} />;
}
