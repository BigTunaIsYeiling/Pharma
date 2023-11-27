import { IconButton, TableCell, TableRow } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdAddCircle } from "react-icons/md";
export const OrderItems = ({ product, index, amount, remaining, price }) => {
  const router = useRouter();
  const AddtoLack = async () => {
    if (product.lack === true) {
      return toast.error("هذا المنتج مضاف بالنواقص");
    }
    await fetch(`http://127.0.0.1:8000/products/types/${product.id}/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("key")}`,
      },
      body: JSON.stringify({ lack: true }),
    }).then((res) => {
      if (res.ok) {
        router.refresh();
        return toast.success("تم الاضافه للنواقص");
      }
    });
  };
  return (
    <TableRow>
      <TableCell align="right">{index + 1}</TableCell>
      <TableCell component="th" scope="row" align="right">
        {product.name}
      </TableCell>
      <TableCell align="right">{amount}</TableCell>
      <TableCell align="right">{remaining}</TableCell>
      <TableCell align="right">{product.price_per_element}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">
        <IconButton onClick={AddtoLack}>
          <MdAddCircle color="black" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
