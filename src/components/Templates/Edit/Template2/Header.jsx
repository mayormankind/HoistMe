import { Flex, Text } from "@chakra-ui/react";

export default function TemplateHeader2(){
    const Navs = [
        {id:0,navLabel:'Home',path:'/',navType:'link'},
        {id:1,navLabel:'Our Talks',path:'/dashboard',navType:'link'},
        {id:2,navLabel:'About',path:'/about',navType:'link'},
        {id:3,navLabel:'Login',path:'/login',navType:'button'},
        {id:4,navLabel:'Create Account',path:'/create',navType:'button'},
    ]
    return(
        <Flex justify='center' h='60px' pos='sticky' top='0' left='0' w='100%' zIndex='200'>
            <Flex mx='auto' maxW='1100px' w='100%'>
                <Flex align='center' w='100%'>
                    <Text flex='0.5'>Macauly</Text>
                    <Flex justify='space-between' align='center' flex='0.5'>
                        {Navs.map(nav =>(
                            <Text>{nav.navLabel}</Text>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}