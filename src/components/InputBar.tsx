import { Box, Button, Icon, Input } from '@chakra-ui/react';
import { useContext } from 'react';
import { ListContext } from '../context';

import { AiFillGift } from 'react-icons/ai';

const InputBar = () => {
  const { title, handleChange, addToList } = useContext(ListContext);

  return (
    <Box width='100%' display='flex' gap={5}>
      <Input
        type='text'
        value={title}
        placeholder='Inserte su regalo'
        onChange={handleChange}
        focusBorderColor='#386641'
        borderWidth={2}
      />
      <Button onClick={addToList} size='md' colorScheme='red'>
        <Icon as={AiFillGift} />
      </Button>
    </Box>
  );
};

export default InputBar;
