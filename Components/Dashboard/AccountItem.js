"use client";
import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import { DeleteUser } from "./DeleteAccount";
export const AccountItem = ({ username, first_name, last_name, id }) => {
  function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"}>
        <Avatar {...stringAvatar(first_name + " " + last_name)} />
        <Stack direction={"column"} marginRight={"5px"}>
          <Box>{username}</Box>
          <Box fontWeight={500} fontSize={"11px"} color={"#777"}>
            {first_name + " " + last_name}
          </Box>
        </Stack>
      </Stack>
      <DeleteUser id={id} />
    </Stack>
  );
};
