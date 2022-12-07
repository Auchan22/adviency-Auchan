import { Box, Button, Heading, Icon, Input } from '@chakra-ui/react';
import { useContext } from 'react';
import { ListContext } from '../context';

import { AiFillGift } from 'react-icons/ai';
import styled from '@emotion/styled';

const ErrorMsg = styled.p`
  font-size: 20px;
  color: red;
  font-weight: bold;
`;

const InputBar = () => {
  const { title, handleChange, addToList, errorType } = useContext(ListContext);

  return (
    <>
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
      {errorType && errorType === 'Input Vacio' ? (
        <ErrorMsg>El input no puede estar vacio</ErrorMsg>
      ) : errorType === 'Regalo Repetido' ? (
        <ErrorMsg>El regalo esta repetido</ErrorMsg>
      ) : null}
    </>
  );
};

export default InputBar;
