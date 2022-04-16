import { Box, Grid, GridItem, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import gymsite from '../images/gymsite.jpg';
import lawyers from '../images/lawyers.jpg';
const Portfolio = () => {
  return (
      <>
      <Box>
      <Text mt={10}>Portfolio</Text>
          <Grid  templateColumns='repeat(2, 1fr)' gap={6} py={'40px'}>
              <GridItem>
                  <Image  _hover={{ bg: "#8C52FF", color: "#fff" }} src={gymsite} alt={'portfolio Image'}/>
              </GridItem>
              <GridItem>
                      <Text textAlign="right" pt={'20px'}>Featured Project</Text>
                      <Heading textAlign="right" pb={3} color={"#DC143C"}>Gymnasium Website</Heading>
                  <Box bg={'yellow.200'} p={10} mb={5} ml={'-100px'} rounded='lg'  boxShadow='xl'>
                      <Text>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</Text>
                  </Box>
                  <HStack spacing='24px' justifyContent={'right'} pb={3}>
                      <Text>BootStrap</Text>
                      <Text>Html,Css</Text>
                      <Text>JavaScript</Text>
                  </HStack>
                  <HStack spacing='20px' justifyContent={'right'}>
                  <FaGithub size="25px"/>
                  <FaLink size="25px"/>
                  </HStack>
              </GridItem>
          </Grid>
          <Grid  templateColumns='repeat(2, 1fr)' gap={6} py={'40px'}>
              <GridItem position= "relative" >
                      <Text textAlign="left" pt={'20px'}>Featured Project</Text>
                      <Heading textAlign="left" pb={3}>Ecommerce Website</Heading>
                  <Box bg={'purple.300'} p={10} mb={5} mr={'-100px'} z-index="999" rounded='lg' boxShadow='xl'>
                      <Text>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</Text>
                  </Box>
                  <HStack spacing='24px' pb={3}>
                      <Text>BootStrap</Text>
                      <Text>Html,Css</Text>
                      <Text>JavaScript</Text>
                  </HStack>
                  <HStack spacing='20px'>
                  <FaGithub size="25px"/>
                  <FaLink size="25px"/>
                  </HStack>
              </GridItem>
              <GridItem>
                  <Image src={lawyers} alt={'portfolio Image'}/>
              </GridItem>
          </Grid>
      </Box>
      </>
  );
};

export default Portfolio;
