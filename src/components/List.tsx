import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const regalos: string[] = ['Silla Gamer', 'Vittel Tone', 'Messi'];

const List = () => {
  return (
    <Box marginTop='20px' maxWidth='80%'>
      <Heading size='lg'> Lista de Regalos: </Heading>
      <UnorderedList>
        {regalos.map((el, index) => (
          <ListItem key={index}>{el}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default List;
