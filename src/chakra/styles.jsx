import { Box, Button, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { RandomizeColor } from "../api";
import { RiArrowDropDownFill, RiArrowGoBackFill, RiEyeFill, RiEyeOffFill, RiFlagFill, RiLock2Fill, RiLockFill, RiMailFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from "react";

export const ColoredBox = () =>{
    return(
        <Flex boxSize='60px' bg={''} borderRadius='50%' mx='auto' boxShadow={`10px 5px 10px ${RandomizeColor()}`}/>
    )
}

export const HeadLogo = () =>{
    return(
        <Link to={'/'} flex='0.3'>
            <Flex align='center' gap='5px' fontFamily={'heading'} fontSize='22px' _hover={{color: '#3498db'}} cursor={'pointer'}><RiFlagFill/>HoistMe</Flex>
        </Link>
    )
}
export const LinkText = ({ path, text }) =>{
    return(
        <a href={path} flex='0.3'>
            <Text>{text}</Text>
        </a>
    )
}

export const BackDrop = ({ children }) =>{
    return(
        <Flex bg='rgba(0,0,0,0.6)' pos='fixed' top='0' bottom='0' left='0' right='0' w='100%' h='100%' zIndex='400'>
            <Flex pos='relative' flexDir='column' w='100%' maxW='500px' m='auto'  bg='white' p='30px' boxShadow={'lg'}>
                {children}
            </Flex>
        </Flex>
    )
}

export const BackArrow = ({ setModal }) =>{
    return(
        <IconButton icon={<RiArrowGoBackFill/>} onClick={()=>setModal('')} variant='ghost'/>
    )
}

export const PasswordReset = ({ setModal }) =>{
  const [show, setShow] = useState(false);
  const [ error, setError ] = useState({});

  const handleClick = () => setShow(!show);

    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px'>
                <Flex gap='30px' align='center'>
                    <BackArrow setModal={setModal}/>
                    <Heading fontSize='lg'>Change password</Heading>
                </Flex>
                <InputGroup size='lg'>
                    <InputLeftElement><RiLockFill/></InputLeftElement>
                    <Input fontSize='small' type={show? 'text' : 'password'} placeholder='Enter a new password' w='100%'/>
                    <InputRightElement>
                        {!show ? <RiEyeOffFill onClick={handleClick}/> : <RiEyeFill onClick={handleClick}/> }
                    </InputRightElement>
                </InputGroup>
                <InputGroup size='lg'>
                    <InputLeftElement><RiLock2Fill/></InputLeftElement>
                    <Input fontSize='small' type={show? 'text' : 'password'} placeholder='Confirm your new password' w='100%'/>
                    <InputRightElement>
                        {!show ? <RiEyeOffFill onClick={handleClick}/> : <RiEyeFill onClick={handleClick}/> }
                    </InputRightElement>
                </InputGroup>
                <Button variant='with-bg'>Change Password</Button>
            </Flex>
        </BackDrop>
    )
}
export const DeleteAccount = ({ setModal }) =>{
    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px'>
                <Flex gap='30px' align='center'>
                    <BackArrow setModal={setModal}/>
                    <Heading fontSize='lg'>Account Delete</Heading>
                </Flex>
                <Flex gap='20px' flexDir='column'>
                    <Text>Are you sure you want to delete your HoistMe account? Note that this process is irreversible!</Text>
                    <Flex align='center' justify='space-between'>
                        <Button w='30%' variant='outline' _hover={{bg:'red', color:'white', transition:'0.5s'}} colorScheme='red'>Yes</Button>
                        <Button w='30%' colorScheme='teal'>No</Button>
                    </Flex>
                </Flex>
            </Flex>
        </BackDrop>
    )
}

export const Policies = ({ setModal }) =>{
    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px'>
                <Flex gap='30px' align='center'>
                    <BackArrow setModal={setModal}/>
                    <Heading fontSize='lg'>Terms and Policies</Heading>
                </Flex>
                <Flex gap='20px' flexDir='column'>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates mollitia sapiente vitae fugit itaque excepturi magni placeat ducimus, maxime quibusdam tenetur et vel ea eos id cum ad sit temporibus ullam, voluptate sunt fugiat esse debitis? Alias numquam culpa voluptatum quos quod debitis magnam. Est suscipit repellendus harum fugit, assumenda blanditiis molestias inventore. Qui iste est accusamus ullam fugiat non ducimus iusto deserunt repellendus fugit a alias eum tempore nemo eaque quod cumque vero amet, ab, voluptates provident labore id quasi. At ea iste sit, voluptatibus veritatis quisquam possimus et dicta excepturi odit consequuntur vero optio officiis id temporibus.</Text>
                </Flex>
            </Flex>
        </BackDrop>
    )
}

export const HelpDesk = ({ setModal }) =>{
    const [ dropDown, setDropDown ] = useState(false)
    return(
        <BackDrop>
            <Flex flexDir='column' gap='20px'>
                <Flex gap='30px' align='center'>
                    <BackArrow setModal={setModal}/>
                    <Heading fontSize='lg'>FAQ's</Heading>
                </Flex>
                <Flex gap='20px' flexDir='column'>
                    <Flex gap='10px' flexDir='column' boxShadow='md' p='10px'>
                        <Flex justify={'space-between'} bg='lightgray' p='5px' align='center'>
                            <Text>What is HoistMe about?</Text>
                            <IconButton icon={<RiArrowDropDownFill/>} onClick={()=>setDropDown(!dropDown)} variant='ghost'/>
                        </Flex>
                        {dropDown && <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ut! Necessitatibus distinctio laboriosam facere harum iure recusandae porro tenetur sint debitis? Numquam illo culpa, earum odit consectetur doloremque necessitatibus eum?</Text>}
                    </Flex>
                    <Flex gap='10px' flexDir='column' boxShadow='md' p='10px'>
                        <Flex justify={'space-between'} bg='lightgray' p='5px' align='center'>
                            <Text>How can i create a HoistMe account?</Text>
                            <IconButton icon={<RiArrowDropDownFill/>} onClick={()=>setDropDown(!dropDown)} variant='ghost'/>
                        </Flex>
                        {dropDown && <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ut! Necessitatibus distinctio laboriosam facere harum iure recusandae porro tenetur sint debitis? Numquam illo culpa, earum odit consectetur doloremque necessitatibus eum?</Text>}
                    </Flex>
                    <Flex gap='10px' flexDir='column' boxShadow='md' p='10px'>
                        <Flex justify={'space-between'} bg='lightgray' p='5px' align='center'>
                            <Text>Is it possible to create multiple portfolio with HoistMe?</Text>
                            <IconButton icon={<RiArrowDropDownFill/>} onClick={()=>setDropDown(!dropDown)} variant='ghost'/>
                        </Flex>
                        {dropDown && <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ut! Necessitatibus distinctio laboriosam facere harum iure recusandae porro tenetur sint debitis? Numquam illo culpa, earum odit consectetur doloremque necessitatibus eum?</Text>}
                    </Flex>
                </Flex>
            </Flex>
        </BackDrop>
    )
}