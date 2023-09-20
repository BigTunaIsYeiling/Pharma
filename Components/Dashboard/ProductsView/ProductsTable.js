"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductsRows from "./ProductsRows";
import { Filters } from "@/Lib/FiltersSlice";
import { useSelector } from "react-redux";
const ProductsTable = ({ products }) => {
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
              المورد
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              الكود
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              عدد الشرائط المتبقيه
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              الحاله
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            .filter((row) => {
              if (filtersOption.product.length === 0) {
                return row;
              } else {
                return row.type.name.includes(filtersOption.product);
              }
            })
            .map((row, i) => (
              <ProductsRows {...row} key={row.id + i + row.barcode} index={i} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ProductsTable;
