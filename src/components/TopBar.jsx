import React from 'react';
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

// icons
import { HamburgerIcon } from '@chakra-ui/icons';

const TopBar = ({ children, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        width={{
          base: '100%',
          md: 'calc(100vw - 200px)',
          lg: 'calc(100vw - 200px)',
        }}
        minH='100vh'
        direction='column'
      >
        <Flex
          width='100%'
          height='10vh'
          align='center'
          justify='space-between'
          px={{ base: '5', md: '10' }}
        >
          <Flex justify='center' align='center'>
            <Icon
              as={HamburgerIcon}
              boxSize='6'
              display={{ base: 'block', md: 'none' }}
              mr={7}
              cursor='pointer'
              onClick={() => {
                console.log('clicked');
                onOpen();
              }}
            />
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <Text>Hello</Text>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>
              {title}
            </Text>
          </Flex>
          <HStack spacing={4} justify='center' align='center'>
            <Avatar boxSize={30}></Avatar>
          </HStack>
        </Flex>
        <Flex width='100%' px={{ base: '5', md: '10' }} pt={5}>
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
