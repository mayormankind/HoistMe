import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';


const theme = extendTheme({
    breakpoints:{
        xs: "480px",
        sm: "600px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px"
    },
    styles: {
        // global: (props)=>({
            body: {
                bg: mode('white','black')(props),
                color: mode('black','white')(props),
                // fontFamily: 'Constantia',
                fontFamily: 'Harlow Solid Italic',
            },
        // }),
    },
    colors:{
        bkg:{
            500: "black",
            100: "#1e1c1c"
        },
        text:{
            100: "#fff",
            200: "#000"
        },
        header:{
            100: "#fff",
            200: "purple"
        }
    },
    components: {
        Button: {
            variants: {
                'd-with-w': {
                    bg: 'white',
                    color: 'black',
                },
                'd-with-border': {
                    border: '1px solid white',
                    color:'white',
                },
                'w-with-d': {
                    bg: 'black',
                    color: 'white',
                },
                'w-with-border': {
                    border: '1px solid black',
                    color:'black',
                }
            }
        }
    }
})

export default theme;