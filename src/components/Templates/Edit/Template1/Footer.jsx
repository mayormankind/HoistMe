import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { RiEditFill, RiInstagramFill, RiMailFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri';
import MaxContainer from '../MaxContainer';

export default function Footer() {
  const Links = [
    {icon:<RiInstagramFill/>,link:'http://instagram.com/prospectTailors'},
    {icon:<RiTwitterFill/>,link:'http://x.com/prospectTailors'},
    {icon:<RiMailFill/>,link:'http://gmail.com/prospectTailors'},
    {icon:<RiWhatsappFill/>,link:'http://gmail.com/prospectTailors'},
  ]
  return (
    <Flex w='100%' h='100%' color={'white'} flexDir='column' bg='black' align='center' id='contact'>
        <MaxContainer>
            <Flex gap='20px' justify='space-between' align='center' w='100%' p={{sm:'60px 10px',base:'60px 20px'}} h='100%' flexDir={{sm:'row',base:'column'}} >
                <Box flex='0.7' pos='relative'>
                    <Text mb='10px' fontWeight={'bold'} color={'white'} w='100%' fontSize='20px' h='100%'>ProspectTailors</Text>
                    <Text>Reaching us is not far from you. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.</Text>
                </Box>
                <Flex>
                {Links.map((acc,id)=>(
                    <IconButton fontSize='20px' key={id} as='a' icon={acc.icon} href={acc.link} variant={'ghost'}/>
                ))}
                </Flex>
            </Flex>
        </MaxContainer>
    </Flex>
  )
}
