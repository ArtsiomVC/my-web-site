import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        grey: {
            100: "#2a5885",
            500: "#818e9c"
        }
    },
    spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    shape: {
        borderRadius: 2
    },
    typography: {
        htmlFontSize: 18,
        fontFamily: "-apple-system, Arial, sans-serif",
    },
})