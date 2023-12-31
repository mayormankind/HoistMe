import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Flex } from '@chakra-ui/react';
import { FaDesktop, FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const modes = [
    {id:0,icon:<FaMoon/>},
    {id:1,icon:<FaSun/>},
    {id:2,icon:<FaDesktop/>}
  ]

  return (
    <Flex border={`1px solid ${text=='dark'?'white':'black'}`} borderRadius='xl'>
      {modes.map(mode=>(
        <IconButton key={mode.id}
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          onClick={toggleColorMode}
          icon={mode.icon}
          {...props}
          _hover={{transform:'translateY(-5px)'}}
        />
      ))}
    </Flex>
  );
};
