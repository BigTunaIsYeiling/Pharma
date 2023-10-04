"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function BasicSelect({ data, setProduct, product }) {
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
        name="type"
        value={product.type}
        onChange={(e) => {
          setProduct({ ...product, type: e.target.value });
        }}
      >
        {data.map((type) => {
          return (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
