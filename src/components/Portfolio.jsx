import { Box, Button, Grid, GridItem, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import gymsite from '../images/gymsite.jpg';
import lawyers from '../images/lawyers.jpg';
const Portfolio = () => {
  return (
      <div id="portfolio">
      <Box>
      <Text mt={24} mb={12}>PORTFOLIO</Text>
          <Grid  templateColumns='repeat(2, 1fr)' gap={6}>
              <GridItem>
                 <Box rounded={'md'}
              boxShadow={'base'}
              width={'full'}
              overflow={'hidden'}>
                 <Image   fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                _hover={{ bg: "#8C52FF", color: "#fff" }} 
                src={gymsite} alt={'portfolio Image'}/>
                 </Box>
              </GridItem>
              <GridItem>
                      <Text fontSize={14} textAlign="right" pt={'20px'}>Featured Project</Text>
                      <Heading textAlign="right" pb={3} color={"#DC143C"}>Gymnasium Website</Heading>
                  <Box bg={'yellow.200'} p={10} mb={5} ml={'-100px'} rounded='lg'  boxShadow='xl'>
                      <Text>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</Text>
                  </Box>
                  <HStack spacing='12px' justifyContent={'right'} pb={3}>
                  <Button colorScheme='teal' size='xs'>BootStrap</Button>
                  <Button colorScheme='teal' size='xs'>Html</Button>
                  <Button colorScheme='teal' size='xs'>CSS</Button>
                  </HStack>
                  <HStack spacing='20px' justifyContent={'right'}>
                  <FaGithub size="25px"/>
                  <FaLink size="25px"/>
                  </HStack>
              </GridItem>
          </Grid>
          <Grid  templateColumns='repeat(2, 1fr)' gap={6} pt={'100px'}>
              <GridItem position= "relative" >
                      <Text  fontSize={14} textAlign="left" pt={'20px'}>Featured Project</Text>
                      <Heading textAlign="left" pb={3}>Ecommerce Website</Heading>
                  <Box bg={'purple.300'} p={10} mb={5} mr={'-100px'} z-index="999" rounded='lg' boxShadow='xl'>
                      <Text>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</Text>
                  </Box>
                  <HStack spacing='12px' pb={3}>
                  <Button colorScheme='teal' size='xs'>BootStrap</Button>
                  <Button colorScheme='teal' size='xs'>Html</Button>
                  <Button colorScheme='teal' size='xs'>CSS</Button>
                  </HStack>
                  <HStack spacing='20px'>
                  <FaGithub size="25px"/>
                  <FaLink size="25px"/>
                  </HStack>
              </GridItem>
              <GridItem >
                 <Box 
              rounded={'md'}
              boxShadow={'base'}
              width={'full'}
              overflow={'hidden'}>
                 <Image alt={'Portfolio Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'} src={lawyers} alt={'portfolio Image'}/>
                 </Box>
              </GridItem>
          </Grid>
      </Box>
      </div>
  );
};

export default Portfolio;
