"use client";
import Cookies from "js-cookie";

export const SignCookie = ({ token }) => {
  const cookie = Cookies.get("key");
  if (cookie) return false;
  Cookies.set("key", token);
  return true;
};
