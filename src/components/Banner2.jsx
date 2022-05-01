import {
  Button, Flex, Stack, Text, useBreakpointValue, VStack
} from '@chakra-ui/react';
import React from 'react';

export default function Banner2() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      // opacity=
      backgroundImage={
        'url(https://images.unsplash.com/photo-1544411047-c491e34a24e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'Center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.1}
            fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
            I'm Imran Hossain
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.1}
            bg={'000'}
            fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
            FrontEnd Developer, An Entrepreneur
          </Text>
          <Stack direction={'row'}>
            <Button
              colorScheme='teal'
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Download CV
            </Button>
            {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Know Me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}