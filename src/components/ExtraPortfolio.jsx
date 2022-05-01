import { Box, Button, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
const ExtraPortfolio = () => {
  return (
      <Box>
       <Text mt={24} mb={12}>OTHER PROJECTS</Text>
       <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        <GridItem shadow="md"
         borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}
         p={10}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text color={'gray.500'} my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
            <Button colorScheme='teal' size='xs'>React Js</Button>
            <Button colorScheme='teal' size='xs'>MongoDb</Button>
            <Button colorScheme='teal' size='xs'>Material UI</Button>
            </HStack>
          </Box>
        </GridItem>
        <GridItem shadow="base"
         borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}
         p={10}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text color={'gray.500'} my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
            <Button colorScheme='teal' size='xs'>React Js</Button>
            <Button colorScheme='teal' size='xs'>MongoDb</Button>
            <Button colorScheme='teal' size='xs'>Material UI</Button>
            </HStack>
          </Box>
        </GridItem>
        <GridItem shadow="base"
         borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}
         p={10}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text color={'gray.500'} my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
            <Button colorScheme='teal' size='xs'>React Js</Button>
            <Button colorScheme='teal' size='xs'>MongoDb</Button>
            <Button colorScheme='teal' size='xs'>Material UI</Button>
            </HStack>
          </Box>
        </GridItem>
        <GridItem shadow="base"
         borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}
         p={10}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text color={'gray.500'} my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
            <Button colorScheme='teal' size='xs'>React Js</Button>
            <Button colorScheme='teal' size='xs'>MongoDb</Button>
            <Button colorScheme='teal' size='xs'>Material UI</Button>
            </HStack>
          </Box>
        </GridItem>
        <GridItem shadow="base"
         borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}
         p={10}
         >
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text color={'gray.500'} my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
            <Button colorScheme='teal' size='xs'>React Js</Button>
            <Button colorScheme='teal' size='xs'>MongoDb</Button>
            <Button colorScheme='teal' size='xs'>Material UI</Button>
            </HStack>
          </Box>
        </GridItem>
        <GridItem shadow="base"
         borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}
         p={10} 
        //  borderBottom={"2px"}
        //  borderColor={'purple.300'}
         >
        
         <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <a href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/" target="_blank"> <FaLink size="25px"/> </a>
           
            </HStack>
          </Box>
          <Heading fontSize="md">
          <a href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/" target="_blank"> Ecomerce Website in awesome functionality. </a>
          </Heading>
          <Box >
            <Text color={'gray.500'} my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
            <Button colorScheme='teal' size='xs'>React Js</Button>
            <Button colorScheme='teal' size='xs'>MongoDb</Button>
            <Button colorScheme='teal' size='xs'>Material UI</Button>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
      </Box>
  );
};

export default ExtraPortfolio;
