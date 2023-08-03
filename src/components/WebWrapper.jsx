import { Flex, Box } from '@chakra-ui/react';
import react from 'react';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import Showcase from './Showcase';
export default function WebsiteWrapper(){
    return(
        <Flex justify='center' align='center' flexDir={'column'}>
            <Navigation/>
            <Home/>
            <About/>
            <Showcase/>
        </Flex>
    )
}