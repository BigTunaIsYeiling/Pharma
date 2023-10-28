"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Autocomplete, TextField } from "@mui/material";
export default function ProductsSelection({ data, product, setProduct }) {
  //create autocomplete element
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data.filter((prod) => !prod.sold)}
      getOptionLabel={(option) => option.type.name}
      onChange={(e, newValue) => {
        setProduct(newValue?.id);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Products" variant="outlined" />
      )}
      renderOption={(props, option) => <li {...props}>{option.type.name}</li>}
    />
  );
  // return (
  //   <>
  //     {/* <FormControl
  //       sx={{
  //         width: 204,
  //         "& .MuiInputBase-root": {
  //           height: "40px",
  //         },
  //       }}
  //     >
  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         value={product}
  //         onChange={(e) => {
  //           setProduct(e.target.value);
  //         }}
  //       >
  //         {data
  //           .filter((prod) => !prod.sold)
  //           .map((prod) => {
  //             return (
  //               <MenuItem key={prod.type.id + prod.id} value={prod.id}>
  //                 {prod.type.name}
  //               </MenuItem>
  //             );
  //           })}
  //       </Select>
  //     </FormControl> */}
  //   </>
  // );
}
