"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function ProductsSelection({ data, product, setProduct }) {
  return (
    <FormControl
      sx={{
        width: 204,
        "& .MuiInputBase-root": {
          height: "40px",
        },
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
        }}
      >
        {data
          .filter((prod) => !prod.sold)
          .map((prod) => {
            return (
              <MenuItem key={prod.type.id + prod.id} value={prod.id}>
                {prod.type.name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}
