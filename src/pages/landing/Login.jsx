import react, { useState } from 'react';
import { Flex, Text, Button, Input, Heading, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { RiEyeFill, RiEyeOffFill, RiFlagFill, RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Login(){

    const [ show, setShow ] = useState(false);
    const handleClick = () => setShow(!show);

    return(
        <Flex w='100%' h='100vh' flexDir='column' bg={'url(images/photography.jpg)'} bgPos={'center'} bgSize={'cover'}>
            <Flex p='30px' w='100%' maxW='450px' bg={'rgba(155,155,155,0.7)'} boxShadow='2xl' borderRadius='lg' flexDir='column' gap='20px' m='auto'>
                <RiFlagFill fontSize='50px' style={{alignSelf:'center'}}/>
                <Heading as='h3' textAlign='center'>Welcome back!</Heading>
                <Flex w='100%' flexDir='column' gap='15px'>
                    <InputGroup size='lg'>
                        <InputLeftElement pointerEvents={'none'}><RiMailFill/></InputLeftElement>
                        <Input variant='solid' type='text' fontSize='small' placeholder='Your email' w='100%'/>
                    </InputGroup>
                    <InputGroup size='lg'>
                        <InputLeftElement pointerEvents={'none'}><RiLockPasswordFill/></InputLeftElement>
                        <Input variant='solid' type={ show ? 'text' : 'password'} placeholder='Enter your password ...' fontSize='small' />
                        <InputRightElement>
                            {!show ? <RiEyeOffFill onClick={handleClick}/> : <RiEyeFill onClick={handleClick}/> }
                        </InputRightElement>
                    </InputGroup>
                    <Text textAlign='right'><Button as='span' variant='link' color='darkbg'><Link to='/passwordReset'>Forgotten password? </Link></Button></Text>
                    <Button variant='with-bg'>
                        <Link to='/dashboard'>Login to Account</Link>
                    </Button>
                    <Text textAlign='center'>Don't have an account yet? <Button variant='link' color='darkbg'><Link to='/createAccount' color='header.100'> Create account</Link></Button></Text>
                </Flex>
            </Flex>
        </Flex>
    )
}