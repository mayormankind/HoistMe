import react, {useState} from 'react';
import { Avatar, Box, Flex, IconButton, Icon, Image, Text,Button, Link, Grid } from '@chakra-ui/react';
// import { ColoredBox } from '../chakra/styles';

export default function Showcase(){
    const blocks = [
        {link:'https://www.mankind-portfolio.vercel.app',webname:'Asoge',image:'1.jpg'},
        {link:'https://www.mankind-portfolio.vercel.app',webname:'Fola the Tailor',image:'2.jpg'},
        {link:'https://www.mankind-portfolio.vercel.app',webname:'WeaveTheWeevil',image:'3.jpg'},
        {link:'https://www.mankind-portfolio.vercel.app',webname:'MankindDev',image:'4.jpg'},
        {link:'https://www.mankind-portfolio.vercel.app',webname:'DeGoated',image:'5.jpg'},
        {link:'https://www.mankind-portfolio.vercel.app',webname:'Maskara',image:'6.jpg'}
    ]
    const DesignBlock = ({block}) =>{
        return(
            <Flex flexDir='column' p='20px' gap='10px' w='100%' maxW='300px' h='100%' minH='200px' borderRadius='10px' boxShadow='xl'>
                <Box w='100%' h='300px' bg={`url(images/${block.image})`} bgPos='center' bgRepeat='no-repeat' bgSize='contain'/>
                <Text fontWeight='semibold' opacity='0.7' fontSize='16px'>{block.webname}</Text>
            </Flex>
        )
    }
    return(
        <Flex w='100%' h='100%' flexDir='column'>
            <Flex gap='20px' flexDir='column' justify='center' align='center' w='100%' maxW='1100px' p='60px 0' h='100%' m='auto'>
                <Text as={'h1'} fontSize={{sm:'5xl',base:'40px'}} fontWeight={'bold'} textAlign='center' w='100%' h='100%' p={{sm:'0',base:'0 20px'}}>Designed with HoistMe!</Text>
                <Text fontSize={{sm:'20px',base:'17px'}} p='0 10px' maxW='550px' textAlign='center' color='gray'>With the HoistMe platform, you could make your own portfolio in lesser time with no code</Text>
                <Grid gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} justifyItems={'center'} w='100%' gap='20px'>
                    {blocks.map((block,id)=>(
                        // <Box key={id}>
                            // <Link href={block.link}>
                                <DesignBlock block={block} key={id}/>
                            // </Link>
                        // </Box>
                    ))}
                </Grid>
            </Flex>
    </Flex>
    )
}