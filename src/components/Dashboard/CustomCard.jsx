import React from 'react';
import {
  Flex,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from '@chakra-ui/react';

const CustomCard = ({ cardIcon, cardTitle, cardNumber }) => {
  return (
    <Grid
      boxShadow='0px 1px 3px rgba(0, 0, 0, 0.1)'
      borderRadius={5}
      px={6}
      py={6}
      templateColumns={{ base: 'repeat(2, 1fr)' }}
    >
      <Flex justify={{ base: 'start', sm: 'center' }} align='center'>
        <Icon as={cardIcon} boxSize='35px' color='darkColor' />
      </Flex>
      <Stat>
        <StatLabel color='darkColor' fontWeight='semibold'>
          {cardTitle}
        </StatLabel>
        <StatNumber color='darkColor'>
          {cardNumber < 10 ? '0' + cardNumber : cardNumber}
        </StatNumber>
      </Stat>
    </Grid>
  );
};

export default CustomCard;
