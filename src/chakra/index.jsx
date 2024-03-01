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
        global: (props)=>({
            body: {
                bg: mode('white','black')(props),
                color: mode('black','white')(props),
            },
        }),
    },
    fonts: {
        heading: 'Raleway, sans-serif',
        body: 'Poppins, sans-serif',
    },
    colors:{
        text:{
            100: "#fff",
            200: "#000"
        },
        header:{
            100: "#618ae8",
            200: "#2463f5"
        },
        darkbg: '#071019',
        lightbg:'#b8d9fc',
        linkcolor: '#007BFF',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: '200',
                fontFamily: 'body',
                fontSize: 'sm'
            },
            variants: {
                'with-bg': {
                    bg:'#3498db',
                    color: 'black',
                },
                'no-bg':{
                    variant: 'outline',
                    color: 'white',
                }
            }
        },
        Text: {
            baseStyle: {
                fontFamily: 'body',
            }
        },
        Input: {
            baseStyle:{
                height: '50px',
                boxShadow: 'outline',
                borderColor: "#8aadd3",
                borderWidth: '2px',
            }
        },
        Divider: {
            baseStyle:{
                borderColor: "#007BFF",
                borderWidth: '2px',
            }
        },
        InputLeftElement:{
            fontSize: '1.2em',
        }
    }
})

export default theme;