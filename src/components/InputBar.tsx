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
  const {
    title,
    handleChange,
    addToList,
    errorType,
    quantity,
    handleQuantity,
  } = useContext(ListContext);

  return (
    <>
      <Box width='100%' display='flex' gap={3}>
        <Input
          type='text'
          value={title}
          placeholder='Inserte su regalo'
          onChange={handleChange}
          focusBorderColor='#386641'
          borderWidth={2}
        />
        <Input
          type='number'
          width='20%'
          padding={1}
          value={quantity}
          focusBorderColor='#386641'
          borderWidth={2}
          onChange={handleQuantity}
        />
        <Button onClick={addToList} size='md' colorScheme='red'>
          <Icon as={AiFillGift} />
        </Button>
      </Box>
      {errorType && errorType === 'Input Vacio' ? (
        <ErrorMsg>El input no puede estar vacio</ErrorMsg>
      ) : errorType === 'Regalo Repetido' ? (
        <ErrorMsg>El regalo esta repetido</ErrorMsg>
      ) : errorType === 'Cantidad Cero' ? (
        <ErrorMsg>Se debe definir una cantidad de regalos</ErrorMsg>
      ) : null}
    </>
  );
};

export default InputBar;
