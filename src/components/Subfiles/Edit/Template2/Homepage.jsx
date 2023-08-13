import react, {useState} from 'react';
import { Flex, Text,Button } from '@chakra-ui/react';
import { RiArrowRightFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';

export default function Template1Homepage(){
    const [ text, setText ] =useState('Where you get all that is necessary for your business?');
    const statements = ['Where you get all that is necessary for your business?','Looking for how to tell your customers about yourself','Wanting to have a better competitive advantage?']
    return(
        <Flex w='100%' h='100vh' color={'white'} flexDir='column' bg={'url(images/5.jpg)'} align='center' bgPos='center' bgRepeat='no-repeat' bgSize='cover'>
            <Flex justify='center' align='center' flexDir='column' h='100%' w='100%' pos='relative' bg={'rgba(0,0,0,0.4)'} top='0'>
                <Flex align='center' justify='center' w='100%' maxW='1100px' flexDir='column' p='60px 0' gap='45px'>
                    <Flex flexDir='column' maxW='750px' align='center'>
                        <Text as={'h1'} fontSize={{lg:'6xl', sm:'5xl',base:'40px'}} fontWeight={'bold'} textAlign='center' color={'white'} w='100%' h='100%' p={{sm:'0',base:'0 20px'}}>Create your own portfolio without stress</Text>
                        <Text fontSize={{sm:'20px',base:'17px'}} maxW='550px' p='0 10px' textAlign='center'>HoistMe is a simple, friendly and easy to use platform to create you own portfolio for your business</Text>
                    </Flex>
                    <Flex align={'center'} justify='space-around' w='100%'>
                        <Link to='/createAccount'>
                            <Button bg='#57346A' color={'white'} h='50px' w={{sm:'200px',base:'150px'}} _hover={{bg:'green.100',color:'black'}}>Get started <RiArrowRightFill fontSize='20px' style={{marginLeft:'20px'}}/></Button>
                        </Link>
                        <Button as={'a'} href='#about' bg='red.600' color={'white'} h='50px' w={{sm:'200px',base:'150px'}} _hover={{bg:'green.100',color:'black'}}>View Services</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}