import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Service = () => {
  return (
    <div>
      <Text my={10}>MY SERVICE</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} >
        <GridItem boxShadow={'xl'} p={10} borderBottom={"2px"} borderColor={'red.300'}>
          <Box>
            <Heading fontSize="20" mb={3} textAlign="center">Website Audit</Heading>
          </Box>
          <Box >
            <Text>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow={'xl'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
          <Box>
            <Heading fontSize="20" mb={3} textAlign="center">Frontend Development</Heading>
          </Box>
          <Box>
            <Text>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow={'xl'} p={10} borderBottom={"2px"} borderColor={'red.300'}>
          <Box>
            <Heading fontSize="20" mb={3} textAlign="center">WordPress</Heading>
          </Box>
          <Box>
            <Text>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Service;
