import React from 'react';
import { Flex } from '@chakra-ui/react';

// components
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const MainLayout = ({ children, title, pageIndex }) => {
  return (
    <Flex>
      <SideBar pageIndex={pageIndex} />
      <TopBar children={children} title={title} />
    </Flex>
  );
};

export default MainLayout;
