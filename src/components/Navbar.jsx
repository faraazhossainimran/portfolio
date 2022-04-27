import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box, Button, Container, Flex, HStack, IconButton, Link, Menu,
  MenuButton, Stack, Text, useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from "react-icons/fa";

const Links = ['About me', 'Portfolio', 'Experience'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="static" width="100%" borderBottom="1px solid" borderColor={'#ccc'} boxShadow="sm">
      <Container px={4} maxW="5xl" alignItems={'center'} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10}>
            <Box>IMS</Box>
          </HStack>
          <HStack
              alignItems={'center'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link key={link}><Text fontSize={'lg'}>{link}</Text></Link>
              ))}
            </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <FaGithub
                  size={'30px'}
                  color='black'
                />
              </MenuButton>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}

export default Navbar