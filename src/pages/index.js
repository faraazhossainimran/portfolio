import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import About2 from '../../src/components/About2';
import Experience from '../../src/components/Experience';
import ExtraPortfolio from '../../src/components/ExtraPortfolio';
import Footer from '../../src/components/Footer';
import Navbar from '../../src/components/Navbar';
import Banner2 from '../components/Banner2';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
const IndexPage = () => {
  return (
    // bg="#0a192f"
    // bg={'tomato'}
  <Box>
    <Navbar/>
    <Banner2/>
    {/* <MyDocument/> */}
    <Container maxW="5xl">
    <About2/>
    <Service/>
     {/* <About/> */}
     {/* <Service/> */}
     <Portfolio/>
     {/* <DialogBox/> */}
     <ExtraPortfolio/>
     <Experience/>
    </Container>
    {/* <SocialMedia/> */}
    <Footer/>
  </Box>
  )
}

export default IndexPage
