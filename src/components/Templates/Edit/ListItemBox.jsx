import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function ListItemBox({children,id, pad}) {
  return (
    <Flex flexDir='column' textAlign='center' p={pad} gap='10px' key={id} boxShadow='xl' w='100%' h='100%' maxW={'300px'}  borderRadius='xl' mx='auto' _hover={{opacity:'0.5'}}>
        {children}
    </Flex>
  )
}