import {
  Icon,
  Text,
  HStack,
  Flex,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaFacebook,
  FaTwitter,
  FaRegUser,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Goal Setter</Link>
        <Button colorScheme="blue" variant="ghost" leftIcon={<FaSignInAlt />}>
          test
        </Button>
      </div>
      <HStack>
        <ButtonGroup spacing="6">
          <Button
            as={Link}
            to="/login"
            colorScheme="brand"
            leftIcon={<FaSignInAlt />}
          >
            Login
          </Button>
          <Button
            as={Link}
            to="/register"
            colorScheme="brand"
            leftIcon={<FaRegUser />}
          >
            Register
          </Button>
        </ButtonGroup>
      </HStack>
    </header>
  );
};

export default Header;
