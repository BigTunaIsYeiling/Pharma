import { cookies } from "next/headers";

export async function verifyAccess() {
  const response = await fetch("http://127.0.0.1:8000/accounts/login/verify/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessToken: cookies().get("accessToken").value,
    }),
  });
  if (response.status !== 200) {
    return {
      error: true,
    };
  }
  const res = await response.json();
  return res;
}
