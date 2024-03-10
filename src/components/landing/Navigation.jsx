import { Flex, IconButton, Text } from '@chakra-ui/react'
import React,{ useState} from 'react'
import { RiFlagFill, RiMenuFill } from 'react-icons/ri';
import NavBar from './NavBar';
import { HeadLogo } from '../../chakra/styles';

export default function Navigation({click}) {
  const [ menu, setMenu ] = useState(false);
  return (
    <Flex p='10px' w='100%' h='70px' pos={{lg:'sticky',base:'none'}} top='0' bg='white' boxShadow='md' zIndex='200'>
      <Flex justify='space-between' align='center' w='100%' maxW='1100px' m='auto'>
        <HeadLogo/>
        <IconButton variant='ghost' onClick={()=>setMenu(!menu)} fontSize='30px' icon={<RiMenuFill/>} display={{lg:'none',sm:'flex',base:'flex'}} zIndex='300'/>
        <NavBar click={click} setMenu={setMenu} menu={menu}/>
      </Flex>
    </Flex>
  )
}