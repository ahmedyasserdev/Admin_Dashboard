// eslint-disable-next-line no-unused-vars
import React from 'react'
import Geo from "./Geo"
import { Box } from '@mui/material'
import Header from "../../Header"

const Geography = () => {


  return (
    <Box>
    <Header title={'Geography'} subTitle={'Simple Geography Chart'} />
    <Geo/>
    </Box>
  )
}

export default Geography