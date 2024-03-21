import { Flex, Grid, Text, Icon } from '@chakra-ui/react';
import { RiChatSmileFill, RiPaletteFill } from 'react-icons/ri';

export default function About(){
    const blocks = [
        { icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'},
        { icon:<RiPaletteFill/>,text:'Customization',detail:'HoistMe allows text and content customization.'},
        { icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'},
        { icon:<RiChatSmileFill/>,text:'Friendly',detail:'HoistMe offers a user-friendly interface for your designs.'},
        { icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'},
        { icon:<RiPaletteFill/>,text:'Accessible',detail:'HoistMe is readily available to work with anytime.'}
    ]
    const DesignBlock = ({block, id }) =>{
        return(
            <Flex flexDir='column' p='20px' gap='10px' w='100%' maxW='300px' key={id} h='100%' minH='200px' borderRadius='10px' boxShadow='xl' bgGradient={'linear(to-br,#090724,#1a187c)'} color='white'>
                <Icon fontSize='22px'>{block.icon}</Icon>
                <Text fontWeight='semibold' fontSize='16px'>{block.text}</Text>
                <Text fontSize='sm'>{block.detail}</Text>
            </Flex>
        )
    }
    return(
        <Flex w='100%' h='100%' flexDir='column' id='about' bg='whitesmoke'>
            <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' m='auto'>
                <Text fontSize={{sm:'5xl',base:'20px'}} fontWeight={'bold'} textAlign='center' w='100%' h='100%' p={{sm:'0 10px',base:'0 20px'}} maxW='800px'>Experience you'd expect from hoistMe design system</Text>
                <Text textAlign='center' fontSize={{sm:'20px', base:'17px'}} color='gray'>Far greater than what you expect</Text>
                <Grid gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} justifyItems={'center'} w='100%' gap='20px'>                    
                    {blocks.map((block,id)=>(
                        <DesignBlock block={block} key={id} id={id}/>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    )
}