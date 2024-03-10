import { Flex, IconButton, Text } from "@chakra-ui/react";
import MaxContainer from "../MaxContainer";
import { RiArrowRightFill, RiEditFill} from 'react-icons/ri';
import { useState } from "react";

export default function TemplateHeader1({ edit, setEdit, modalTab, setModalTab, handleModal }){
    const [ active, setActiveTab ] = useState('Home');
    const Navs = [
        {id:0,navLabel:'Home',path:'/'},
        {id:1,navLabel:'Our Services',path:'/dashboard'},
        {id:2,navLabel:'About',path:'/about'},
        {id:3,navLabel:'Contact us',path:'/login'}
    ]
    return(
        <Flex mx='auto' maxW='1100px' w='100%' p={'20px 0'}>
            <Flex justify='space-between' align='center' w='100%'>
                <Flex pos='relative'>
                    <IconButton icon={<RiEditFill/>} onClick={()=>handleModal('header')} pos='absolute' top='0' rightleft='0' isRound variant='outline'/>
                    <Text flex='0.7' fontSize={'20px'}>ProspectTailors</Text>
                </Flex>
                <Flex justify='space-between' align='center' flex='0.3'>
                    {Navs.map(nav =>(
                        <Text cursor='pointer' borderBottom={active===nav.navLabel ? '2px solid white' : 'transparent'} _hover={{borderBottom:'2px solid white'}} onClick={()=>setActiveTab(nav.navLabel)}>{nav.navLabel}</Text>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}