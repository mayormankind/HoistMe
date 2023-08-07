import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex w='100%' h='100%' color={'white'} flexDir='column' bg='black' align='center'>
        <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' >
            <Text fontSize={{sm:'5xl',base:'20px'}} fontWeight={'bold'} textAlign='center' color={'white'} w='100%' h='100%' p={{sm:'0 10px',base:'0 20px'}} maxW='700px'>Experience you'd expect from hoistMe design system</Text>
            <Text textAlign='center' fontSize={{sm:'20px', base:'17px'}}>Far greater than what you expect</Text>
        </Flex>
    </Flex>
  )
}
