// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box, useTheme } from '@mui/material'
import { data } from "./data.js"
import { geo } from "./word_countries.jsx"

// eslint-disable-next-line react/prop-types
const Geo = ({ isDashboard = false }) => {
    const theme = useTheme()

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
        <Box sx={{ height: isDashboard ? "400px" : "75vh", border: isDashboard ? null : `1px solid ${theme.palette.text.primary} `, borderRadius: "6px" }} >

            <ResponsiveChoropleth
                data={data}
                features={geo.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="blues"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={isDashboard ? 70 : 130}
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#fff"

                theme={chartTheme}

                // @ts-ignore
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: '#000'
                            },
                            {
                                offset: 100,
                                color: 'inherit'
                            }
                        ]
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'CAN'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'CHN'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
                legends={
                    isDashboard ? [] :

                        [
                            {
                                anchor: 'bottom-left',
                                direction: 'column',
                                justify: true,
                                translateX: 20,
                                translateY: -100,
                                itemsSpacing: 0,
                                itemWidth: 94,
                                itemHeight: 18,
                                itemDirection: 'left-to-right',
                                itemTextColor: theme.palette.text.primary,
                                itemOpacity: 0.85,
                                symbolSize: 18,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: theme.palette.text.primary,
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
            />

        </Box>
    )
}

export default Geo