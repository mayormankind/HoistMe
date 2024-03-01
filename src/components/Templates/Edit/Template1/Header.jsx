import { Flex, Text } from "@chakra-ui/react";
import MaxContainer from "../MaxContainer";

export default function TemplateHeader1(){
    const Navs = [
        {id:0,navLabel:'Home',path:'/'},
        {id:1,navLabel:'Our Services',path:'/dashboard'},
        {id:2,navLabel:'About',path:'/about'},
        {id:3,navLabel:'Contact us',path:'/login'}
    ]
    return(
        <Flex mx='auto' maxW='1100px' w='100%' p={'20px 0'}>
            <Flex justify='space-between' align='center' w='100%'>
                <Text flex='0.6' fontWeight='bold' fontSize={'20px'}>ProspectTailors</Text>
                <Flex justify='space-between' align='center' flex='0.4'>
                    {Navs.map(nav =>(
                        <Text fontWeight={'semibold'}>{nav.navLabel}</Text>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}