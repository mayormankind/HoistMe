import React from 'react';
import { Box, Flex, Grid, Heading, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { RiMailFill, RiGithubFill, RiTwitterFill, RiYoutubeFill, RiWhatsappFill, RiPhoneFill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { HeadLogo, LinkText } from '../../chakra/styles';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';

export default function Footer() {
  const Links = [
    {icon:<RiGithubFill/>,link:'http://github/mayormankind.com'},
    {icon:<RiYoutubeFill/>,link:'http://github/mayormankind.com'},
    {icon:<RiTwitterFill/>,link:'http://github/mayormankind.com'},
    {icon:<RiMailFill/>,link:'http://github/mayormankind.com'},
    {icon:<RiWhatsappFill/>,link:'http://github/mayormankind.com'},
  ]
  return (
    <Flex w='100%' h='100%' flexDir='column' align='center' id='contact'>
        <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p={{lg:'60px 0',sm:'60px 10px', base:'50px 10px'}} h='100%' textAlign='center'>
            <Text fontSize={{sm:'5xl',base:'3xl'}} fontWeight={'bold'} w='100%' h='100%' p={{sm:'0 10px',base:'0 20px'}} maxW='700px'>Something you should want to do.</Text>
            <Text color='gray' fontSize={{sm:'20px', base:'17px'}}>Reaching us is not far from you.</Text>
            <Flex align='center' justify='space-between' w='100%'>
              <Flex>
                {Links.map((acc,id)=>(
                  <IconButton fontSize='20px' key={id} as='a' icon={acc.icon} href={acc.link} variant={'ghost'} _hover={{transform:'translateY(-5px)'}}/>
                ))}
              </Flex>
              <ColorModeSwitcher/>
            </Flex>
        </Flex>
        <Flex bg='hblue' w='100%' h='100%' p={{lg:'30px 0', base:'30px 10px'}}>
          <Grid w='100%' maxW='1100px' h='100%' gap={{sm:'50px',base:'30px'}} align='center' mx='auto' color='black' gridTemplateAreas={{sm:`
              "logo . . newsletter"
              "links links links links"
              `,
            base:`
            "logo"
            "newsletter"
            "links"`}}>
            <Box gridArea={'logo'}>
              <HeadLogo/>
              <Text as='p' textAlign='left'>Your no-code portfolio builder</Text>
            </Box>
            <Flex flexDir='column' gap='10px' gridArea={'newsletter'} p='10px'>
              <Heading size='md' textAlign='left'>Stay informed with our newsletter</Heading>
              <InputGroup>
                <Input type='outline' placeholder='Type your email address'/>
                <InputRightElement>
                  <IconButton icon={<FaArrowRight/>} variant={'ghost'}/>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex justify='space-between' w='100%' gridArea={'links'} flexDir={{sm:'row',base:'column'}} gap='30px'>
              <Flex flexDir='column' textAlign='left'>
                <LinkText path={'/home'} text={'Home'}/>
                <LinkText path={'/about'} text={'About Us'}/>
                <LinkText path={'/services'} text={'Services'}/>
                <LinkText path={'#contact'} text={'Contact Us'}/>
              </Flex>
              <Flex flexDir='column' textAlign='left'>
                <LinkText path={'/home'} text={'Home'}/>
                <LinkText path={'/about'} text={'About Us'}/>
                <LinkText path={'/services'} text={'Services'}/>
                <LinkText path={'#contact'} text={'Contact Us'}/>
              </Flex>
              <Flex flexDir='column' textAlign='left'>
                <LinkText path={'#contact'} text={'Our Team'}/>
                <LinkText path={'#contact'} text={'Privacy'}/>
                <LinkText path={'#contact'} text={'Terms of Use'}/>
              </Flex>
              <Flex flexDir='column' textAlign='left'>
                <LinkText path={'#'} text={'Akure city,Ondo'} icon={<FaLocationArrow/>}/>
                <LinkText path={'tel:+2347040829383'} text={'+2347040829383'} icon={<RiPhoneFill/>}/>
                <LinkText path={'mailto:hoistme.help@gmail.com'} text={'hoistme.help@gmail.com'} icon={<RiMailFill/>}/>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
        <Flex w='100%' bg='whitesmoke'>
          <Flex justify='space-between' flexDir={{sm:'row', base:'column'}} align='center' p='10px' w='100%' maxW='1100px' mx='auto'>
            <Text gridArea={'copyright'} fontSize='sm'>© HoistMe 2024, All rights Reserved</Text>
            <Flex gridArea={'link'}>
              {Links.map((acc,id)=>(
                <IconButton fontSize='20px' key={id} as='a' icon={acc.icon} href={acc.link} variant={'ghost'} _hover={{transform:'translateY(-5px)'}}/>
              ))}
            </Flex>
          </Flex>
        </Flex> 
    </Flex>
  )
}
