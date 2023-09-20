"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function BasicSelect({ SetcustomerId, data, customer }) {
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
        value={customer}
        onChange={(e) => {
          SetcustomerId(e.target.value);
        }}
      >
        {data.map((custom) => {
          return (
            <MenuItem key={custom.id} value={custom.id}>
              {custom.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
