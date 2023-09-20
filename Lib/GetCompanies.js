export default async function Getcompanies(key) {
  const response = await fetch("http://127.0.0.1:8000/finance/companies/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
