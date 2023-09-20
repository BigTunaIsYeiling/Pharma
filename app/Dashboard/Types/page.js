import TypesView from "@/Components/Dashboard/TypesView/TypesView";
import GetTypes from "@/Lib/GetTypes";
import { verifyAccess } from "@/Lib/VerifyAccess";
export default async function page() {
  const data = await verifyAccess();
  const TypesData = GetTypes(data.key);
  const Types = await TypesData;
  return <TypesView types={Types} />;
}
