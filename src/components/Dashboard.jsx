import { Avatar, Button, Flex, Heading,Box,Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListBox from "./Subfiles/Edit/ListBox";
import ListItemBox from "./Subfiles/Edit/ListItemBox";

export default function Dashboard(){
    const Templates = [
        {id:'0',templatecode:'tmp1',templateImage:'images/temp1.PNG',link:'/template1'},
        {id:'1',templatecode:'tmp2',templateImage:'images/9.jpg',link:'/template2'},
        {id:'2',templatecode:'tmp3',templateImage:'images/11.jpg',link:'/template1'},
        {id:'3',templatecode:'tmp4',templateImage:'images/bg.png',link:'/template2'},
        {id:'3',templatecode:'tmp4',templateImage:'images/bg.png',link:'/template2'},
        {id:'4',templatecode:'tmp5',templateImage:'images/7.jpg',link:'/template1'},
        {id:'3',templatecode:'tmp4',templateImage:'images/bg.png',link:'/template2'},
        {id:'3',templatecode:'tmp4',templateImage:'images/bg.png',link:'/template2'},
        {id:'5',templatecode:'tmp6',templateImage:'images/3.jpg',link:'/template2'},
    ]
    return(
        <Flex w='100%' h='100vh' bg='white' justify='center' align='center'>
            <Flex gap='40px' flexDir='column' align='center' w='100%' maxW='1100px' h='100%' >
                <Flex w='100%' justify='space-between' align='center' p={{sm:'10px 0',base:'10px 20px'}} borderBottom='2px solid black'>
                    <Text fontWeight='semibold'>Welcome back Mankind243!</Text>
                    <Avatar boxSize='40px' src='images/2.jpg'/>
                </Flex>
                {/* Being a pro is about trying! Which would you like to edit? */}
                {/* <Flex>
                    <Button h='50px'>Preview</Button>
                    <Button h='50px'>Edit page</Button>
                </Flex> */}
                <Flex w='100%' h='100%' flexDir='column' gap='10px'>
                    <Text fontWeight='semibold'>Most recent edit</Text>
                    <Flex gap='30px' flexWrap='wrap' w='100%' h='100%'>
                        {/* <Link to={template.link} mx='auto'> */}
                            <Box p='5px' w='400px' h='100%' mx={{sm:'0',base:'auto'}}>
                                <Box w='100%' h='100%' boxShadow={'0 5px 10px rgba(0,0,0,0.7)'} borderRadius='lg'>
                                    <Image src={'images/temp1.PNG'} borderRadius='lg' w='100%' h='100%'/>
                                </Box>
                                <Text textAlign='center'>Saved draft</Text>
                            </Box>
                        {/* </Link> */}
                    </Flex>
                </Flex>
                <Flex w='100%' h='100%' flexDir='column' gap='10px'>
                    <Text fontWeight='semibold'>Available HoistMe templates</Text>
                    <ListBox>
                        {Templates.map(template=>(
                            <Link to={template.link} mx='auto'>
                                <ListItemBox>
                                    <Box key={template.id} w='100%' h='100%' boxShadow={'0 5px 10px rgba(0,0,0,0.7)'} borderRadius='lg'>
                                        <Image borderRadius='lg' src={template.templateImage} w='100%' h='100%'/>
                                    </Box>
                                    <Text textAlign='center'>{template.templatecode}</Text>
                                </ListItemBox>
                                {/* <Box p='5px' w='400px' h='100%' maxH='300px' mx={{sm:'0',base:'auto'}}>
                                </Box> */}
                            </Link>
                        ))}
                    </ListBox>
                    {/* <Flex gap='30px' flexWrap='wrap' w='100%' h='100%'>
                    </Flex> */}
                </Flex>
            </Flex>
        </Flex>
    )
}