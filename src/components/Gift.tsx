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
      minWidth='100%'
      gap='25px'
      justifyContent='space-between'
      bgColor='#226f54'
      padding='5px 10px'
      borderRadius='10px'
      boxShadow='10px 10px 64px -7px rgba(0,0,0,0.16)'
    >
      <Image
        src={data.image !== '' ? `${data.image}` : `${GiftIcon}`}
        alt='Gift'
        width='30px'
        height='30px'
        borderRadius={data.image !== '' ? '5px' : 'none'}
      />
      <Heading
        fontSize='20px'
        fontWeight='bolder'
        fontFamily='Solway'
        color='#fefaf5'
        maxWidth='70%'
      >
        {data.title} x{data.quantity}
      </Heading>
      <Button onClick={() => deleteFromList(data)}>
        <Icon as={BiTrashAlt} />
      </Button>
    </Box>
  );
};

export default Gift;
