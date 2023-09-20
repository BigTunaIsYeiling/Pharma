export default async function GetProducts(key) {
  const response = await fetch("http://127.0.0.1:8000/products/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
