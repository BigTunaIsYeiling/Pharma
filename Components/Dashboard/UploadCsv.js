"use client";
import { Box, Button, IconButton, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { RiCloseLine } from "react-icons/ri";
import {
  MdOutlineDriveFolderUpload,
  MdDeleteOutline,
  MdDone,
} from "react-icons/md";
import { useEffect, useState } from "react";
const UploadCSV = ({ open, handleClose }) => {
  const [file, setFile] = useState(null);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box padding={"3rem"} sx={{ position: "relative" }}>
        <Stack direction={"column"} alignItems="center">
          <Box
            fontSize={"22px"}
            fontWeight={600}
            whiteSpace="nowrap"
          >
            Upload your document
          </Box>
          <Box
            fontSize={"12px"}
            fontWeight={300}
            marginTop="5px"
            color={"#777"}
          >
            in CSV, XLSX, XLS
          </Box>
          {!file && (
            <Button
              component={"label"}
              startIcon={<MdOutlineDriveFolderUpload />}
              sx={{
                textTransform: "none",
                color: "white",
                backgroundColor: "#fb5c25",
                ":hover": {
                  backgroundColor: "#fb5c25",
                },
                width: "100%",
                marginTop: "1rem",
                "&.MuiButton-root": {
                  fontWeight: 600,
                },
                paddingY: "0.6rem",
                "&.Mui-disabled": {
                  color: "white",
                },
              }}
            >
              {"Upload"}
              <input
                hidden
                type={"file"}
                onChange={(e) => setFile(e.target.files[0])}
                accept=".xlsx, .xls, .csv"
              />
            </Button>
          )}
          {file && (
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              width={"100%"}
              marginY="1rem"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
                borderRadius: "10px",
                backgroundColor: "whitesmoke",
              }}
              paddingY="16px"
            >
              <Box
                fontSize={"13px"}
                fontWeight={300}
                fontFamily={fonts.body}
                marginLeft="5px"
              >
                {file.name.substring(0, 22) + ".csv"}
              </Box>
              <Box
                fontSize={"13px"}
                fontWeight={300}
                fontFamily={fonts.body}
                marginRight="5px"
              >
                {file.size.toString().substring(0, 2) + ".kb"}
              </Box>
            </Stack>
          )}
          {file && (
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              width="100%"
            >
              <Button
                color="error"
                variant="contained"
                disableElevation
                sx={{
                  "&.MuiButton-root": {
                    fontWeight: 600,
                    textTransform: "none",
                  },
                }}
                onClick={() => setFile(null)}
                startIcon={<MdDeleteOutline />}
              >
                Delete
              </Button>
              <Button
                color="success"
                variant="contained"
                disableElevation
                sx={{
                  "&.MuiButton-root": {
                    fontWeight: 600,
                    textTransform: "none",
                  },
                }}
                startIcon={<MdDone />}
              >
                Accept
              </Button>
            </Stack>
          )}
        </Stack>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "1%", right: "1%" }}
        >
          <RiCloseLine />
        </IconButton>
      </Box>
    </Dialog>
  );
};
export default UploadCSV;
