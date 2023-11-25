import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { RendredItem } from "./RendredItem";
export const RendredTable = ({ total, items, products, setItems }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxSizing: "border-box",
        // "&.MuiPaper-root": {
        //   boxShadow: "none",
        // },
        height: 317,
        marginY: 2,
        width: 500,
      }}
    >
      <Table
        sx={{
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
            <TableCell
              align="right"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              المنتج
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
              سعر الوحده
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
              حذف
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length > 0 &&
            items.map((item) => (
              <RendredItem
                products={products}
                key={item.product.id}
                amount={item.amount}
                id={item.product.id}
                setItems={setItems}
              />
            ))}
          {items.length > 0 && total && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{total}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
