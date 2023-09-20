export default async function GetCustomers(key) {
  const response = await fetch("http://127.0.0.1:8000/orders/customers/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
