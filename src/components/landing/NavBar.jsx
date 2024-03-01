import { Link } from 'react-router-dom';
import { Box, Flex, Button, Text, HStack, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

export default function NavBar({menu,setMenu}){
    const [active, setActive ] = useState('Home');
    const { colorMode } = useColorMode();
    const isDark = colorMode == 'dark';
    const Navs = [
        {id:0,navLabel:'Home',path:'/',navType:'link'},
        {id:2,navLabel:'About',path:'#about',navType:'link'},
        {id:1,navLabel:'Our Talks',path:'/dashboard',navType:'link'}
    ]
    const handleClick = (label) =>{
        setMenu(false);
        setActive(label)
    }
    return(
        <Box w='100%' flex='0.6' display={{lg:'block',base:menu ? 'flex' : 'none'}} h={{sm:'100%',base:'100vh'}} pos={{sm:'initial',base:'fixed'}} left={{sm:'initial',base:'0'}} top={{sm:'initial',base:'0'}} zIndex='100' bg={{ sm:'initial',base:isDark ? "darkbg" : 'lightbg'}} overflow='hidden'>
            <Flex justify={{sm:'space-between',base:'space-evenly'}} w='100%' align='center' flexDir={{sm:'row',base:'column'}} flexWrap={{sm:'wrap',base:'nowrap'}}>
                <HStack spacing='4'>
                    {Navs.map(nav=>(
                        <Link to={nav.path} key={nav.id} p={{sm:'0',base:'5px'}}> 
                            <Text borderBottom={nav.navLabel === active ? '2px solid #007BFF' : ''} onClick={()=>handleClick(nav.navLabel)}>{nav.navLabel}</Text>
                        </Link>
                    ))}
                </HStack>
                <HStack spacing='3'>
                    <Link to={'/login'} p={{sm:'0',base:'5px'}}> 
                        <Button>Login</Button>
                    </Link>
                    <Link to={'/createAccount'} p={{sm:'0',base:'5px'}}> 
                        <Button variant={'with-bg'}>Sign Up</Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
}