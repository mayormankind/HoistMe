import { Flex, IconButton, Text } from '@chakra-ui/react'
import React,{ useState} from 'react'
import { RiMenuFill } from 'react-icons/ri';
import NavBar from './NavBar';

export default function Navigation({click}) {
  const [ menu, setMenu ] = useState(false);
  return (
    // <Flex p='10px' bg='#070722' w='100%' h='70px' pos='sticky' left='0' top='0' zIndex='100' justify='center' align='center' boxShadow='0 0 10px 5px rgba(0,0,0,0.7)'>
    <Flex p='10px' w='100%' h='70px'>
      <Flex justify='space-between' align='center' w='100%' maxW='1100px' m='auto'>
        <Text fontWeight='bold' fontSize='22px' flex='0.5'>HoistMe</Text>
        <IconButton variant='ghost' onClick={()=>setMenu(!menu)}fontSize='30px' icon={<RiMenuFill/>} display={{sm:'none',base:'flex'}} zIndex='100'/>
        <NavBar click={click} setMenu={setMenu} menu={menu}/>
      </Flex>
    </Flex>
  )
}