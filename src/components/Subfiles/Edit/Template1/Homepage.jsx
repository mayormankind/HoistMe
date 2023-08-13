import react, {useState} from 'react';
import { Flex, Text,Button, Box, Image } from '@chakra-ui/react';
import { RiArrowRightFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import TemplateHeader1 from './Header';
import MaxContainer from '../MaxContainer';

export default function Template1Homepage(){
    return(
        <Flex w='100%' h='100vh' flexDir='column' color={'white'} bg={'url(images/bg.png)'} bgPos='center' bgRepeat='no-repeat' bgSize='cover' align='center'>
            <Flex justify='center' align='center' flexDir='column' h='100%' w='100%' pos='relative' bg={'rgba(0,0,0,0.4)'} top='0'>
                <TemplateHeader1/>
                <MaxContainer>
                    <Box my='auto' w='100%' maxW='700px'>
                        <Text as='h1' fontSize={{sm:'40px',base:'20px'}}>We make, We create and We deliver</Text>
                        <Text textAlign={'justify'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis. Numquam sed facilis obcaecati illo vero aliquid id dolores, nobis accusamus blanditiis ab cum eum asperiores ipsa minus. Accusantium exercitationem, quasi omnis quae laudantium natus sapiente qui. Magni, corporis repudiandae ipsa ea possimus vero optio velit, maiores quisquam dolorem laboriosam, totam perferendis distinctio!</Text>
                    </Box>
                </MaxContainer>
            </Flex>
        </Flex>
    )
}