import { Grid } from '@chakra-ui/react'
import React from 'react'

export default function ListBox({children}) {
  return (
    <Grid w='100%' h={'100%'} mt='20px' flexWrap='wrap' justify={'space-around'} gap='30px' gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} p='30px'>
        {children}
    </Grid>
  )
}