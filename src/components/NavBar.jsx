import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text, HStack } from '@chakra-ui/react';

export default function NavBar({click,menu}){
    const Navs = [
        {id:0,navLabel:'Home',path:'/',navType:'link'},
        {id:2,navLabel:'About',path:'#about',navType:'link'},
        {id:1,navLabel:'Our Talks',path:'/dashboard',navType:'link'}
    ]
    return(
        <Box w='100%' flex='0.6' display={{sm:'block',base:menu==true ? 'flex' : 'none'}} h={{sm:'100%',base:'100vh'}} pos={{sm:'initial',base:'fixed'}} left={{sm:'initial',base:'0'}} top={{sm:'initial',base:'0'}} zIndex={{sm:'0',base:'10'}} bg={{sm:'initial',base:'rgb(0,0,0)'}} overflow='hidden'>
            <Flex justify={{sm:'space-between',base:'space-evenly'}} w='100%' align='center' flexDir={{sm:'row',base:'column'}} flexWrap={{sm:'wrap',base:'nowrap'}}>
                <HStack spacing='4'>
                    {Navs.map(nav=>(
                        <Link to={nav.path} key={nav.id} p={{sm:'0',base:'5px'}}> 
                        <Text borderBottom={nav.navLabel === click ? '2px solid blue.400' : ''} _hover={{borderBottom:'2px solid #618ae8'}}>{nav.navLabel}</Text>
                    </Link>
                    ))}
                </HStack>
                <HStack spacing='3'>
                    <Link to={'/login'} p={{sm:'0',base:'5px'}}> 
                        <Button variant='outline' _hover={{borderColor:'blue.400'}}>Login</Button>
                    </Link>
                    <Link to={'/createAccount'} p={{sm:'0',base:'5px'}}> 
                        <Button variant='outline' _hover={{borderColor:'blue.400'}}>Sign Up</Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
}