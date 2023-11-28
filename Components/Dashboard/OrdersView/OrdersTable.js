"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderRows from "./OrdersRows";
import { Filters } from "@/Lib/FiltersSlice";
import { useSelector } from "react-redux";
const OrdersTable = ({ orders, customers, products, admin }) => {
  const filtersOption = useSelector(Filters);
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "100vw",
        maxHeight: "100%",
        paddingRight: { xs: "0", sm: "65px" },
        boxSizing: "border-box",
        "&.MuiPaper-root": {
          boxShadow: "none",
        },
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          "& .MuiTableRow-root:last-child td , & .MuiTableRow-root:last-child th":
            {
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            },
        }}
      >
        <TableHead
          sx={{
            backgroundColor: "#f9f9f9",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
          className="StableHead"
        >
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              العميل
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              بواسطه
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              التاريخ
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              الوقت
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              السعر
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              المدفوع
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              عناصر
            </TableCell>
            {admin && (
              <TableCell
                align="right"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                تعديل
              </TableCell>
            )}
            {admin && (
              <TableCell
                align="right"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                حذف
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: "relative" }}>
          {orders
            .filter((row) => {
              if (filtersOption.orderName.length === 0) {
                return row;
              } else {
                return row.customer?.name.includes(filtersOption.orderName);
              }
            })
            .filter((row) => {
              if (filtersOption.orderDate) {
                return row.time.startsWith(filtersOption.orderDate);
              } else {
                return row;
              }
            })
            .map((row, i) => (
              <OrderRows
                key={row.id}
                {...row}
                i={i}
                customers={customers}
                products={products}
                admin={admin}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OrdersTable;
