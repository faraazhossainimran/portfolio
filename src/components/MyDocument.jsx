import { Box, Button, Container, Stack } from '@chakra-ui/react';
import React from 'react';
const MyDocument = () => {
  return (
    <div>
      <Box bg={'purple.300'}>
      <Container>
      <Stack
        // divider={<StackDivider borderColor='gray.200' />}
        padding={10}
        spacing={20}
        align='center'
        direction='row'
        maxW={'5xl'}

      >
       <Button>Download Cv</Button>
        <Button>Portfolio</Button>
      </Stack>
      </Container>
      </Box>
    </div>
  );
};

export default MyDocument;