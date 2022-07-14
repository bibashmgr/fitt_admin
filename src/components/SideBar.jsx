import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Image, Text, VStack, Button, Icon } from '@chakra-ui/react';

// icons
import { MdDashboard, MdFitnessCenter } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';

// utils
import { sideBarItems } from '../utils/sideBarItems';

const getIcon = (title) => {
  switch (title) {
    case 'dashboard':
      return MdDashboard;
    case 'workout':
      return MdFitnessCenter;
    case 'plan':
      return HiOutlineClipboardList;
    case 'profile':
      return FiUser;
    default:
      return MdDashboard;
  }
};

const SideBar = ({ pageIndex }) => {
  const navigate = useNavigate();

  return (
    <Flex
      position='fixed'
      direction='column'
      h='100vh'
      w={{ base: '0px', md: '200px', lg: '250px' }}
      py={7}
      justify='space-between'
      align='center'
      display={{ base: 'none', md: 'flex' }}
      boxShadow='0px 1px 3px rgba(0, 0, 0, 0.1)'
      bg='lightColor'
    >
      <VStack>
        <Image
          src='/assets/app_logo.png'
          alt='app_logo'
          boxSize='75px'
          objectFit='cover'
        />
        <Text fontSize='md' fontWeight='bold' color='darkColor'>
          Fitt
        </Text>
      </VStack>
      <Flex direction='column' w='100%'>
        {sideBarItems.map((item, index) => {
          return (
            <Flex
              key={item.id}
              justify='center'
              py={4}
              cursor='pointer'
              onClick={() => navigate(item.link)}
            >
              <Flex w='125px' h='100%' align='center' justify='start'>
                <Icon
                  as={getIcon(item.title)}
                  boxSize='25px'
                  color={index + 1 === pageIndex ? 'primaryColor' : 'gray.600'}
                />
                <Text
                  textTransform='capitalize'
                  ml={4}
                  fontSize='md'
                  fontWeight='semibold'
                  color={index + 1 === pageIndex ? 'primaryColor' : 'gray.600'}
                >
                  {item.title}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <VStack>
        <Button variant='outline' size='md'>
          Logout
        </Button>
      </VStack>
    </Flex>
  );
};

export default SideBar;
