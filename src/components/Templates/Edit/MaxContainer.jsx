import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function MaxContainer({children,lign}) {
  return (
    <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' m='auto'>
        {children}
    </Flex>
  )
}
