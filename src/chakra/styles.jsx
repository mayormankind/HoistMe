import { Flex } from "@chakra-ui/react";
import { RandomizeColor } from "../api";

export const ColoredBox = () =>{
    return(
        <Flex boxSize='60px' bg={''} borderRadius='50%' mx='auto' boxShadow={`10px 5px 10px ${RandomizeColor()}`}/>
    )
}