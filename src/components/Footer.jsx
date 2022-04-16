import { Box, Text } from '@chakra-ui/react';
import React from 'react';
const Footer = () => {
  return (
    <div>
     <Box p={5} borderTop="2px dotted" borderColor={'#ccc'} boxShadow="sm" mt={20}>
     <Text fontSize={15} textAlign={'center'} textColor="gray.600">@Designed and Built by Imran Hossain.</Text>
     </Box>
    </div>
  );
};

export default Footer;
