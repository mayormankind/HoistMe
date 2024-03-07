import { Flex, Text } from "@chakra-ui/react";
import { RandomizeColor } from "../api";
import { RiFlagFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const ColoredBox = () =>{
    return(
        <Flex boxSize='60px' bg={''} borderRadius='50%' mx='auto' boxShadow={`10px 5px 10px ${RandomizeColor()}`}/>
    )
}

export const HeadLogo = () =>{
    return(
        <Link to={'/'} flex='0.3'>
            <Flex align='center' gap='5px' fontFamily={'heading'} fontSize='22px' _hover={{color: '#3498db'}} cursor={'pointer'}><RiFlagFill/>HoistMe</Flex>
        </Link>
    )
}
export const LinkText = ({ path, text }) =>{
    return(
        <a href={path} flex='0.3'>
            <Text>{text}</Text>
        </a>
    )
}