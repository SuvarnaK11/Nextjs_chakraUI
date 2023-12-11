import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Box } from '@chakra-ui/react'

const Button = () => {
    return (
<Box 
position={"absolute"}
p={3}
px={5}
m={3}
bg={"white"}
color={"purple.900"}
rounded={20}
>
    <FaArrowLeft />
</Box>
    )
}

export default Button;