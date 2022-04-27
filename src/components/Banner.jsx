import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Banner = () => {
  return (
    <div>
      <Box bg={'#F7FAFC'}>
      <VStack
        minH={'100vh'}
        // divider={<StackDivider borderColor='gray.200' />}
        padding={80}
        spacing={2}
      >
        <Heading as='h1' frontSize={30}>Hi, I'm Imran Hossain</Heading>
        <Text color={'gray.500'} fontSize={24}>An Entrepreneur, Frontend Developer</Text>
        <Text color={'gray.500'} fontSize={16}>Happy Hacking✌️</Text>
      </VStack>
      </Box>
    </div>
  );
};

export default Banner;
