"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomersRows from "./CustomersRows";
import { useSelector } from "react-redux";
import { Filters } from "@/Lib/FiltersSlice";
const CustomersTable = ({ customers }) => {
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
        >
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              الاسم
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              مبلغ الدين
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              سجل الدفع
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              تسجيل حاله دفع
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              تعديل
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            .filter((row) => {
              if (filtersOption.customer.length === 0) {
                return row;
              } else {
                return row.name.includes(filtersOption.customer);
              }
            })
            .map((row, i) => (
              <CustomersRows {...row} key={row.id} i={i} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CustomersTable;
