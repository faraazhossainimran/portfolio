import {
    Box, Container, Grid,
    GridItem, Text
} from '@chakra-ui/react';
import React from 'react';
  const SocialMedia = () => {
    return (
      <div>
        <Box height={'200px'} bg={'gray.100'}>
            <Container maxW={'5xl'}>
            <Grid >
          <GridItem >
          <Text frontSize={14}>Social Media</Text>
          <Text frontSize={18}>Let's be friends together</Text>
          </GridItem>
        </Grid>
            </Container>
        </Box>
      </div>
    );
  };
  
  export default SocialMedia;
  