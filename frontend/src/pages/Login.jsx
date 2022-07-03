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
import { useState } from 'react';
import { FaSignInAlt, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
      <VStack as="form" w="full" spacing="4">
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
