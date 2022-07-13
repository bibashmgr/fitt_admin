import React from 'react';
import {
  HStack,
  TableContainer,
  Table,
  // TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  // Icon,
} from '@chakra-ui/react';

// icons
import { ViewIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
// import { HiDotsHorizontal } from 'react-icons/hi';

const CustomTable = ({ tableHeader, tableContent }) => {
  return (
    <TableContainer
      border='1px'
      borderColor='gray.200'
      borderRadius='5px'
      width='100%'
      pt={2}
    >
      <Table size='lg'>
        {/* <TableCaption>
          <Icon as={HiDotsHorizontal} />
        </TableCaption> */}
        <Thead>
          <Tr>
            {tableHeader.map((header) => {
              return (
                <Th
                  textAlign={header.id === 1 ? 'start' : 'center'}
                  textTransform={header.id === 1 ? 'uppercase' : 'capitalize'}
                >
                  {header.title}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableContent.map((content, index) => {
            return (
              <Tr>
                <Td textAlign='start' fontSize='sm'>
                  {index < 10 && '0' + (index + 1)}
                </Td>
                <Td textAlign='center' fontSize='sm'>
                  {content.name}
                </Td>
                <Td>
                  <HStack justify='center' spacing={4}>
                    <IconButton
                      aria-label='View Workout'
                      colorScheme='twitter'
                      size='sm'
                      icon={<ViewIcon />}
                      title='View'
                    />
                    <IconButton
                      aria-label='Edit Workout'
                      colorScheme='whatsapp'
                      size='sm'
                      icon={<EditIcon />}
                      title='Edit'
                    />
                    <IconButton
                      aria-label='Delete Workout'
                      colorScheme='red'
                      size='sm'
                      icon={<DeleteIcon />}
                      title='Delete'
                    />
                  </HStack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
