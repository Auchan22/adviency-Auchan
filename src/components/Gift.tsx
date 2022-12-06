import { Box, Button, Heading, Icon, Image } from '@chakra-ui/react';
import React, { FC, useContext } from 'react';
import { ItemState, ListContext } from '../context';
import GiftIcon from '../assets/Gift-Icon.png';
import { BiTrashAlt } from 'react-icons/bi';

interface Props {
  data: ItemState;
}

const Gift: FC<Props> = ({ data }) => {
  const { deleteFromList } = useContext(ListContext);

  return (
    <Box
      display='flex'
      alignItems='center'
      minWidth='70%'
      gap='25px'
      justifyContent='space-between'
      bgColor='#226f54'
      padding='5px 10px'
      borderRadius='10px'
      boxShadow='10px 10px 64px -7px rgba(0,0,0,0.16)'
    >
      <Image src={`${GiftIcon}`} alt='Gift' width='24px' height='24px' />
      <Heading
        fontSize='20px'
        fontWeight='bolder'
        fontFamily='Solway'
        color='#fefaf5'
      >
        {data.title}
      </Heading>
      <Button onClick={() => deleteFromList(data)}>
        <Icon as={BiTrashAlt} />
      </Button>
    </Box>
  );
};

export default Gift;
