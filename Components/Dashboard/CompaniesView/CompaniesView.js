"use client";
import { Box, Stack } from "@mui/material";
import { CgMenu } from "react-icons/cg";
import { CompaniesTable } from "./CompaniesTable";
import { AddCompany } from "../AddComponents/AddCompany";
import { CompanyFilter } from "../Filters components/FinanceFilter";
export const CompaniesView = ({ companies }) => {
  return (
    <Box height={{ xs: "calc(100vh - 120px)", sm: "calc(100vh - 64px)" }}>
      <Stack direction={"column"} width="100%" maxHeight={"100%"}>
        <Stack
          paddingX={"0.5rem"}
          paddingY={"1rem"}
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          marginRight={{ xs: "0", sm: "65px" }}
        >
          <Stack direction={"row"} alignItems="center">
            <CgMenu color="#0C356A" />
            <Box
              fontWeight={600}
              fontSize={{ xs: "14px", sm: "16px" }}
              marginRight={"8px"}
            >
              الشركات
            </Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <CompanyFilter />
            <AddCompany />
          </Stack>
        </Stack>
        {companies.length === 0 ? (
          <Box
            marginRight={{ xs: "0", sm: "65px" }}
            textAlign="center"
            fontSize={{ xs: "7vw", sm: "3vw" }}
            paddingY={"3rem"}
          >
            لا يوجد بيانات
          </Box>
        ) : (
          <CompaniesTable companies={companies} />
        )}
      </Stack>
    </Box>
  );
};
