import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { RiMailFill, RiGithubFill, RiTwitterFill, RiYoutubeFill, RiWhatsappFill } from 'react-icons/ri';
import MaxContainer from '../MaxContainer';

export default function Footer() {
  const Links = [
    {id:'0',icon:<RiGithubFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiYoutubeFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiTwitterFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiMailFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiWhatsappFill/>,link:'http://github/mayormankind.com'},
  ]
  return (
    <Flex w='100%' h='100%' color={'white'} flexDir='column' bg='black' align='center'>
        <MaxContainer>
            <Flex gap='20px' justify='space-between' align='center' w='100%' p='60px 0' h='100%' >
                <Box flex='0.6'>
                    <Text mb='10px' fontWeight={'bold'} color={'white'} w='100%' fontSize='20px' h='100%'>ProspectTailors</Text>
                    <Text>Reaching us is not far from you. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.</Text>
                </Box>
                <Flex>
                {Links.map((acc)=>(
                    <IconButton fontSize='20px' as='a' icon={acc.icon} href={acc.link} variant={'ghost'}/>
                ))}
                </Flex>
            </Flex>
        </MaxContainer>
    </Flex>
  )
}
