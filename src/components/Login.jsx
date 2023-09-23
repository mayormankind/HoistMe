import react from 'react';
import { Box, Flex, Text, Button, IconButton, Input, Heading } from '@chakra-ui/react';
import { RiGoogleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// bg='#070722'
export default function Login(){
    return(
        <Flex w='100%' h='100vh' flexDir='column' justify='center' align='center' bg='url(images/3.jpg)' bgRepeat='no-repeat' bgPos='center' bgSize={{sm:'contain',base:'cover'}}>
            <Flex pos='relative' bg='rgba(0,0,0,0.6)' justify='center' align='center' flexDir='column' h='100%' w='100%' top='0' p={{sm:'0',base:'0 20px'}} color='white'>
                <Flex p='20px' w='100%' maxW='500px' bg={'rgba(155,155,155,0.3)'} boxShadow='lg' borderRadius='lg' flexDir='column' gap='20px'>
                    <Heading as='h3' textAlign='center'>Welcome back!</Heading>
                    <Flex w='100%' flexDir='column' gap='15px'>
                        <Input type='text' placeholder='Your username ...' w='100%' h='50px'_placeholder={{color:'lightgray'}}/>
                        <Input type='text' placeholder='Enter your password ...' w='100%' h='50px'_placeholder={{color:'lightgray'}}/>
                        <Text borderBottom='1px solid #C52568'w='fit-content'>Forgotten password?</Text>
                        <Button bg='#C52568'>
                            <Link to='/dashboard'>Login to Account</Link>
                        </Button>
                        <Text textAlign='center' fontSize='small'>Don't have an account yet? <Link to='/createAccount' color='#C52568'>Create an account</Link></Text>
                    </Flex>
                </Flex>
            </Flex>
            <Text color='white' pos='absolute' bottom='10px'>Made with 💗 by Man Kind</Text>
        </Flex>
    )
}