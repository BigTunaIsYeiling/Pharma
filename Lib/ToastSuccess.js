"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";
export const ToastSuccess = ({ username }) => {
  useEffect(() => {
    toast.success(`${username} مرحبا`);
  }, [username]);
};
