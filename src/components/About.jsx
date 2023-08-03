import { Avatar, Box, Flex, IconButton, Image, Text,Button, Icon } from '@chakra-ui/react';
import { RiChatSmileFill, RiPaletteFill } from 'react-icons/ri';

export default function About(){
    const blocks = [
        {id:0,icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'},
        {id:1,icon:<RiPaletteFill/>,text:'Customization',detail:'HoistMe allows text and content customization.'},
        {id:2,icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'},
        {id:3,icon:<RiChatSmileFill/>,text:'Friendly',detail:'HoistMe offers a user-friendly interface for your designs.'},
        {id:4,icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'},
        {id:5,icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'}
    ]
    const DesignBlock = ({block}) =>{
        return(
            <Flex flexDir='column' p='20px' gap='10px' bg='#57346A' w='100%' maxW='300px' key={block.id} h='100%' minH='200px' borderRadius='10px' boxShadow='xl'>
                <Icon fontSize='22px'>{block.icon}</Icon>
                <Text fontWeight='semibold' fontSize='16px'>{block.text}</Text>
                <Text fontSize='sm'>{block.detail}</Text>
            </Flex>
        )
    }
    return(
        // <Flex w='100%' h='100%' color={'white'} flexDir='column' bg={'url(images/4.jpg)'} align='center' bgPos='center' bgRepeat='no-repeat' bgSize='cover'>
        <Flex w='100%' h='100%' color={'white'} flexDir='column' bgGradient={'linear(to-br,#070722,#5e461926,#070722)'} align='center' bgPos='center' bgRepeat='no-repeat' bgSize='cover'>
            {/* <Flex justify='center' align='center' flexDir='column' h='100%' w='100%' pos='relative' bg={'rgba(0,0,0,0.4)'} top='0' > */}
            <Flex justify='center' align='center' flexDir='column' h='100%' w='100%' pos='relative' top='0' >
                <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' >
                    <Text fontSize={{sm:'3xl',base:'20px'}} fontWeight={'bold'} textAlign='center' color={'white'} w='100%' h='100%' p={{sm:'0',base:'0 20px'}} maxW='650px'>An experience you'd expect from hoistMe design system</Text>
                    <Text textAlign='center' fontSize='sm'>Far greater than what you expect</Text>
                    <Flex flexWrap='wrap' justify={{sm:'space-between',base:'center'}} gap='30px' align='center' w='100%' h='100%'>
                        {blocks.map(block=>(
                            <DesignBlock block={block}/>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}