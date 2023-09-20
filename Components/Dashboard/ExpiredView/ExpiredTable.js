"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ExRows from "./ExpiredRows";
const ExTable = ({ products }) => {
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
              الكود
            </TableCell>
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              المتبقي
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
        <TableBody sx={{ position: "relative" }}>
          {products.map((row, i) => (
            <ExRows {...row} key={row.id + i + row.barcode} index={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ExTable;
