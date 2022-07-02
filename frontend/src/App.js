import { Container, extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import theme from './theme';
import './theme/styles.css';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Container maxW="container.xl" p={0}>
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Container>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
