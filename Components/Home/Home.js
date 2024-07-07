"use client";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { Login } from "@/Lib/actions";
import toast from "react-hot-toast";
export default function HomePage() {
  const [showpass, setpassinp] = useState(false);
  return (
    <Box>
      <Stack
        justifyContent={"center"}
        alignItems="center"
        paddingTop={{ xs: "0rem", sm: "3rem" }}
      >
        <Stack
          padding={{ xs: "0rem 3rem 0rem 3rem", sm: "1rem 3rem 2rem 3rem" }}
          direction={"column"}
          bgcolor="transparent"
          width={{ xs: "82%", sm: "50%", md: "30%" }}
          position="relative"
          borderRadius={"2%"}
          component={"form"}
          action={async (data) => {
            const result = await Login(data);
            if (result?.error) {
              toast.error("خطا في الاسم او كلمه السر");
            } else {
              toast.success("تم التسجيل");
            }
          }}
        >
          <Box
            alignSelf={"center "}
            fontSize="25px"
            fontWeight={600}
            marginTop="8px"
          >
            سجل للدخول لحسابك
          </Box>
          <Stack direction={"column"} spacing="20px" marginTop={"3rem"}>
            <Stack direction={"column"} spacing="10px" alignItems={"flex-end"}>
              <Box fontSize="14px" fontWeight={600}>
                المستخدم
              </Box>
              <Box
                component={"input"}
                name="username"
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
                placeholder="e.g.mah"
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
                sx={{ position: "absolute", right: 2, bottom: "5%" }}
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
                placeholder="e.g.******"
                name="password"
              />
            </Stack>
          </Stack>
          <Button
            sx={{
              fontWeight: "600",
              textTransform: "none",
              color: "white",
              backgroundColor: "#0C356A",
              ":hover": {
                backgroundColor: "#0C356A",
              },
              marginTop: "3rem",
            }}
            type="submit"
          >
            تسجيل
          </Button>
          <Box position={"relative"} marginTop={"2rem"}>
            <Box
              fontSize="17px"
              fontWeight={500}
              lineHeight="1.5rem"
              color="#777"
              textAlign={"center"}
            >
              صيدليه الدكتوره أسماء سمير
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
