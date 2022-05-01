import {
  Box, Container,
  Flex,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import React from 'react';
import profile from '../images/profile.jpg';
export default function About2() {
  return (
    <Container pb={'50px'} maxW={'5xl'}>
      <Stack
        mt={24}
        mb={12}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box flex={3}>
          <Stack spacing={{ base: 5, md: 6 }}>
            <Box>
              <Text color={'gray.1000'}>WHO AM I</Text>
            </Box>
            <Text fontSize={18} color={'gray.600'}>
              I'm a quick learner and a self-taught developer. I have been
              working on Javascript {'&'} related technologies for the past 2
              years. Programming is my passion and I love to create things with
              my ideas. My other side is an entrepreneur and business enthusiast
              who enjoys finding technological solutions for people's problems.
              You can hire me I'm ready to do the task. I love to do the work
              which have a lot of variations.
            </Text>
            {/* <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                colorScheme="teal"
                // bg={'red.400'}
                // _hover={{ bg: 'red.500' }}
                // variant='outline'
                px={4}
                color={'white'}
              >
                Download CV
              </Button>
              <Button variant="outline">More about me</Button>
            </Stack> */}
          </Stack>
        </Box>

        <Box flex={2}>
          <Flex
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              //   height={'300px'}
              rounded={'md'}
              boxShadow={'base'}
              width={'100%'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={profile}
              />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
}
