export default async function GetAccounts(key) {
  const response = await fetch("http://127.0.0.1:8000/accounts/", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
}
