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
    fonts: {
        heading: 'Raleway, sans-serif',
        body: 'Poppins, sans-serif',
    },
    colors:{
        hblue: '#3498db',
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
                    bg:'hblue',
                    color: 'black',
                },
                'no-bg':{
                    variant: 'outline',
                    color: 'white',
                },
                'customOutline':{
                    variant: 'outline',
                    borderWidth: '2px',
                    borderColor: 'hblue',
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