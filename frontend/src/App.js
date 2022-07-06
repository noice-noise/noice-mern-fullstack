import { Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Order from './pages/Order';
import Register from './pages/Register';
import theme from './theme';
import './theme/styles.css';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Header />
          <Container maxW="container.md" p="10" minH="100vh">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Container>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
