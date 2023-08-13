import react from 'react';
import { Box, Flex, Text, Button, IconButton, Input, Heading } from '@chakra-ui/react';
import { RiGoogleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// bg='#070722'
export default function Signup(){
    return(
        <Flex w='100%' h='100vh' flexDir='column' justify='center' align='center' bg='url(images/3.jpg)' bgRepeat='no-repeat' bgPos='center' bgSize={{sm:'contain',base:'cover'}}>
            <Flex pos='relative' bg='rgba(0,0,0,0.6)' justify='center' align='center' flexDir='column' h='100%' w='100%' top='0' p={{sm:'0',base:'0 20px'}} color='white'>
                <Flex p='20px' w='100%' maxW='500px' bg={'rgba(155,155,155,0.3)'} boxShadow='lg' borderRadius='lg' flexDir='column' gap='20px'>
                    <Heading as='h3' textAlign='center'>Hi there!</Heading>
                    <Flex w='100%' flexDir='column' gap='15px'>
                        <Input type='text' placeholder='Enter a username ...' w='100%' h='50px'_placeholder={{color:'lightgray'}}/>
                        <select defaultValue={'Business type'} style={{height:'50px',padding:'0 15px',borderRadius:'10px',background:'transparent',border:'1px solid gray'}}>
                            <option selected>Business type</option>
                            <option>Driver</option>
                            <option>Fashion designer</option>
                            <option>Web developer</option>
                            <option>Shoe maker</option>
                        </select>
                        <Input type='text' placeholder='Your brandname...' w='100%' h='50px'_placeholder={{color:'lightgray'}}/>
                        <Input type='text' placeholder='Enter your password ...' w='100%' h='50px'_placeholder={{color:'lightgray'}}/>
                        <Button bg='#C52568'>Create your Account</Button>
                        <Text textAlign='center' fontSize='small'>Already have an account? <Link to='/login' color='#C52568'>Login</Link></Text>
                    </Flex>
                </Flex>
            </Flex>
            <Text color='white' pos='absolute' bottom='10px'>Made with 💗 by Man Kind</Text>
        </Flex>
    )
}