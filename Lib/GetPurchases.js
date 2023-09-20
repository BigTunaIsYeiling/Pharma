export default async function GetPurchases(key) {
    const response = await fetch("http://127.0.0.1:8000/finance/incoming_orders/", {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });
    return response.json();
  }
  