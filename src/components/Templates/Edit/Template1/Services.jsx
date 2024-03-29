import { Flex, Text, Box, Grid } from '@chakra-ui/react'
import React from 'react'
import ListBox from '../ListBox';
import ListItemBox from '../ListItemBox';
import MaxContainer from '../MaxContainer'

export default function Services() {
    const services = [
        { service:'Make Clothes',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.' },
        { service:'Mend Clothes',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.' },
        { service:'Laundry',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.'},
        { service:'Make Fascinating Designs',detail:'Lorem ipsum , dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.' },
        { service:'Make Fascinating Designs',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.' },
        { service:'Make Fascinating Designs',detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, et suscipit recusandae in laboriosam error earum quod eum numquam quisquam adipisci autem doloribus saepe odit nesciunt debitis.' },
    ];
  return (
    <Flex w='100%' h='100%' flexDir='column' id='services'>
        <MaxContainer>
            <Box p='20px 0' w='100%'>
                <Text fontSize='3xl' textAlign='center' fontWeight='semibold'>Services we render</Text>
                <ListBox>
                    {services.map((service, id)=>(
                        <ListItemBox key={id} pad='30px'>
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
