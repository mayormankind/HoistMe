import { Flex, Text, Box, Grid } from '@chakra-ui/react'
import React from 'react'
import ListBox from '../ListBox';
import ListItemBox from '../ListItemBox';
import MaxContainer from '../MaxContainer'

export default function Services() {
    const services = [
        {id:'0',service:'Make Clothes',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
        {id:'1',service:'Mend Clothes',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
        {id:'2',service:'Laundry',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
        {id:'3',service:'Make Fascinating Designs',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
        {id:'4',service:'Make Fascinating Designs',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
        {id:'5',service:'Make Fascinating Designs',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
    ];
  return (
    <Flex w='100%' h='100%' flexDir='column'>
        <MaxContainer>
            <Box p='20px 0' w='100%'>
                <Text fontSize='3xl' textAlign='center' fontWeight='semibold'>Services we render</Text>
                <ListBox>
                    {services.map(service=>(
                        <ListItemBox id={service.id} pad='30px'>
                            <Text fontWeight='semibold'>{service.service}</Text>
                            <Text>{service.detail}</Text>
                        </ListItemBox>
                    ))}
                </ListBox>
            </Box>
        </MaxContainer>
    </Flex>
  )
}
