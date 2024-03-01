import { Button, Flex, Heading, Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react'
import React from 'react'
import { RiMailFill } from 'react-icons/ri'

export default function PasswordReset() {
  return (
    <Flex w='100%' h='100vh'>
        <Flex maxW='450px' w='100%' m='auto' flexDir='column' gap='30px' p='30px'>
            <Heading>Password reset form</Heading>
            <Flex gap='20px' flexDir='column'>
                <InputGroup>
                    <InputLeftElement><RiMailFill/></InputLeftElement>
                    <Input type='email' placeholder='Enter your recovery email'/>
                </InputGroup>
                <Button variant={'with-bg'}>Get Password</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}
