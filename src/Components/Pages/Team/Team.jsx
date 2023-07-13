// eslint-disable-next-line no-unused-vars
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../Header"


const Team = () => {
  const theme = useTheme();
  const lightTheme = theme.palette.mode === "light";

  // Colors

  const mainPrimary = theme.palette.primary.main;
  const darkPrimary = theme.palette.primary.dark;

  const mainSecondary = theme.palette.secondary.main;
  const darkSecondary = theme.palette.secondary.dark;

  const lightYellow = "#c0ca33";
  const darkYellow = "#afb42b";

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              backgroundColor:
                access === "Admin"
                  ? lightTheme
                    ? mainPrimary
                    : darkPrimary
                  : access === "Manager"
                  ? lightTheme
                    ? mainSecondary
                    : darkSecondary
                  : lightTheme
                  ? lightYellow
                  : darkYellow,
              color: "white",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "Manager" && <SecurityOutlined fontSize="small" />}
            {access === "User" && <LockOpenOutlined fontSize="small" />}

            <Typography sx={{ fontSize: "13px" }}> {access} </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}
  
    >
    
    <Header title={"Team"} subTitle={'Managing the Team Members'}/>
    <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
