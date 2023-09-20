"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CompaniesRows } from "./CompaniesRows";
import { Filters } from "@/Lib/FiltersSlice";
import { useSelector } from "react-redux";
export const CompaniesTable = ({ companies }) => {
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
              الاسم
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              المبلغ المستحق
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
        <TableBody sx={{ position: "relative" }}>
          {companies
            .filter((row) => {
              if (filtersOption.company.length === 0) {
                return row;
              } else {
                return row.name.includes(filtersOption.company);
              }
            })
            .map((row, i) => (
              <CompaniesRows {...row} key={row.id} index={i} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
