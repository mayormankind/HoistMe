import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TemplateHeader2 from './Header'
import Template2Homepage from './Homepage'

export default function Template2() {
  return (
    <Flex bg='#e0d29a' w='100%' h='100%' minH='100vh'>
        <Flex w='100%' flexDir='column'>
            <TemplateHeader2/>
            <Template2Homepage/>
        </Flex>
    </Flex>
  )
}
