import { Avatar, Button, Flex, Heading,Box,Text, Image, Grid, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListBox from "../../components/Templates/Edit/ListBox";
import ListItemBox from "../../components/Templates/Edit/ListItemBox";
import Footer from "../../components/landing/Footer";
import Navigation from "../../components/landing/Navigation";

export default function Dashboard(){
    const Templates = [
        {id:'0',templatecode:'Minimalist',templateImage:'images/11.jpg',link:'/template1'},
        {id:'1',templatecode:'Photography',templateImage:'images/9.jpg',link:'/template2'},
        {id:'2',templatecode:'Business',templateImage:'images/11.jpg',link:'/template1'},
        {id:'4',templatecode:'Developer',templateImage:'images/9.jpg',link:'/template2'},
        {id:'3',templatecode:'Designer',templateImage:'images/11.jpg',link:'/template2'},
    ]
    return(
        <Box>
            <Navigation/>
            <Flex gap='40px' flexDir='column' align='center' w='100%' maxW='1100px' h='100%' m='auto'>
                <Flex w='100%' justify='space-between' align='center' p={{sm:'10px 0',base:'10px 20px'}} borderBottom='2px solid black'>
                    <Text fontWeight='semibold'>Welcome back Mankind243!</Text>
                    <Avatar boxSize='40px' src='images/2.jpg'/>
                </Flex>
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
                    <Grid w='100%' h={'100%'} flexWrap='wrap' justify={'space-around'} gap='30px' gridTemplateColumns={'repeat(auto-fit, minmax(13rem, 1fr))'} py='30px'>
                        {Templates.map(template=>(
                            <Link to={template.link} mx='auto'>
                                <ListItemBox>
                                    <Image borderRadius='lg' src={template.templateImage} w='100%' h='100%' maxH='300px'/>
                                    <Text textAlign='center'>{template.templatecode}</Text>
                                </ListItemBox>
                            </Link>
                        ))}
                    </Grid>
                </Flex>
                <Divider/>
            </Flex>
            <Footer/>
        </Box>
    )
}