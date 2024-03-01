import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Blur({children}) {
  return (
    <Box w='100%' pos='relative' top='0' left='0' bottom='0' right='0' bg={'radial-gradient(#071019,#b8d9fc)'} filter={'blur(10)'}>
        {children}
    </Box>
  )
}
