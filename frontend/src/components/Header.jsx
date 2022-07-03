import { Box, Heading } from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { HStack, Button, ButtonGroup } from '@chakra-ui/react';
import { FaSignInAlt, FaSignOutAlt, FaRegUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <HStack p="4" px="10">
        <Heading size="sm" as={Link} to="/">
          GoalSetter
        </Heading>
        <Spacer />
        <ButtonGroup spacing="6">
          <Button
            px="7"
            as={Link}
            to="/login"
            variant="solid"
            leftIcon={<FaSignInAlt />}
          >
            Login
          </Button>
          <Button
            as={Link}
            to="/register"
            variant="outline"
            leftIcon={<FaRegUser />}
          >
            Register
          </Button>
        </ButtonGroup>
      </HStack>
      <Divider />
    </Box>
  );
};

export default Header;
