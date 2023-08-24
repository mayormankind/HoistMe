import { Link } from 'react-router-dom';
import { Box, Flex, IconButton, Button, Text } from '@chakra-ui/react';
import { RiMessengerLine, RiMessengerFill, RiAddFill, RiAddLine, RiSearchLine, RiSearchFill } from 'react-icons/ri';

export default function NavBar({click,menu}){
    const Navs = [
        {id:0,navLabel:'Home',path:'/',navType:'link'},
        {id:1,navLabel:'Our Talks',path:'/dashboard',navType:'link'},
        {id:2,navLabel:'About',path:'/about',navType:'link'},
        {id:3,navLabel:'Login',path:'/login',navType:'button'},
        {id:4,navLabel:'Sign up',path:'/createAccount',navType:'button'},
    ]
    return(
        <Box w='100%' flex='0.45' display={{sm:'block',base:menu==true ? 'flex' : 'none'}} h={{sm:'100%',base:'100vh'}} pos={{sm:'initial',base:'fixed'}} left={{sm:'initial',base:'0'}} top={{sm:'initial',base:'0'}} zIndex={{sm:'0',base:'10'}} bg={{sm:'initial',base:'rgb(0,0,0)'}} overflow='hidden'>
            <Flex justify={{sm:'space-between',base:'space-evenly'}} w='100%' align='center' flexDir={{sm:'row',base:'column'}} flexWrap={{sm:'wrap',base:'nowrap'}}>
                {Navs.map(nav=>(
                    nav.navType == 'button' ? (
                        <Link to={nav.path} key={nav.id} p={{sm:'0',base:'5px'}}> 
                            {/* <Button bg='purple' color='white'>{nav.navLabel}</Button> */}
                            <Button variant='d-with-border'>{nav.navLabel}</Button>
                        </Link>) : (
                        <Link to={nav.path} key={nav.id} p={{sm:'0',base:'5px'}}> 
                            <Text borderBottom={nav.navLabel === click ? '2px solid solid white' : ''} _hover={{borderBottom:'2px solid white'}}>{nav.navLabel}</Text>
                        </Link>
                        )
                    ))
                }
            </Flex>
        </Box>
    )
}