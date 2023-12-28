"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Cookies from "js-cookie";
import useSWR from "swr";
import { PurchaseElemntsRows } from "./PurchaseElemntsRows";
const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${Cookies.get("key")}`,
    },
  }).then((res) => res.json());
export const PurchaseElementsBody = ({ id }) => {
  const { data, error } = useSWR(
    `http://127.0.0.1:8000/products/?incoming_order=${id}`,
    fetcher
  );
  return (
    <Box>
      <Table size="small">
        <TableHead sx={{ backgroundColor: "#0C356A" }}>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              اسم الصنف
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              عدد العلب
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              السعر
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              باركود
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item, i) => (
              <PurchaseElemntsRows key={item.id} {...item} i={i} />
            ))}
          {data && data.length === 0 && (
            <TableRow>
              <TableCell align="right" colSpan={6}>
                لا يوجد بيانات
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};
