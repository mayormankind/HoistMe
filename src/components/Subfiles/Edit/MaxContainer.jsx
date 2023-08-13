import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function MaxContainer({children,lign}) {
  return (
    <Flex w='100%' h='100%' maxW='1100px' mx='auto' align={lign ? 'center' : ''}>
        {children}
    </Flex>
  )
}
