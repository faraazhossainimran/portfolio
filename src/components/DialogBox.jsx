import {
  Box, Button, Grid, GridItem, Heading, HStack, Text, useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
const DialogBox = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      <GridItem bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
      <Button onClick={onOpen}>
      <Box bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
              <Text>ReactJs</Text>
              <Text>MongoDB</Text>
              <Text>Material Ui</Text>
            </HStack>
          </Box>
        </Box>

      </Button>
      </GridItem>
      <GridItem bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
      <Button onClick={onOpen}>
      <Box bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
              <Text>ReactJs</Text>
              <Text>MongoDB</Text>
              <Text>Material Ui</Text>
            </HStack>
          </Box>
        </Box>

      </Button>
      </GridItem>
      <GridItem bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
      <Button onClick={onOpen}>
      <Box bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
              <Text>ReactJs</Text>
              <Text>MongoDB</Text>
              <Text>Material Ui</Text>
            </HStack>
          </Box>
        </Box>

      </Button>
      </GridItem>
      </Grid>
     

      {/* <Button onClick={onOpen}>
      <Box bg={'gray.100'} p={10} borderBottom={"2px"} borderColor={'purple.300'}>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
              <Text>ReactJs</Text>
              <Text>MongoDB</Text>
              <Text>Material Ui</Text>
            </HStack>
          </Box>
        </Box>

      </Button> */}
      {/* <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box mb={'20px'}>
            <HStack justifyContent={'space-between'}>
            <FaGithub size="35px"/>
            <FaLink size="25px"/>
            </HStack>
          </Box>
          <Heading fontSize="md">
            Ecomerce Website in awesome functionality.
          </Heading>
          <Box >
            <Text my={'15px'}>
              Removed unused CSS from any site Improve CSS code Find Technical
              Errors Fix W3 validation Errors and warnings
            </Text>
          </Box>
          <Box>
            <HStack gap={2}>
              <Text>ReactJs</Text>
              <Text>MongoDB</Text>
              <Text>Material Ui</Text>
            </HStack>
          </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default DialogBox;
