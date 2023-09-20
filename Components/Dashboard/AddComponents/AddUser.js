import { AddUserAction } from "@/Lib/actions";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiUserAdd } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
export const AddUser = ({ admin }) => {
  const [showpass, setpassinp] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [IsAdmin, setAdmin] = useState(false);
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          " .MuiListItemText-root": {
            flex: "0 auto",
          },
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ListItemButton disabled={!admin} onClick={handleClickOpen}>
          <ListItemIcon>
            <HiUserAdd size={"22px"} />
          </ListItemIcon>
          <ListItemText
            primary={"اضافه مستخدم"}
            sx={{ whiteSpace: "nowrap" }}
          />
        </ListItemButton>
      </ListItem>
      <MenuItem
        disabled={!admin}
        sx={{ display: { xs: "flex", sm: "none" } }}
        onClick={handleClickOpen}
      >
        <ListItemIcon>
          <HiUserAdd fontSize={"25px"} />
        </ListItemIcon>
        <ListItemText>
          اضافه مستخدم
          <Box fontSize={"0.75rem"}>المشرف فقط</Box>
        </ListItemText>
      </MenuItem>
      <Dialog open={open} onClose={handleClose}>
        <Stack
          padding={"1rem 3rem 2rem 3rem"}
          position={"relative"}
          component={"form"}
          action={async (data) => {
            const result = await AddUserAction(data);
            if (result.hasOwnProperty("username")) {
              handleClose();
              return toast.success("تم اضافه مستخدم ");
            } else {
              return toast.error(result);
            }
          }}
        >
          <Box
            alignSelf={"center "}
            fontSize="16px"
            fontWeight={400}
            marginTop="4px"
            color="#777"
          >
            اضافه عضو جديد
          </Box>
          <Stack direction={"column"} spacing="20px" marginTop={"2rem"}>
            <Stack
              direction={"row-reverse"}
              spacing={"1rem"}
              alignItems={"center"}
            >
              <Stack
                direction={"column"}
                spacing="10px"
                alignItems={"flex-end"}
              >
                <Box fontSize="14px" fontWeight={700}>
                  الاسم الاول
                </Box>
                <Box
                  component={"input"}
                  paddingY={"10px"}
                  paddingX="8px"
                  sx={{
                    outline: "0",
                    border: "0",
                    backgroundColor: "whitesmoke",
                    ":focus": {
                      boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                    },
                    borderRadius: "3px",
                    fontWeight: 400,
                    width: "100%",
                  }}
                  name="first_name"
                />
              </Stack>
              <Stack
                direction={"column"}
                spacing="10px"
                alignItems={"flex-end"}
              >
                <Box fontSize="14px" fontWeight={700}>
                  الاسم الثاني
                </Box>
                <Box
                  component={"input"}
                  paddingY={"10px"}
                  paddingX="8px"
                  sx={{
                    outline: "0",
                    border: "0",
                    backgroundColor: "whitesmoke",
                    ":focus": {
                      boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                    },
                    borderRadius: "3px",
                    fontWeight: 400,
                    width: "100%",
                  }}
                  name="last_name"
                />
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing="10px" alignItems={"flex-end"}>
              <Box fontSize="14px" fontWeight={700}>
                المستخدم
              </Box>
              <Box
                component={"input"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  backgroundColor: "whitesmoke",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  width: "100%",
                }}
                name="username"
              />
            </Stack>
            <Stack
              direction={"column"}
              spacing="10px"
              position={"relative"}
              alignItems={"flex-end"}
            >
              <Box
                component={IconButton}
                sx={{ position: "absolute", right: 5, bottom: "5%" }}
                size="small"
                onClick={() => setpassinp((prev) => !prev)}
              >
                {!showpass ? (
                  <Box component={VscEye} color="black" />
                ) : (
                  <Box component={VscEyeClosed} color="black" />
                )}
              </Box>
              <Box fontSize="14px" fontWeight={600}>
                كلمه السر
              </Box>
              <Box
                component={"input"}
                paddingY={"10px"}
                type={showpass ? "text" : "password"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  backgroundColor: "whitesmoke",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  width: "100%",
                }}
                name="password"
              />
            </Stack>
            <FormGroup sx={{ alignSelf: "flex-end" }}>
              <FormControlLabel
                sx={{ margin: "10px 0 0 0" }}
                control={<Checkbox />}
                label="عضو مشرف ؟"
                name="is_admin"
                value={IsAdmin}
                onChange={(e) => setAdmin(e.target.checked)}
              />
            </FormGroup>
          </Stack>
          <Box
            component={Button}
            fontWeight="600"
            sx={{
              textTransform: "none",
              color: "white",
              backgroundColor: "#0C356A",
              ":hover": {
                backgroundColor: "#0C356A",
              },
            }}
            marginTop="3rem"
            type="submit"
          >
            تسجيل
          </Box>

          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: "1%", left: "1%" }}
          >
            <RiCloseLine />
          </IconButton>
        </Stack>
      </Dialog>
    </>
  );
};
