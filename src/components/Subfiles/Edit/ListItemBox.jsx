import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function ListItemBox({children,id, pad}) {
  return (
    <Flex flexDir='column' textAlign='center' p={pad} gap='15px' key={id} boxShadow='xl' bg='rgba(155,155,155,0.7)' w='100%' h='100%' maxW={'350px'} maxH='300px' borderRadius='xl' mx='auto' _hover={{opacity:'0.5'}}>
        {children}
    </Flex>
  )
}