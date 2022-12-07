import { Box, Divider, Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import InputBar from './components/InputBar';
import List from './components/List';
import Snow from './components/Snow';

function App() {
  return (
    <Container
      maxWidth='100vw'
      minHeight='100vh'
      display='flex'
      alignItems='center'
    >
      <Snow />
      <Box
        minWidth='50vw'
        minHeight='100%'
        mx='auto'
        sx={{
          background: 'rgba( 255, 255, 255, 0.25 )',
          borderRadius: '8px',
          boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(13px)',
          zIndex: '200',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}
        p='15px 20px'
        textAlign='center'
        display='flex'
        alignItems='center'
        flexDir='column'
      >
        <Heading
          my={5}
          fontFamily='Solway'
          fontWeight='800'
          size='2xl'
          color='#301600'
        >
          Lista de Regalos
        </Heading>
        <InputBar />
        <List />
      </Box>
    </Container>
  );
}

export default App;
