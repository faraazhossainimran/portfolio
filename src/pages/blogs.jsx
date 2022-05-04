import { Center, Container, Flex, Grid, GridItem, Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import BlogCard from './../components/BlogCard';
  export default function Blogs() {
    return (
     <Layout>
          <Flex
        w={'full'}
        h={'45vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             Blogs
            </Text>
           <Text  color={'white'}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}>
               Some Short Blogs About Web Development.
           </Text>
          </Stack>
        </VStack>
      </Flex>
     <Container maxW='5xl'>
         <Center><Heading py={10}>All Blogs</Heading></Center>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
         <GridItem>
           <BlogCard/>
         </GridItem>
         <GridItem>
           <BlogCard/> 
         </GridItem>
         <GridItem>
           <BlogCard/> 
         </GridItem>
      </Grid>
     </Container>
     </Layout>
    );
  }
  