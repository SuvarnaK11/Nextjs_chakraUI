
import React from 'react';
import { Box, Heading, Flex, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import Button from './Components/button';
import FormPage from './Components/form';

const DarshakPage = () => {

    return (

        <Flex
            flex-direction="column"
        >
            <Box
                position={"absolute"}
                top={0}
                left={0}
                width={"100vw"}
                height={"100vh"}
                bg={"purple.900"}
                color={"white"}
                rounded={20}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Button />
                <Heading
                    p={20}
                >Check if you can apply</Heading>
                <Box
                    p={7}
                    top={0}
                    left={0}
                    width={"100vw"}
                    height={"100vh"}
                    bg={"white"}
                    color={"purple.900"}
                    rounded={20}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}>

                    <FormPage />

                </Box>
            </Box>
        </Flex>



    )
}

export default DarshakPage;