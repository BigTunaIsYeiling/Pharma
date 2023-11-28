"use client";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { UpdateType } from "../UpdateComponents/UpdateType";
import { Filters } from "@/Lib/FiltersSlice";
import { useSelector } from "react-redux";
import { HiDocumentRemove } from "react-icons/hi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function TypesRow({
  name,
  number_of_elements,
  i,
  price_per_element,
  boxes_owned,
  id,
  barcode,
}) {
  const filtersOption = useSelector(Filters);
  const router = useRouter();
  const RemoveFromLack = async () => {
    await fetch(`http://127.0.0.1:8000/products/types/${id}/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
      body: JSON.stringify({ lack: false }),
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        return toast.success("تم الازاله من النواقص");
      }
    });
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="right">
        {i + 1}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        {barcode === "" || !barcode ? "----" : barcode}
      </TableCell>
      <TableCell align="right">{number_of_elements}</TableCell>
      <TableCell align="right">{price_per_element}</TableCell>
      <TableCell align="right">{boxes_owned}</TableCell>
      <TableCell align="right">
        <UpdateType
          id={id}
          name={name}
          number_of_elements={number_of_elements}
          price_per_element={price_per_element}
          barcode={barcode}
        />
      </TableCell>
      {filtersOption.lack && (
        <TableCell align="right">
          <IconButton onClick={RemoveFromLack}>
            <HiDocumentRemove color="black" />
          </IconButton>
        </TableCell>
      )}
    </TableRow>
  );
}
