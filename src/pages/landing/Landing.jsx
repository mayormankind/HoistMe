import { Box } from '@chakra-ui/react';
import Navigation from '../../components/landing/Navigation';
import Home from '../../components/landing/Home';
import Showcase from '../../components/landing/Showcase';
import About from '../../components/landing/About';
import Footer from '../../components/landing/Footer';
export default function Landing(){
    return(
        <Box>
            <Navigation/>
            <Home/>
            <About/>
            <Showcase/>
            <Footer/>
        </Box>
    )
}