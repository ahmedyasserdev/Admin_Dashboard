// eslint-disable-next-line no-unused-vars
import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Button, Box , Stack } from '@mui/material'
import { DownloadOutlined } from "@mui/icons-material"
import Header from "../../Header"

const Dashboard = () => {
  return (
    <Box>
  
    <Stack direction = {"row"} justifyContent={"space-between"} alignItems={"center"} >

      <Header title={"Dashboard"} subTitle={"Welcome to your dashboard"} />

      <Box sx={{ textAlign: "right", }} >

        <Button variant="contained" color="primary" sx={{ padding: "6px 8px", textTransform: "capitalize" }}>
          <DownloadOutlined />
          Download Report
        </Button>

      </Box>
      </Stack>


      <Row1 />

      <Row2 />

      <Row3 />

      </Box>
  )
}

export default Dashboard