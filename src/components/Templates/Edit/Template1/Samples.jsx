import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ListBox from '../ListBox'
import ListItemBox from '../ListItemBox'
import MaxContainer from '../MaxContainer'
import { RiEditFill } from 'react-icons/ri'

export default function Samples({ handleModal }) {
    const samples = [
        {src:'images/tailor.jpg'},
        {src:'images/2.jpg'},
        {src:'images/4.jpg'},
        {src:'images/photography.jpg'},
        {src:'images/5.jpg'},
        {src:'images/3.jpg'}
    ]
  return (
    <Flex bg='whitesmoke' w='100%' h='100%' id='samples'>
        <MaxContainer>
            <Flex flexDir='column' gap='20px' w='100%' pos='relative'>
                <Text fontSize='3xl' textAlign={'center'} fontWeight='semibold' mt='20px'>Here are some of our designs!</Text>
                <IconButton icon={<RiEditFill/>} onClick={()=>handleModal('samples')} color='black' pos='absolute' top='0' right='0' isRound variant='outline'/>
                <ListBox>
                    {samples.map((sample,id)=>(
                        <ListItemBox key={id}>
                            <Image src={sample.src} w='100%' h='100%' maxH='300px'/>
                        </ListItemBox>
                    ))}
                </ListBox>
            </Flex>
        </MaxContainer>
    </Flex>
  )
}
