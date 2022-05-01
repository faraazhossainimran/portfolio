import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCheckCircle, FaReact, FaWordpressSimple } from "react-icons/fa";

const Service = () => {
  return (
    <div>
     <Box pb={'50px'}>
     <Text mb={12}>MY SKILLS</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} >
        <GridItem boxShadow={'xl'} borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'} >
          <Box px={10} py={4} align={'center'} >
            <FaCheckCircle color={'red.500'} size={'100px'}/>
            <Heading fontSize="20" my={2} textAlign="center">Website Audit</Heading>
          </Box>
          <Box bg={'rgba(245,250,253,0.9)!important'} px={6} pt={2} pb={4}>
            <Text color={'gray.600'}>
              Removed unused CSS from any site and Improve CSS code.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow={'xl'} borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}>
          <Box px={10} py={4} bg={'teal'} align={'center'}>
            < FaReact color={'white'} size={'100px'} />
            <Heading color={'white'} fontSize="20" py={2} textAlign="center">Frontend Development</Heading>
          </Box>
          <Box bg={'rgba(245,250,253,0.9)!important'} px={6} pt={2} pb={4}>
            <Text color={'gray.600'}>
            <b>React Js, TypeScript, JavaScript, Chakra-Ui, BootStrap. </b>
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow={'xl'} borderWidth="1px"
         borderColor={'gray.200'}
         borderRadius={'xl'}>
          <Box px={10} py={4} align={'center'}>
          < FaWordpressSimple color={'#21759b'} size={'100px'} />
            <Heading fontSize="20" my={2} textAlign="center">WordPress</Heading>
          </Box>
          <Box bg={'rgba(245,250,253,0.9)!important'} px={6} pt={2} pb={4}>
            <Text color={'gray.600'}>
              Skilled in Divi, Elementor, WPbakery, Woocommerce
            </Text>
          </Box>
        </GridItem>
      </Grid>  
     </Box>
    </div>
  );
};

export default Service;
