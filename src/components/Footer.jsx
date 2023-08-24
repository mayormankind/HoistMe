import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { RiMailFill, RiGithubFill, RiTwitterFill, RiYoutubeFill, RiWhatsappFill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Footer() {
  const Links = [
    {id:'0',icon:<RiGithubFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiYoutubeFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiTwitterFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiMailFill/>,link:'http://github/mayormankind.com'},
    {id:'0',icon:<RiWhatsappFill/>,link:'http://github/mayormankind.com'},
  ]
  return (
    <Flex w='100%' h='100%' flexDir='column' align='center'>
        <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' >
            <Text fontSize={{sm:'5xl',base:'20px'}} fontWeight={'bold'} textAlign='center' w='100%' h='100%' p={{sm:'0 10px',base:'0 20px'}} maxW='700px'>Something you should want to do.</Text>
            <Text textAlign='center' fontSize={{sm:'20px', base:'17px'}}>Reaching us is not far from you.</Text>
            <Flex align='center' justify='space-between' w='100%'>
              <Flex>
                {Links.map((acc)=>(
                  <IconButton fontSize='20px' as='a' icon={acc.icon} href={acc.link} variant={'ghost'}/>
                ))}
              </Flex>
              <ColorModeSwitcher/>
            </Flex>
        </Flex>
    </Flex>
  )
}
