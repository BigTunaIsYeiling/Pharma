export default async function GetExpired(key) {
    const response = await fetch("http://127.0.0.1:8000/products/about_to_expire", {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });
    return response.json();
  }
  