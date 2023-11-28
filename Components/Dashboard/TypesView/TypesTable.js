"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TypesRow from "./TypesRows";
import { useSelector } from "react-redux";
import { Filters } from "@/Lib/FiltersSlice";
const TypesTable = ({ types }) => {
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
              اسم الصنف
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              باركود
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              عدد الشرائط
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
              الكميه
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              تعديل
            </TableCell>
            {filtersOption.lack && (
              <TableCell
                align="right"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                ازاله من النواقص
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {types
            .filter((row) => {
              if (filtersOption.type.length === 0) {
                return row;
              } else {
                return row.name.includes(filtersOption.type);
              }
            })
            .filter((row) => {
              if (filtersOption.typeBarcode.length === 0) {
                return row;
              } else {
                return row.barcode?.includes(filtersOption.typeBarcode);
              }
            })
            .filter((row) => {
              if (filtersOption.lack === false) {
                return row;
              } else {
                return row.lack;
              }
            })
            .map((row, i) => (
              <TypesRow key={row.id} {...row} i={i} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TypesTable;
