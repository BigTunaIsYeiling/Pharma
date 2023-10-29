"use client";
import { Autocomplete, TextField } from "@mui/material";
export default function BasicSelect({ SetcustomerId, data, customer }) {
  return (
    <Autocomplete
      id="combo-box-demo"
      sx={{ width: 204 }}
      options={data}
      getOptionLabel={(option) => option.name}
      onChange={(e, newValue) => {
        SetcustomerId(newValue?.id);
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="العميل" variant="outlined" />
      )}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
    />
   );
}
