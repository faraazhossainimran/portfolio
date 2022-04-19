import {
  Box, Button, Grid,
  GridItem, HStack, Image, Text, Wrap
} from '@chakra-ui/react';
import React from 'react';
import profile from '../images/profile.jpg';
const About = () => {
  return (
    <div>
      <Box>
        <Text my={16}>WHO AM I</Text>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={10} >
        <GridItem colSpan={1}>
          <Wrap>
          <Box boxSize='250px'  >
              <Image boxShadow='Dark lg' src={profile} alt='Imrans Profile Image' />
          </Box>
            {/* <WrapItem>
              <Avatar size="2xl" name="Imran Hossain" src={profile} />
            </WrapItem> */}
          </Wrap>
        </GridItem>
        <GridItem colSpan={4}>
          <Box>
            <Text mb={8} fontSize={20}>
              I'm a quick learner and a self-taught developer. I have been
              working on Javascript {'&'} related technologies for the past 2
              years. Programming is my passion and I love to create things with
              my ideas.
              My other side is an entrepreneur and business enthusiast
              who enjoys finding technological solutions for people's problems.
            </Text>
            <HStack>
            <Button colorScheme={'white'} color={'black'} border={'2px'} borderColor={'red'} bordered={true}>More about me</Button>
            <Button colorScheme={'white'} color={'black'} border={'2px'} borderColor={'red'} bordered={true}>Download CV</Button>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default About;
