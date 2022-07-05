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
import { FaRegUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

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
            <Icon as={FaRegUser} /> <Text>Register</Text>
          </Flex>
        </Heading>
        <Heading size="md">Create an account</Heading>
      </VStack>
      <VStack as="form" w="full" spacing="4">
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
