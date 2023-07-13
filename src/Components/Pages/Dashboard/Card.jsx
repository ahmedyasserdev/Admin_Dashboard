/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack, Paper, Typography, Box , useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'

/* eslint-disable react/prop-types */
const Card = ({ icon , title , subTitle ,  increase , data , style }) => {
    const theme = useTheme();
        
const chartTheme = {
    // @ts-ignore
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": theme.palette.divider,
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "container": {
            "background": theme.palette.background.default,
            "fontSize": 12,
            "color": theme.palette.text.primary
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}

  return (
    <Paper  sx={{ minWidth:  "333px" ,  padding: 1.5  , display : "flex" , justifyContent : "space-between" , flexGrow : 1 }} >

    <Stack direction={"column"} gap = {1} >

        {icon}

        <Typography variant="body1">
            {title}
        </Typography>

        <Typography variant="body1">
            {subTitle}
        </Typography>



    </Stack>



    <Stack direction={"column"} alignItems = {"center"} >

    <Box   sx = {{ height : "70px" , width : "70px" }} >

    <ResponsivePie
    theme = {chartTheme}
    colors={{ scheme: style }}
    data={data}
    margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    enableArcLinkLabels = {false}
    enableArcLabels = {false}

    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
   
 
/>
</Box>


        <Typography variant="body1" >
           {increase}
        </Typography>

    </Stack>






</Paper>

  )
}

export default Card