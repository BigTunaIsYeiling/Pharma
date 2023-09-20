export default async function GetOrders(key) {
  const response = await fetch("http://127.0.0.1:8000/orders/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
