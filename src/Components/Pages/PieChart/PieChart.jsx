// eslint-disable-next-line no-unused-vars
import React from 'react'
import Pie from './Pie'
import Header from "../../Header"
import { Box } from '@mui/material'

const PieChart = () => {
  return (
    <Box>
    <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"}/>
    <Pie/>
    
    </Box>
  )
}

export default PieChart