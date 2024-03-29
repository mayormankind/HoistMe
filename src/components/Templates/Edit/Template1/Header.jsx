import { Flex, IconButton, Link, MenuIcon, Text } from "@chakra-ui/react";
import { RiEditFill, RiMenu3Fill} from 'react-icons/ri';
import { useState } from "react";

export default function TemplateHeader1({ handleModal }){
    const [ active, setActiveTab ] = useState('Home');
    const [ menu, setMenu ] = useState(false);

    const Navs = [
        { navLabel:'Home',path:'#home' },
        { navLabel:'About',path:'#home' },
        { navLabel:'Our Services',path:'#services' },
        { navLabel:'Samples',path:'#samples' },
        { navLabel:'Contact us',path:'#contact'}
    ]
    return(
        <Flex mx='auto' maxW='1100px' w='100%' p={'20px 0'} id='home'>
            <Flex justify='space-between' align='center' w='100%'>
                <Flex pos='relative'>
                    <IconButton icon={<RiEditFill/>} onClick={()=>handleModal('header')} pos='absolute' top='0' right='-30px' isRound variant='outline'/>
                    <Text flex={{lg:'0.5',base:'0.4'}} fontSize={'20px'}>ProspectTailors</Text>
                </Flex>
                <Flex justify='space-between' align='center' flex={{lg:'0.5',base:'0.6'}} display={{sm:'flex',base: menu ? 'grid' : 'none'}} bg={{sm:'transparent',base:'violet'}} pos={{sm:'initial',base:'fixed'}} top='0' bottom='0' left='0' right='0' zIndex='200' justifyContent={'center'}>
                    {Navs.map((nav,id) =>(
                        <Link href={nav.path} key={id}>
                            <Text cursor='pointer' textAlign={'center'} borderBottom={active===nav.navLabel ? '2px solid white' : 'transparent'} _hover={{borderBottom:'2px solid white'}} onClick={()=>setActiveTab(nav.navLabel)}>{nav.navLabel}</Text>
                        </Link>
                    ))}
                </Flex>
                <IconButton icon={<RiMenu3Fill/>} variant='ghost' onClick={()=>setMenu(!menu)} fontSize='30px' display={{sm:'none',base:'flex'}} zIndex='300'/>
            </Flex>
        </Flex>
    )
}