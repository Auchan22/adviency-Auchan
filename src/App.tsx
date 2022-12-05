import { Box, Divider, Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
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
        minWidth='40vw'
        minHeight='70vh'
        mx='auto'
        sx={{
          background: 'rgba(14, 150, 58, 0.91)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropBlur: '24px',
          zIndex: '200',
        }}
        p='15px 20px'
        textAlign='center'
        display='flex'
        alignItems='center'
        flexDir='column'
      >
        <Heading my={5} size='2xl'>
          Adviency
        </Heading>
        <Divider />
        <List />
      </Box>
    </Container>
  );
}

export default App;
