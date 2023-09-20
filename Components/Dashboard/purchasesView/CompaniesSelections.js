"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ data }) {
  const [company, setcompany] = React.useState("");
  return (
    <FormControl sx={{ width: 204 }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="company"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      >
        {data.map((company) => {
          return (
            <MenuItem key={company.id} value={company.id}>
              {company.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
