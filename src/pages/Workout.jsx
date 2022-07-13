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

// layout
import MainLayout from '../layouts/MainLayout';

// components
import CustomTable from '../components/CustomTable';

// utils
import { tableHeader } from '../utils/tableHeader';
import { workouts } from '../utils/dummyData.js';

const Workout = () => {
  return (
    <MainLayout title='Workout' pageIndex={2}>
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
        <CustomTable tableHeader={tableHeader} tableContent={workouts} />
      </VStack>
    </MainLayout>
  );
};

export default Workout;
