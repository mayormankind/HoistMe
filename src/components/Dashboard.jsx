import { Avatar, Button, Flex, Heading } from "@chakra-ui/react";

export default function Dashboard(){
    return(
        <Flex w='100%' h='100vh' bg='white' justify='center' align='center'>
            <Flex gap='20px' flexDir='column' align='center' w='100%' maxW='1100px' h='100%' >
                <Flex borderBottom='1px solid black' w='100%' justify='space-between' p='10px 0'>
                    <Heading>Welcome back Mankind243!</Heading>
                    <Avatar src='images/2.jpg'/>
                </Flex>
                <Flex>
                    <Button h='50px'>Preview</Button>
                    <Button h='50px'>Edit page</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}