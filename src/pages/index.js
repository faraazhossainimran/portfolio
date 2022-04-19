import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import About from '../../src/components/About';
import Banner from '../../src/components/Banner';
import Experience from '../../src/components/Experience';
import ExtraPortfolio from '../../src/components/ExtraPortfolio';
import Footer from '../../src/components/Footer';
import Navbar from '../../src/components/Navbar';
import Service from '../../src/components/Service';
import Portfolio from '../components/Portfolio';
import SocialMedia from '../components/SocialMedia';
const IndexPage = () => {
  return (
    // bg="#0a192f"
    // bg={'tomato'}
  <Box>
    <Navbar/>
    <Banner/>
    {/* <MyDocument/> */}
    <Container maxW="5xl">
    
    
     <About/>
     <Service/>
     <Portfolio/>
     {/* <DialogBox/> */}
     <ExtraPortfolio/>
     <Experience/>
    </Container>
    <SocialMedia/>
    <Footer/>
  </Box>
  )
}

export default IndexPage
