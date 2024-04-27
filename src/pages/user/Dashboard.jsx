import { Avatar, Button, Flex, Heading,Box,Text, Image, Grid, Divider, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListItemBox from "../../components/Templates/Edit/ListItemBox";
import Footer from "../../components/landing/Footer";
import Navigation from "../../components/landing/Navigation";
import { FaArrowDown, FaDropbox, FaList, FaQuestion, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import { RiSettings2Fill } from "react-icons/ri";
import { DeleteAccount, HelpDesk, PasswordReset, Policies } from "../../chakra/styles";

export default function Dashboard(){

    const [ showSettings, setShow ] = useState(false)
    const [ modal, setModal ] = useState('')

    const Templates = [
        { templatecode:'Minimalist',templateImage:'images/11.jpg',link:'/template1' },
        { templatecode:'Photography',templateImage:'images/photography.jpg',link:'/template2' },
        { templatecode:'Business',templateImage:'images/tailor.jpg',link:'/template1' },
        { templatecode:'Developer',templateImage:'images/dev.jpg',link:'/template2' },
        { templatecode:'Designer',templateImage:'images/11.jpg',link:'/template2' },
    ]
    return(
        <Box>
            <Navigation click={'Dashboard'}/>
            <Flex gap='40px' flexDir='column' align='center' w='100%' maxW='1100px' h='100%' m='auto' p='20px'>
                <Flex w='100%' justify='space-between' flexDir='column' p={{sm:'30px 20px',base:'30px 10px'} 
                }bg='hblue' pos='relative'>
                    <Flex justify='space-between' align='center' gap='20px'>
                        <Text fontWeight='semibold' fontSize={{sm:'lg',base:'sm'}}>Welcome back, Mankind243!</Text>
                        <Avatar boxSize={{sm:'40px',base:'30px'}} src='images/photography.jpg'/>
                    </Flex>
                    <Flex flexDir='column' mb='20px' gap='5px'>
                        <Text fontSize={{sm:'sm',base:'xs'}}> mayowamakinde@gmail.com</Text>
                        <Button leftIcon={<FaUser/>} w='100%' maxW={{sm:'200px',base:'150px'}} size={'sm'}>Verify account</Button>
                    </Flex>
                    {showSettings && <>
                        <Divider borderColor='white'/>
                        <Flex flexDir='column' w='100%' maxW='400px' m='auto' gap='10px' mt='20px'>
                            <Heading fontSize='lg' textAlign='center'>Account Settings</Heading>
                            <Flex flexDir='column' p='0 20px' gap='10px'>
                                <Button size={{sm:'md',base:'sm'}} onClick={()=>setModal('policies')} leftIcon={<FaList/>}>Terms and Policy</Button>
                                <Button size={{sm:'md',base:'sm'}} onClick={()=>setModal('faq')} leftIcon={<FaQuestion/>}>FAQs</Button>
                                <Button size={{sm:'md',base:'sm'}} onClick={()=>setModal('changePassword')} leftIcon={<FaUser/>}>Change Password</Button>
                                <Button size={{sm:'md',base:'sm'}} onClick={()=>setModal('deleteAccount')} leftIcon={<FaUser/>}>Delete Account</Button>
                                <Button leftIcon={<FaSignOutAlt/>}>Sign Out</Button>
                            </Flex>
                        </Flex>
                    </>}
                    <IconButton icon={<RiSettings2Fill/>} variant='unstyled' pos='absolute' bottom='0' right='0' onClick={()=>setShow(!showSettings)}/>
                </Flex>
                <Flex w='100%' h='100%' flexDir='column' gap='10px'>
                    <Text fontWeight='semibold'>Most recent edit</Text>
                    <Flex gap='30px' flexWrap='wrap' w='100%' h='100%'>
                        {/* <Link to={template.link} mx='auto'> */}
                            <Box p='5px' w='400px' h='100%' mx={{sm:'0',base:'auto'}}>
                                <Box w='100%' h='100%' boxShadow={'0 5px 10px rgba(0,0,0,0.7)'} borderRadius='lg'>
                                    <Image src={'images/photography.jpg'} borderRadius='lg' w='100%' h='100%' loading='eager'/>
                                </Box>
                                <Text textAlign='center'>Saved draft</Text>
                            </Box>
                        {/* </Link> */}
                    </Flex>
                </Flex>
                <Flex w='100%' h='100%' flexDir='column' gap='10px'>
                    <Text fontWeight='semibold'>Available HoistMe templates</Text>
                    <Grid w='100%' h={'100%'} flexWrap='wrap' justify={'space-around'} gap='30px' gridTemplateColumns={'repeat(auto-fit, minmax(13rem, 1fr))'} py='30px'>
                        {Templates.map((template,id)=>(
                            <Link to={template.link} mx='auto' key={id}>
                                <ListItemBox>
                                    <Image borderRadius='lg' src={template.templateImage} w='100%' h='100%' maxH='300px' loading="lazy"/>
                                    <Text textAlign='center'>{template.templatecode}</Text>
                                </ListItemBox>
                            </Link>
                        ))}
                    </Grid>
                </Flex>
                <Divider/>
            </Flex>
            <Footer/>
                {modal==='policies' && <Policies setModal={setModal}/>}
                {modal==='faq' && <HelpDesk setModal={setModal}/>}
                {modal==='changePassword' && <PasswordReset setModal={setModal}/>}
                {modal==='deleteAccount' && <DeleteAccount setModal={setModal}/>}
        </Box>
    )
}