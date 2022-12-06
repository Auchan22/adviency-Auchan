import { Box, Button, Heading, Image, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { ListContext } from '../context';
import Santa from '../assets/santa.svg';
import Gift from './Gift';

const List = () => {
  const { list, deleteList } = useContext(ListContext);

  return (
    <Box marginTop='20px' minWidth='80%'>
      {list.length > 0 ? (
        <>
          <Stack spacing={5} marginBottom={5} direction='column'>
            {list.map((el) => (
              <Gift data={el} key={el.id} />
            ))}
          </Stack>
          <Button onClick={deleteList}>Borrar Todos</Button>
        </>
      ) : (
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDir='column'
        >
          <Image src={Santa} alt='Santa Claus' width='60%' />
          <Heading as='h5'>La lista esta vacia :(</Heading>
        </Box>
      )}
    </Box>
  );
};

export default List;
