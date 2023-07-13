import { lightBlue } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: lightBlue[500],
                    contrastText: '#fff',
                },


             

            }
            : {
                // palette values for dark mode

           

            }),
    },
});


