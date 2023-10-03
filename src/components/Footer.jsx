import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { RiMailFill, RiGithubFill, RiTwitterFill, RiYoutubeFill, RiWhatsappFill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Footer() {
  const Links = [
    {id:'0',icon:<RiGithubFill/>,link:'http://github/mayormankind.com'},
    {id:'1',icon:<RiYoutubeFill/>,link:'http://github/mayormankind.com'},
    {id:'2',icon:<RiTwitterFill/>,link:'http://github/mayormankind.com'},
    {id:'3',icon:<RiMailFill/>,link:'http://github/mayormankind.com'},
    {id:'4',icon:<RiWhatsappFill/>,link:'http://github/mayormankind.com'},
  ]
  return (
    <Flex w='100%' h='100%' flexDir='column' align='center'>
        <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' textAlign='center'>
            <Text fontSize={{sm:'5xl',base:'20px'}} fontWeight={'bold'} w='100%' h='100%' p={{sm:'0 10px',base:'0 20px'}} maxW='700px'>Something you should want to do.</Text>
            <Text color='gray' fontSize={{sm:'20px', base:'17px'}}>Reaching us is not far from you.</Text>
            <Flex align='center' justify='space-between' w='100%'>
              <Flex>
                {Links.map((acc)=>(
                  <IconButton fontSize='20px' key={acc.id} as='a' icon={acc.icon} href={acc.link} variant={'ghost'} _hover={{transform:'translateY(-5px)'}}/>
                ))}
              </Flex>
              <ColorModeSwitcher/>
            </Flex>
        </Flex>
    </Flex>
  )
}
