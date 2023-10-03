import { Flex, Text, Icon } from '@chakra-ui/react';
import { RiChatSmileFill, RiPaletteFill } from 'react-icons/ri';
import { ColoredBox } from '../chakra/styles';

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
        // bg='#57346A'#0c0b43a1 #1a187cb4
        return(
            <Flex flexDir='column' p='20px' gap='10px' w='100%' maxW='300px' key={block.id} h='100%' minH='200px' borderRadius='10px' boxShadow='xl' bgGradient={'linear(to-br,#090724,#1a187c)'} color='white'>
                <Icon fontSize='22px'>{block.icon}</Icon>
                <Text fontWeight='semibold' fontSize='16px'>{block.text}</Text>
                <Text fontSize='sm'>{block.detail}</Text>
            </Flex>
        )
    }
    return(
        <Flex w='100%' h='100%' flexDir='column' id='about'>
            <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' m='auto'>
                <Text fontSize={{sm:'5xl',base:'20px'}} fontWeight={'bold'} textAlign='center' w='100%' h='100%' p={{sm:'0 10px',base:'0 20px'}} maxW='700px'>Experience you'd expect from hoistMe design system</Text>
                <Text textAlign='center' fontSize={{sm:'20px', base:'17px'}} color='gray'>Far greater than what you expect</Text>
                <Flex flexWrap='wrap' justify={{sm:'space-between',base:'center'}} gap='30px' align='center' w='100%' h='100%' p={{sm:'15px',base:'0'}}>
                    {blocks.map(block=>(
                        <DesignBlock block={block} key={block.id}/>
                    ))}
                </Flex>
                {/* <ColoredBox/> */}
            </Flex>
        </Flex>
    )
}