import { Flex, Heading, Input, Button, Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoSunny, IoMoon } from 'react-icons/io5';
import { useState } from 'react';
import React from 'react';
// import Darshak from './darshak';
import Link from 'next/link';
// import Button from './Components/button';
import DarshakPage from './darshak';

const Home = () => {
  const {toggleColorMode} = useColorMode();
  const [toggle, setToggle] = useState(false);
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Flex direction={"column"} background={"gray.100"} p={12} rounded={6} position={"relative"}>
        <Heading>Log In</Heading>

        <Input
          placeholder="Enter Email"
          variant={"filled"}
          mb={3}
          type='email'
        />

        <Input
          placeholder="********"
          variant={"filled"}
          mb={6}
          type='password'
        />

        <Button colorScheme={"teal"}> Login</Button>

        <Box
          position={"absolute"}
          tabIndex={2}
          right={2}
          cursor={"pointer"}
          onClick={()=>{
            toggleColorMode();
            setToggle(!toggle);
          }}
        >
         {toggle ? <IoMoon /> : <IoSunny />}
        </Box>
      </Flex>
      {/* <Darshak /> */}
      <Link href="/darshak">     
          go to darshak page
      </Link>
          <DarshakPage />
      <Link href="/Components/button">
        get button
      </Link>
    </Flex>
  )
}

export default Home