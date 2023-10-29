"use client";
import { Autocomplete, TextField } from "@mui/material";
export default function BasicSelect({ data, setProduct, product }) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      sx={{ width: 204 }}
      getOptionLabel={(option) => option.name}
      onChange={(e, newValue) => {
        setProduct({ ...product, type: newValue?.id });
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="الصنف" variant="outlined" />
      )}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
    />
  );
}
