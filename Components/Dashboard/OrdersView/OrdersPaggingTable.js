import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { Filters } from "@/Lib/FiltersSlice";
import OrderRows from "./OrdersRows";
export const OrdersPagingTable = ({ orders, customers, products, admin }) => {
  const filtersOption = useSelector(Filters);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [OrdersLength, setOrdersLenght] = React.useState(orders.length);
  React.useEffect(() => {
    const length = orders
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
      }).length;
    setOrdersLenght(length);
  }, [filtersOption]);
  return (
    <Paper
      sx={{
        maxWidth: "100vw",
        paddingRight: { xs: "0", sm: "65px" },
        boxSizing: "border-box",
        "&.MuiPaper-root": {
          boxShadow: "none",
        },
      }}
    >
      <TableContainer sx={{ maxHeight: { xs: 495, sm: 560 } }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
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
                if (filtersOption.filterOrderUser.length === 0) {
                  return row;
                } else {
                  const fullName =
                    `${row.user.first_name} ${row.user.last_name}`.toLowerCase();
                  return fullName.includes(filtersOption.filterOrderUser);
                }
              })
              .filter((row) => {
                if (filtersOption.orderDate) {
                  return row.time.startsWith(filtersOption.orderDate);
                } else {
                  return row;
                }
              })
              .filter((row, index) => {
                return (
                  index >= page * rowsPerPage &&
                  index < page * rowsPerPage + rowsPerPage
                );
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={OrdersLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ direction: "ltr" }}
      />
    </Paper>
  );
};
