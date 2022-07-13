import React from 'react';
import { VStack, Grid } from '@chakra-ui/react';

// layouts:
import MainLayout from '../layouts/MainLayout';

// components:
import CustomCard from '../components/Dashboard/CustomCard';

// icons
import { MdFitnessCenter } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FaUsers, FaUsersCog } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <MainLayout title='Dashboard' pageIndex={1}>
      <VStack spacing={5} w='100%' align='start'>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          w='100%'
          gap={4}
        >
          <CustomCard cardIcon={FaUsersCog} cardTitle='Admin' cardNumber={3} />
          <CustomCard cardIcon={FaUsers} cardTitle='Users' cardNumber={10} />
          <CustomCard
            cardIcon={MdFitnessCenter}
            cardTitle='Workouts'
            cardNumber={120}
          />
          <CustomCard
            cardIcon={HiOutlineClipboardList}
            cardTitle='Plans'
            cardNumber={3}
          />
        </Grid>
      </VStack>
    </MainLayout>
  );
};

export default Dashboard;
