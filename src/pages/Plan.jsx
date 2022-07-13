import React from 'react';
import {
  VStack,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

// icons
import { Search2Icon } from '@chakra-ui/icons';

// layouts
import MainLayout from '../layouts/MainLayout';

// components
import CustomTable from '../components/CustomTable';

// utils
import { tableHeader } from '../utils/tableHeader.js';
import { plans } from '../utils/dummyData.js';

const Plan = () => {
  return (
    <MainLayout title='Plan' pageIndex={3}>
      <VStack spacing={5} align='start' w='100%'>
        <Flex justify='space-between' w='100%'>
          <InputGroup w={{ base: '250px', md: '300px' }}>
            <InputRightElement
              pointerEvents='none'
              children={<Search2Icon color='gray.300' />}
            />
            <Input type='text' placeholder='Search' />
          </InputGroup>
          <Button variant='outline' size='md'>
            Add
          </Button>
        </Flex>
        <CustomTable tableHeader={tableHeader} tableContent={plans} />
      </VStack>
    </MainLayout>
  );
};

export default Plan;
