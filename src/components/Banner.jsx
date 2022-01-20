import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import profile from '../images/profile.jpg';
const Banner = () => {
  return (
    <div>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem
          rowSpan={2}
          height={'300px'}
          colSpan={1}
          bg="tomato"
          d={'block'}
        >
          <Box p={20}>
            <Image  borderRadius='50%' width="100px" src={profile}></Image>
          </Box>
        </GridItem>
        <GridItem
          d="flex"
          alignItems="center"
          colSpan={4}
          height={'300px'}
          bg="gray.500"
          p={10}
        >
          <Box
            display={{ base: 'flex', md: 'block' }}
            flexDir="column"
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text>Introduction</Text>
            <Heading>Hi! I'm Imran</Heading>
            <Heading mb={5}>an entrepreneur, Frontend Developer</Heading>
            <Button mr={3}>Download CV</Button>
            <Button>Portfolio</Button>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Banner;
