import { Flex, IconButton, Text } from '@chakra-ui/react'
import React,{ useState} from 'react'
import { RiFlagFill, RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function Navigation({click}) {
  const [ menu, setMenu ] = useState(false);
  return (
    <Flex p='10px' w='100%' h='70px'>
      <Flex justify='space-between' align='center' w='100%' maxW='1100px' m='auto'>
        <Link to={'/'} flex='0.3'>
          <Flex align='center' gap='5px' fontFamily={'heading'} fontSize='22px' _hover={{color: '#3498db'}} cursor={'pointer'}><RiFlagFill/>HoistMe</Flex>
        </Link>
        <IconButton variant='ghost' onClick={()=>setMenu(!menu)}fontSize='30px' icon={<RiMenuFill/>} display={{lg:'none',sm:'flex',base:'flex'}} zIndex='300'/>
        <NavBar click={click} setMenu={setMenu} menu={menu}/>
      </Flex>
    </Flex>
  )
}