export default async function GetScarces(key) {
  const response = await fetch("http://127.0.0.1:8000/products/scarce/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
