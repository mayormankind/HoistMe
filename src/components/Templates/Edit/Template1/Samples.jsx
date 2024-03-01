import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ListBox from '../ListBox'
import ListItemBox from '../ListItemBox'
import MaxContainer from '../MaxContainer'

export default function Samples() {
    const samples = [
        {id:'0',src:'images/bg.png'},
        {id:'1',src:'images/1.jpg'},
        {id:'2',src:'images/2.jpg'},
        {id:'3',src:'images/4.jpg'},
        {id:'4',src:'images/5.jpg'},
        {id:'5',src:'images/3.jpg'}
    ]
  return (
    <Flex bg='lightgray' w='100%' h='100%'>
        <MaxContainer>
            <Flex flexDir='column' gap='20px' w='100%'>
                <Text fontSize='3xl' textAlign={'center'} fontWeight='semibold' mt='20px'>Here are some of our designs!</Text>
                <ListBox>
                    {samples.map(sample=>(
                        <ListItemBox id={sample.id}>
                            <Image src={sample.src} w='100%' h='100%' maxH='300px'/>
                        </ListItemBox>
                    ))}
                </ListBox>
            </Flex>
        </MaxContainer>
    </Flex>
  )
}
