import { Flex, Box, Divider } from '@chakra-ui/react';
import react from 'react';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import Showcase from './Showcase';
import Footer from './Footer';
export default function WebsiteWrapper(){
    return(
        <Flex justify='center' align='center' flexDir={'column'}>
            <Navigation/>
            <Home/>
            <About/>
            <Divider/>
            <Showcase/>
            <Divider/>
            <Footer/>
        </Flex>
    )
}