"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
export async function Login(data) {
  const username = data.get("username");
  const password = data.get("password");
  const response = await fetch("http://127.0.0.1:8000/accounts/login/", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const res = await response.json();
  if (res.accessToken) {
    cookies().set("accessToken", res.accessToken);
    redirect("/Dashboard/Types");
  }
  return res;
}

export async function AddTypeAction(data) {
  const price = data.get("price");
  const name = data.get("name");
  const elements = data.get("elements");
  const barcode = data.get("barcode");
  const response = await fetch("http://127.0.0.1:8000/products/types/", {
    method: "POST",
    body: JSON.stringify({
      name,
      number_of_elements: elements,
      price_per_element: price,
      barcode,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  revalidatePath("/Dashboard/Types");
  return res;
}

export async function AddCustomerAction(data) {
  const dept = data.get("dept");
  const name = data.get("name");
  const response = await fetch("http://127.0.0.1:8000/orders/customers/", {
    method: "POST",
    body: JSON.stringify({
      name,
      dept,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  revalidatePath("/Dashboard/Customers");
  return res;
}
export async function AddCcompanyAction(data) {
  const name = data.get("name");
  const response = await fetch("http://127.0.0.1:8000/finance/companies/", {
    method: "POST",
    body: JSON.stringify({
      name,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  revalidatePath("/Dashboard/Companies");
  return res;
}
export async function AddScarceAction(data) {
  const name = data.get("name");
  const amount = data.get("amount");
  const response = await fetch("http://127.0.0.1:8000/products/scarce/", {
    method: "POST",
    body: JSON.stringify({
      name,
      amount,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  revalidatePath("/Dashboard/Scarce");
  return res;
}

export async function AddProductAction(data) {
  const barcode = data.get("barcode");
  const expiration = data.get("expiration");
  const type = data.get("type");
  const response = await fetch("http://127.0.0.1:8000/products/", {
    method: "POST",
    body: JSON.stringify({
      type,
      barcode,
      expiration,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  revalidatePath("/Dashboard/Products");
  return res;
}
export async function AddPurchaseAction(data) {
  const company = data.get("company");
  const paid = data.get("paid");
  const price = data.get("price");
  const response = await fetch(
    "http://127.0.0.1:8000/finance/incoming_orders/",
    {
      method: "POST",
      body: JSON.stringify({
        company,
        price,
        paid: paid,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("key").value}`,
      },
    }
  );
  const res = await response.json();
  revalidatePath("/Dashboard/Purchases");
  return res;
}
export async function AddUserAction(data) {
  const username = data.get("username");
  const password = data.get("password");
  const first_name = data.get("first_name");
  const last_name = data.get("last_name");
  const is_admin = data.get("is_admin");
  const response = await fetch("http://127.0.0.1:8000/accounts/", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      first_name,
      last_name,
      is_admin,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("key").value}`,
    },
  });
  const res = await response.json();
  return res;
}
