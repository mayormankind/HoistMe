  import { Link } from 'react-router-dom';
import { Box, Flex, IconButton, Button, Text } from '@chakra-ui/react';
import { RiMessengerLine, RiMessengerFill, RiAddFill, RiAddLine, RiSearchLine, RiMenuFill, RiSearchFill } from 'react-icons/ri';
import React,{ useState} from 'react'
import NavBar from './NavBar';

export default function Navigation({click}) {
  const [ menu, setMenu ] = useState(false);
  return (
    <Flex p='10px' bg='#070722' w='100%' h='70px' pos='sticky' left='0' top='0' zIndex='100' justify='center' align='center' boxShadow='0 0 10px 5px rgba(0,0,0,0.7)'>
      <Flex justify='space-between' align='center' w='100%' maxW='1100px'>
        <Text fontWeight='bold' fontSize='22px' flex='0.5' color='white'>HoistMe</Text>
        <IconButton variant='ghost' onClick={()=>setMenu(!menu)}fontSize='30px' icon={<RiMenuFill/>} color='white' display={{sm:'none',base:'flex'}} zIndex='100'/>
        <NavBar click={click} setMenu={setMenu} menu={menu}/>
      </Flex>
    </Flex>
  )
}

export default function NavBar({click,menu}){
    const Navs = [
        {id:0,navLabel:'Home',path:'/',navType:'link'},
        {id:1,navLabel:'Our Talks',path:'/dashboard',navType:'link'},
        {id:2,navLabel:'About',path:'/about',navType:'link'},
        {id:3,navLabel:'Login',path:'/login',navType:'button'},
        {id:4,navLabel:'Create Account',path:'/create',navType:'button'},
    ]
    return(
        <Box color='white' w='100%' flex='0.45' display={{sm:'block',base:menu==true ? 'flex' : 'none'}} h={{sm:'100%',base:'100vh'}} pos={{sm:'initial',base:'fixed'}} left={{sm:'initial',base:'0'}} top={{sm:'initial',base:'0'}} zIndex={{sm:'0',base:'10'}} bg={{sm:'initial',base:'rgb(0,0,0)'}} overflow='hidden'>
            <Flex justify={{sm:'space-between',base:'space-evenly'}} w='100%' align='center' flexDir={{sm:'row',base:'column'}} flexWrap={{sm:'wrap',base:'nowrap'}}>
                {Navs.map(nav=>(
                    nav.navType == 'button' ? (
                        <Link to={nav.path} key={nav.id} p={{sm:'0',base:'5px'}}> 
                            <Button bg='purple' color='white'>{nav.navLabel}</Button>
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