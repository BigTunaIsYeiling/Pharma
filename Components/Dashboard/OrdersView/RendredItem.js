import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import toast from "react-hot-toast";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";
export const RendredItem = ({ id, products, amount, setItems }) => {
  const productData = products.find((product) => product.id === id);
  const handleAdd = () => {
    return setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === id) {
          return {
            ...item,
            amount: amount + 1,
            price: productData.price_per_element * (amount + 1),
          };
        } else {
          return item;
        }
      })
    );
  };
  const handleRemove = () => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === id || amount == 1) {
          return {
            ...item,
            amount: amount - 1,
            price: productData.price_per_element * (amount - 1),
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="right">{productData.name}</TableCell>
      <TableCell align="right">
        <Stack direction={"row"} alignItems={"center"}>
          <Stack direction={"column"} alignItems={"center"}>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="contained"
            >
              <Button
                size="small"
                color="success"
                onClick={handleAdd}
                disabled={amount + 1 > productData.owned_elements}
              >
                <IoIosAdd />
              </Button>
              <Button
                size="small"
                color="error"
                disabled={amount == 1}
                onClick={handleRemove}
              >
                <IoIosRemove />
              </Button>
            </ButtonGroup>
          </Stack>
          <Box marginRight={2}>{amount}</Box>
        </Stack>
      </TableCell>
      <TableCell align="right">{productData.price_per_element}</TableCell>
      <TableCell align="right">
        {productData.price_per_element * amount}
      </TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => {
            return setItems((prev) =>
              prev.filter((item) => item.product.id !== id)
            );
          }}
        >
          <RiDeleteBin2Line color="red" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
