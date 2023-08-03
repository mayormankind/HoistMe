import react, {useState} from 'react';
import { Avatar, Box, Flex, IconButton, Icon, Image, Text,Button } from '@chakra-ui/react';
import { RiPaletteFill } from 'react-icons/ri';
import Navigation from './Navigation';
import MaxWrapper from './MaxWrapper';

export default function Showcase(){
    const blocks = [
        {id:0,webname:'Asoge',image:'1.jpg'},
        {id:1,webname:'Fola the Tailor',image:'2.jpg'},
        {id:2,webname:'WeaveTheWeevil',image:'3.jpg'},
        {id:3,webname:'MankindDev',image:'4.jpg'},
        {id:4,webname:'DeGoated',image:'5.jpg'},
        {id:5,webname:'Maskara',image:'6.jpg'}
    ]
    const DesignBlock = ({block}) =>{
        return(
            <Flex flexDir='column' p='20px' gap='10px' bg='#57346A' w='100%' maxW='300px' key={block.id} h='100%' minH='200px' borderRadius='10px' boxShadow='xl'>
                <Box w='100%' h='300px' bg={`url(images/${block.image})`} bgPos='center' bgSize='contain'>
                    {/* <Image src={`images/${block.image}`} h='100%' w='100%'/> */}
                </Box>
                <Text fontWeight='semibold' opacity='0.7' fontSize='16px'>{block.webname}</Text>
            </Flex>
        )
    }
    return(
        <Flex w='100%' h='100%' color={'white'} flexDir='column' bg={'url(images/4.jpg)'} align='center' bgPos='center' bgRepeat='no-repeat' bgSize='cover'>
        <Flex justify='center' align='center' flexDir='column' h='100%' w='100%' pos='relative' bg={'rgba(0,0,0,0.4)'} top='0' >
            <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' >
                <Text as={'h1'} fontSize={{sm:'6xl',base:'40px'}} fontWeight={'bold'} textAlign='center' color={'white'} w='100%' h='100%' p={{sm:'0',base:'0 20px'}}>Designed with HoistMe!</Text>
                <Text fontSize={{sm:'23px',base:'17px'}} p='0 10px' maxW='550px' textAlign='center'>With the HoistMe platform, you could make your own portfolio in lesser time with no code</Text>
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