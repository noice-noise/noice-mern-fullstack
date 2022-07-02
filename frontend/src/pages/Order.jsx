import { GridItem } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Flex, VStack, Heading, Text } from '@chakra-ui/react';

const Order = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <Flex
      h={{ base: 'auto' }}
      minHeight="100vh"
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} align="start">
          <Heading size="2xl">Your details</Heading>
          <Text>If you already have an account, click here to log in.</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="John"></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Doe"></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Address"></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Cebu"></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="ph">Phillippines</option>
                <option value="us">United States</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Checkbox defaultChecked>Ship to billing address</Checkbox>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button variant="primary" size="lg" w="full">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg={bgColor}
      >
        <VStack align="start" spacing={3}>
          <Heading size="2xl">Your cart</Heading>
          <Text>
            If the price is too hard on your eyes, try{' '}
            <Button
              onClick={toggleColorMode}
              colorScheme="black"
              variant="link"
            >
              changing the theme here
            </Button>
            .
          </Text>
        </VStack>
        <HStack w="full" justifyContent={'space-evenly'}>
          <AspectRatio ratio={1} w={24}>
            <Image src="https://picsum.photos/200" alt="IMG"></Image>
          </AspectRatio>
          <HStack w="full" px={2}>
            <VStack spacing={0} align="start">
              <Heading size="md">Penny</Heading>
              <Text color={secondaryTextColor}>Board</Text>
            </VStack>
            <Spacer />
            <Heading size="sm">P119.00</Heading>
          </HStack>
        </HStack>
        <HStack w="full" px={2}>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Spacer />
          <Heading size="sm">P119.00</Heading>
        </HStack>
        <HStack w="full" px={2}>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Spacer />
          <Heading size="sm">P119.00</Heading>
        </HStack>
        <HStack w="full" px={2}>
          <Text color={secondaryTextColor}>Taxes</Text>
          <Spacer />
          <Heading size="sm">P119.00</Heading>
        </HStack>
        <Divider />
        <HStack w="full" px={2}>
          <Text color={secondaryTextColor}>Total</Text>
          <Spacer />
          <Heading size="lg">9999.99</Heading>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Order;
