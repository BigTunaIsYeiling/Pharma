"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ data }) {
  const [type, setType] = React.useState("");
  return (
    <FormControl sx={{ width: 204 }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="type"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
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
