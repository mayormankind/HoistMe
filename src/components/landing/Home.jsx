import react, {useEffect, useState} from 'react';
import { Avatar, Box, Flex, IconButton, Image, Text,Button, keyframes, useColorMode } from '@chakra-ui/react';
import { RiArrowGoForwardFill, RiArrowRightFill, RiMenu3Fill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
// import { ColoredBox } from '../chakra/styles';
// import { RandomizeColor } from '../api';

export default function Home(){
    const phraseArr = ['stress','coding','hiring','borrowing'];
    const [ phrase, setPhrase ] = useState('');
    const [ index, setIndex ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const { colorMode } = useColorMode()
    const isDark  = colorMode == 'dark';

  useEffect(() => {
    const updateText = () => {
      const currentText = phraseArr[index];
      setPhrase((prevText) => {
        if (!isDeleting) {
          return currentText.substring(0, prevText.length + 1);
        } else {
          return prevText.substring(0, prevText.length - 1);
        }
      });

      if (!isDeleting && phrase === currentText) {
        setIsDeleting(true);
        setTimeout(() => {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phraseArr.length);
        }, 1000);
      } else if (isDeleting && phrase === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phraseArr.length);
      }
    };

    const typingInterval = setInterval(updateText, 400);

    return () => clearInterval(typingInterval);
  }, [index, isDeleting, phraseArr, phrase]);
    
        
    // useEffect(()=>{
    //     // const changeWord = setInterval(()=>{
    //     //     setPhrase(phraseArr[index]);
    //     //     setIndex(index === phraseArr.length - 1 ? 0 : index + 1);
    //     // },4000)
    //     // return () => clearInterval(changeWord)
    // },[index, phraseArr])

    const anim = keyframes`
        0%{transform: translateX(20px)}
        100%{transform: translateX(0)}
    `;
    // const statements = ['Where you get all that is necessary for your business?','Looking for how to tell your customers about yourself','Wanting to have a better competitive advantage?']
    return(
        <Flex w='100%' h='100vh' flexDir='column'>
                <Flex flexDir='column' w='100%' gap='40px' maxW='800px' m='auto'>
                    <Flex flexDir='column' w='100%' gap='10px' align='center'>
                        <Text as={'h1'} fontSize={{lg:'6xl', sm:'5xl',base:'40px'}} fontWeight={'bold'} textAlign='center' w='100%' h='100%' p={{sm:'0',base:'0 20px'}}>Create your own portfolio without {' '} <Text as='span' bgGradient={'linear-gradient(135deg,#090724,blue.400,red.400,white)'} textShadow={'md'}bgClip={'text'}>{phrase}</Text></Text>
                        <Text color='gray' fontSize={{sm:'20px',base:'17px'}} maxW='550px' p='0 10px' textAlign='center'>HoistMe is a simple, friendly and easy to use platform to create you own portfolio for your business</Text>
                    </Flex>
                    <Flex align={'center'} justify='space-around' w='100%'>
                        <Link to='/createAccount'>
                            <Button variant='with-bg' h='50px' w={{sm:'200px',base:'150px'}} >Get started <RiArrowRightFill fontSize='20px' style={{marginLeft:'20px',animation:`${anim} 2s linear infinite`}}/></Button>
                        </Link>
                        <Button as={'a'} href='#about' h='50px' w={{sm:'200px',base:'150px'}} _hover={{borderColor:'blue.400'}}>View Services</Button>
                    </Flex>
                </Flex>
        </Flex>
    )
}