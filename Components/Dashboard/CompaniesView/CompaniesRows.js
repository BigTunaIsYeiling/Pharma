"use client";
import { TableCell, TableRow } from "@mui/material";
import { UpdateCompany } from "../UpdateComponents/UpdateCompany";
export const CompaniesRows = ({ indepted, name, index, id }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {index + 1}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{indepted}</TableCell>
      <TableCell align="right">
        <UpdateCompany name={name} indepted={indepted} id={id} />
      </TableCell>
    </TableRow>
  );
};
