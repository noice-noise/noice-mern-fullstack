import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { reset, login } from '../features/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log('oy error', message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <VStack spacing="6" w="full">
      <VStack w="full" spacing="2">
        <Heading as="h1">
          <Flex gap="4">
            <Icon as={FaSignInAlt} /> <Text>Login</Text>
          </Flex>
        </Heading>
        <Heading size="md">Login to your account</Heading>
      </VStack>
      <VStack as="form" onSubmit={onSubmit} w="full" spacing="4">
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<Icon as={FaEnvelope} color="gray.300" />}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={onChange}
          />
        </InputGroup>
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<Icon as={FaLock} color="gray.300" />}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
          />
        </InputGroup>
        <Button type="submit" w="full">
          Login
        </Button>
      </VStack>
    </VStack>
  );
};
export default Login;
