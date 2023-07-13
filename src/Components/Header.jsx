// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";





// eslint-disable-next-line react/prop-types
const Header = ({ title, subTitle, isDashboard = false }) => {
    const theme = useTheme();
    return (
        <Box mb={isDashboard ? 2 : 4}>
            <Typography
                sx={{
                    color: theme.palette.mode === "light" ? theme.palette.info.light : theme.palette.info.main,
                    fontWeight: "bold",
                    textTransform : "capitalize"
                }}
                variant="h5"
            >
                {title}
            </Typography>
            <Typography variant="body1">{subTitle}</Typography>
        </Box>


    );
}

export default Header;
