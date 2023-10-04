import { TableCell, TableRow } from "@mui/material";
import { DeletePayment } from "../DeleteComponents/DeletePayment";
export const CustomerPayments = ({ id, paid, time, i }) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {i}
      </TableCell>
      <TableCell align="right">{paid}</TableCell>
      <TableCell align="right">{`${year} / ${month} / ${day}`}</TableCell>
      <TableCell align="right">
        <DeletePayment id={id} />
      </TableCell>
    </TableRow>
  );
};
