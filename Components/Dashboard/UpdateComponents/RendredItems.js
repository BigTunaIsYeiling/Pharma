import { Box, Stack } from "@mui/material";
import { TiDelete } from "react-icons/ti";
export const RendredItems = ({ id, products, amount, setItems }) => {
  const productData = products.find((product) => product.id === id);
  const { type } = productData;
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
    >
      <Box>
        x{amount} {type.name}
      </Box>
      <Box>{type.price_per_element * amount}</Box>
      <Box
        component={TiDelete}
        color={"red"}
        sx={{ position: "absolute", left: "-30px", cursor: "pointer" }}
        onClick={() => {
          setItems((prev) => prev.filter((item) => item.product.id !== id));
        }}
      />
    </Stack>
  );
};
