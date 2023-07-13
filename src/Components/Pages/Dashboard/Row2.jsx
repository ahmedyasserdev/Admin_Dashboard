// @ts-nocheck
/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack, Paper, Box, Typography, useTheme, IconButton } from '@mui/material';
import Line from "../LineChart/Line"
import { DownloadOutlined } from "@mui/icons-material"
import { Transactions } from "./data"
const Row2 = () => {
  const theme = useTheme()
  return (
    <Stack direction={'row'} flexWrap={"wrap"} gap={1.5}   >

      <Paper sx={{ maxWidth: 900, flexGrow: 1 , minWidth : "400px" }} >
        <Stack direction={"row"} fleWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}  >

          <Box>

            <Typography
              color={theme.palette.secondary.main}
              mt={1}
              mb={1}
              ml={1}
              variant="h6"
            >

              Revenue Generated
            </Typography>

            <Typography variant="body2" ml={4} >

              $59,342.32


            </Typography>

          </Box>

          <Box>

            <IconButton >

              <DownloadOutlined />

            </IconButton>


          </Box>

        </Stack>

        <Line isDashboard={true} />

      </Paper>

  
  
      <Box sx={{maxHeight: 380, flexGrow: 1 , minWidth : "280px" , overflow : "auto" }}   >


        <Paper >

          <Typography variant="h6"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
          >
            Recent Transactions
          </Typography>

        </Paper>


        {Transactions.map((item , index) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key = {index}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}


      </Box>



    </Stack>
  )
}

export default Row2