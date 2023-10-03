import { Flex, IconButton, Text } from '@chakra-ui/react'
import React,{ useState} from 'react'
import { RiMenuFill } from 'react-icons/ri';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default function Navigation({click}) {
  const [ menu, setMenu ] = useState(false);
  return (
    <Flex p='10px' w='100%' h='70px'>
      <Flex justify='space-between' align='center' w='100%' maxW='1100px' m='auto'>
        <Link to={'/'} flex='0.3'>
          <Text fontWeight='bold' fontSize='22px' cursor={'pointer'}>HoistMe</Text>
        </Link>
        <IconButton variant='ghost' onClick={()=>setMenu(!menu)}fontSize='30px' icon={<RiMenuFill/>} display={{sm:'none',base:'flex'}} zIndex='100'/>
        <NavBar click={click} setMenu={setMenu} menu={menu}/>
      </Flex>
    </Flex>
  )
}