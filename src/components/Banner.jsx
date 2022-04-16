import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Banner = () => {
  return (
    <div>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        padding={60}
        spacing={2}
      >
        <Box>
          <Text fontSize={50}>Hi I'm Imran Hossain</Text>
        </Box>
        <Box><Text fontSize={22}>An Entrepreneur, Frontend Developer</Text></Box>
      </VStack>
    </div>
  );
};

export default Banner;
