import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints:{
        xs: "480px",
        sm: "600px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px"
    }
})
export const color = extendTheme({
    colors:{
        bkg:{
            100: "#C52568",
            200: "#57346A"
        },
        text:{
            100: "#fff",
            200: "#000"
        },
        header:{
            100: "#fff",
            200: "purple"
        }
    }
})