import react, {useState} from 'react';
import { Avatar, Box, Flex, IconButton, Image, Text,Button } from '@chakra-ui/react';
import { RiArrowGoForwardFill, RiArrowRightFill, RiMenu3Fill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import { ColoredBox } from '../chakra/styles';
import { RandomizeColor } from '../api';

export default function Home(){
    const [ text, setText ] =useState('Where you get all that is necessary for your business?');
    const statements = ['Where you get all that is necessary for your business?','Looking for how to tell your customers about yourself','Wanting to have a better competitive advantage?']
    const changeText = () =>{
        let index = 0;        
        setInterval(()=>{
            setText(statements[index])
            index = (index+1) % statements.length
        },3000)
    }
    return(
        <Flex w='100%' h='100vh' flexDir='column' align='center'>
            <Flex w='100%' h='100vh' color={'white'} flexDir='column' align='center' bgPos={{sm:'center',base:'initial'}} bg='url(images/bg3.png)' bgRepeat='no-repeat' bgSize={'cover'}>
                <Flex justify='center' align='center' flexDir='column' h='100%' w='100%' pos='relative' bg={'rgba(0,0,0,0.4)'} gap='40px' top='0'>
                {/* <Flex align='center' justify='center' w='100%' maxW='1100px' flexDir='column' p='60px 0' gap='45px' m='auto'> */}
                    <Flex flexDir='column' maxW='750px' align='center'>
                        <Text as={'h1'} fontSize={{lg:'6xl', sm:'5xl',base:'40px'}} fontWeight={'bold'} textAlign='center' w='100%' h='100%' p={{sm:'0',base:'0 20px'}}>Create your own portfolio without stress</Text>
                        <Text fontSize={{sm:'20px',base:'17px'}} maxW='550px' p='0 10px' textAlign='center'>HoistMe is a simple, friendly and easy to use platform to create you own portfolio for your business</Text>
                    </Flex>
                    <Flex align={'center'} justify='space-around' w='100%'>
                        <Link to='/createAccount'>
                            <Button bg='#57346A' h='50px' w={{sm:'200px',base:'150px'}} _hover={{bg:'green.100',color:'black'}}>Get started <RiArrowRightFill fontSize='20px' style={{marginLeft:'20px'}}/></Button>
                        </Link>
                        <Button as={'a'} href='#about' bg='red.600' color={'white'} h='50px' w={{sm:'200px',base:'150px'}} _hover={{bg:'green.100',color:'black'}}>View Services</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}