import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Banner = () => {
  return (
    <div>
      <Box bg={'#F7FAFC'}>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        padding={80}
        spacing={2}
      >
        <Heading as='h1' frontSize={28}>Hi I'm Imran Hossain</Heading>
        <Text fontSize={24}>An Entrepreneur, Frontend Developer</Text>
        <Text fontSize={16}>Happy Hacking✌️</Text>
      </VStack>
      </Box>
    </div>
  );
};

export default Banner;
