import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { ListContext } from '../context';

const regalos: string[] = ['Silla Gamer', 'Vittel Tone', 'Messi'];

const List = () => {
  const { list } = useContext(ListContext);

  return (
    <Box marginTop='20px' maxWidth='80%'>
      <Heading size='lg'> Lista de Regalos: </Heading>
      <UnorderedList>
        {list.map((el, index) => (
          <ListItem key={el.id}>{el.title}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default List;
