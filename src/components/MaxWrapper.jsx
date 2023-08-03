import { Box, Flex } from "@chakra-ui/react";

export default function MaxWrapper({children}){
    return(
        <Flex justify='center' align='center' flexDir='column'>
            <Box maxW='1100px' w='100%'>
                {children}
            </Box>
        </Flex>
    )
}