// eslint-disable-next-line no-unused-vars
import React from 'react'
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { Box} from "@mui/material";
import {rows , columns} from "./data.js"
import Header from "../../Header"


const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
    <Header title={"Invoices"} subTitle={"List of Invoice Balances"}  />

    <DataGrid
      checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
  )
}

export default Invoices