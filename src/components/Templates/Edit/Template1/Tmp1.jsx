import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Template1Homepage from './Homepage'
import Samples from './Samples'
import Services from './Services'

export default function Template1() {
  return (
    <Box>
      <Template1Homepage/>
      <Services/>
      <Samples/>
      <Footer/>
    </Box>
    )
}
