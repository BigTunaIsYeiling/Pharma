"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PurchasesRows } from "./PurchasesRows";
import { Filters } from "@/Lib/FiltersSlice";
import { useSelector } from "react-redux";
export const PurchasesTable = ({ purchases }) => {
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
              اسم الشركه
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              تاريخ الطلب
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              السعر الكلي
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
              حذف
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: "relative" }}>
          {purchases
            .filter((row) => {
              if (filtersOption.purchase.length === 0) {
                return row;
              } else {
                return row.company.name.includes(filtersOption.purchase);
              }
            })
            .map((row, i) => (
              <PurchasesRows {...row} key={row.id} index={i} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
