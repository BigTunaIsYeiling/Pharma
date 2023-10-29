"use client";
import { Autocomplete, TextField } from "@mui/material";
export default function ProductsSelection({ data, product, setProduct }) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data.filter((prod) => !prod.sold)}
      getOptionLabel={(option) => option.type.name}
      onChange={(e, newValue) => {
        setProduct(newValue?.id);
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="المنتجات" variant="outlined" />
      )}
      renderOption={(props, option) => <li {...props}>{option.type.name}</li>}
    />
  );
}
