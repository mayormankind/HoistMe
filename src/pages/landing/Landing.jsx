import { Flex, Box, Divider } from '@chakra-ui/react';
import react from 'react';
import Navigation from '../../components/landing/Navigation';
import Home from '../../components/landing/Home';
import Showcase from '../../components/landing/Showcase';
import About from '../../components/landing/About';
import Footer from '../../components/landing/Footer';
import Blur from '../../components/commons/Blur';
export default function Landing(){
    return(
        <Box>
            <Navigation/>
            {/* <Blur> */}
                <Home/>
            {/* </Blur> */}
            <About/>
            <Showcase/>
            <Footer/>
        </Box>
    )
}