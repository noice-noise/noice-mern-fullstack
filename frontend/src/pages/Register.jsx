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
import { FaRegUser, FaEnvelope, FaLock } from 'react-icons/fa';

import { register, reset } from '../features/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

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
    console.log('value', e.target.value);

    console.log('pswds', password, passwordConfirm);

    if (password !== passwordConfirm) {
      console.log('error');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      console.log('Userdata', userData);

      dispatch(register(userData));
    }
  };

  return (
    <VStack spacing="6" w="full">
      <VStack w="full" spacing="2">
        <Heading as="h1">
          <Flex gap="4">
            <Icon as={FaRegUser} /> <Text>Register</Text>
          </Flex>
        </Heading>
        <Heading size="md">Create an account</Heading>
      </VStack>
      <VStack as="form" onSubmit={onSubmit} w="full" spacing="4">
        <InputGroup>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
          />
        </InputGroup>
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
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<Icon as={FaLock} color="gray.300" />}
          />
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </InputGroup>
        <Button type="submit" w="full">
          Register
        </Button>
      </VStack>
    </VStack>
  );
};
export default Register;
